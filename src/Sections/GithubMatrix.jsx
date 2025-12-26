import React, { useEffect, useState } from "react";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

async function fetchContributions(username, year) {
  const query = `
    {
      user(login: "${username}") {
        contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  return data.data.user.contributionsCollection.contributionCalendar.weeks;
}

export default function GitHubMatrix({ username = "ferdaws-ahmed", year = 2025 }) {
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributions(username, year)
      .then((data) => {
        setWeeks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [username, year]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-primary font-mono animate-pulse uppercase tracking-[0.3em]">
        FETCHING_COMMITS...
      </div>
    );
  }

  return (
    <div className="flex gap-[4px] md:gap-[6px] overflow-x-auto custom-scrollbar pb-10 px-4 scroll-smooth">
      {weeks.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-[4px] md:gap-[6px]">
          {week.contributionDays.map((day, di) => {
            const isActive = day.contributionCount > 0;
            
            // Staggered delay for a natural breathing effect 
            const pulseDelay = ((wi + di) * 0.05).toFixed(2);

            return (
              <div
                key={di}
                title={`${day.date}: ${day.contributionCount} Contributions`}
                className={`matrix-cell ${isActive ? "active-node" : "inactive-node"}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '2px',
                  '--pulse-delay': `${pulseDelay}s`,
                }}
              />
            );
          })}
        </div>
      ))}

      {/* BREATHING MATRIX CSS */}
      
      <style>{`
        .matrix-cell {
          position: relative;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .inactive-node {
          background-color: rgba(0, 242, 255, 0.03);
          border: 1px solid rgba(0, 242, 255, 0.08);
        }

        /* Fixed Cyber-Cyan Color with Breathing Animation */
        .active-node {
          background-color: #00f2ff; /* Tomar New Cyan Color */
          animation: breathingPulse 3.5s infinite ease-in-out;
          animation-delay: var(--pulse-delay);
          box-shadow: 0 0 8px rgba(0, 242, 255, 0.2);
        }

        @keyframes breathingPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
            background-color: #0066cc; /* Deep Blue when breathing out */
            box-shadow: 0 0 5px rgba(0, 102, 204, 0.2);
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
            background-color: #00f2ff; /* Bright Cyan when breathing in */
            box-shadow: 0 0 15px rgba(0, 242, 255, 0.5);
          }
        }

        /* Hover Interaction */
        .matrix-cell:hover {
          transform: scale(1.6) !important;
          z-index: 50;
          background-color: #ffffff !important;
          box-shadow: 0 0 25px rgba(0, 242, 255, 0.9) !important;
          animation: none;
        }

        /* Custom Scrollbar update to match Cyan */
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 242, 255, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00f2ff;
        }
      `}</style>
    </div>
  );
}