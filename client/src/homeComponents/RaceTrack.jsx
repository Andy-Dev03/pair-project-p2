import { Trophy, User } from "lucide-react";
import { useSocket } from "../contexts/Context";

export default function RaceTrack() {
  const { players, username, getProgress } = useSocket();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 rounded-xl shadow-lg border border-blue-200 p-6 mb-6 relative overflow-hidden">
      <div className="flex items-center justify-center mb-12 relative z-10">
        <div className="flex items-center space-x-2">
          <Trophy className="h-6 w-6 text-amber-500" />
          <h2 className="text-2xl font-bold text-gray-900">Race Progress</h2>
        </div>
      </div>

      <div className="space-y-8">
        {players.slice(0, 5).map((player) => (
          <div key={player.username} className="relative">
            <div className="relative mb-2">
              {/* Moving player icon */}
              <div
                className="absolute -top-8 transition-all duration-500 ease-out transform"
                style={{
                  left: `${Math.max(
                    Math.min(getProgress(player) - 2, 96),
                    0
                  )}%`,
                  zIndex: 20,
                }}
              >
                <div className="relative group">
                  <div
                    className={`h-8 w-8 rounded-full shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden ${
                      player.username === username
                        ? "bg-blue-500 ring-2 ring-blue-200"
                        : "bg-gray-500 ring-2 ring-gray-300"
                    }`}
                  >
                    <span className="text-sm font-bold uppercase text-white">
                      {player.username.charAt(0)}
                    </span>
                  </div>

                  {/* Name appears on hover */}
                  <div
                    className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white/95 border rounded-full px-2 py-1 text-xs font-medium whitespace-nowrap shadow-sm transition-all duration-300 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 ${
                      player.username === username
                        ? "text-blue-600 border-blue-100"
                        : "text-gray-700 border-gray-200"
                    }`}
                  >
                    {player.username}
                    {player.username === username && (
                      <span className="text-[10px] text-blue-500 ml-0.5">
                        (You)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Fancy Track Bar */}
              <div className="relative h-4 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-full overflow-hidden border border-blue-300 shadow-inner">
                {/* Progress */}
                <div
                  className={`h-full transition-all duration-500 ease-out relative ${
                    player.username === username
                      ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700"
                      : "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700"
                  }`}
                  style={{ width: `${getProgress(player)}%` }}
                >
                  {/* Glow overlay */}
                  <div className="absolute top-0 left-0 h-full w-full bg-white/10 animate-pulse"></div>
                </div>

                {/* Track Markings */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-between px-2 items-center pointer-events-none">
                  <div className="flex-1 h-full flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex-1 flex justify-center">
                        <div className="h-2 w-0.5 bg-blue-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
