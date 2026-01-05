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
      <div className="flex justify-center items-center py-20 text-cyan-400 font-mono animate-pulse uppercase tracking-[0.3em]">
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
            const pulseDelay = ((wi + di) * 0.05).toFixed(2);

            return (
              <div
                key={di}
                title={`${day.date}: ${day.contributionCount} Contributions`}
                className={`matrix-cell ${isActive ? "active-node" : "inactive-node"}`}
                style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '2px',
                  '--pulse-delay': `${pulseDelay}s`,
                  // Performance optimization: Hardware acceleration trigger
                  willChange: isActive ? 'transform, opacity' : 'auto'
                }}
              />
            );
          })}
        </div>
      ))}

      <style>{`
        .matrix-cell {
          position: relative;
          /* Optimized transition */
          transition: transform 0.2s ease-out;
        }

        .inactive-node {
          background-color: rgba(255, 255, 255, 0.03); /* Fixed for Dark BG */
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .active-node {
          background-color: #00f2ff;
          /* Breathing animation simplified for performance */
          animation: breathingPulse 4s infinite ease-in-out;
          animation-delay: var(--pulse-delay);
        }

        @keyframes breathingPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
            background-color: #0088cc;
          }
          50% {
            transform: scale(1.05); /* Reduced scale to save repaint costs */
            opacity: 1;
            background-color: #00f2ff;
          }
        }

        /* Hover Interaction - Simple and Clean */
        .matrix-cell:hover {
          transform: scale(1.5) !important;
          z-index: 50;
          background-color: #ffffff !important;
          box-shadow: 0 0 15px #00f2ff !important;
          animation: none;
        }

        /* Custom Scrollbar - Dark Mode Fixed */
        .custom-scrollbar::-webkit-scrollbar {
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 242, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00f2ff;
        }
      `}</style>
    </div>
  );
}