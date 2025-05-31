import { motion } from 'framer-motion';

function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", score: 2500, badges: 15 },
    { rank: 2, name: "Sarah Smith", score: 2350, badges: 14 },
    { rank: 3, name: "Mike Brown", score: 2200, badges: 13 },
    { rank: 4, name: "Emma Wilson", score: 2100, badges: 12 },
    { rank: 5, name: "James Davis", score: 2000, badges: 11 }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Leaderboard</h1>
        <p className="text-xl text-gray-600">
          Top performers in anti-doping education
        </p>
      </motion.div>

      <div className="game-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left">Rank</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-right">Score</th>
                <th className="px-6 py-3 text-right">Badges</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {player.rank === 1 && "🥇"}
                      {player.rank === 2 && "🥈"}
                      {player.rank === 3 && "🥉"}
                      {player.rank > 3 && player.rank}
                    </div>
                  </td>
                  <td className="px-6 py-4">{player.name}</td>
                  <td className="px-6 py-4 text-right">{player.score}</td>
                  <td className="px-6 py-4 text-right">{player.badges} 🏅</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;