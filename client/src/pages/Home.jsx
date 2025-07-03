import { useSocket } from "../contexts/Context";
import GameStatusBar from "../homeComponents/GameStatusBar";
import RaceTrack from "../homeComponents/RaceTrack";
import CountdownDisplay from "../homeComponents/CountdownDisplay";
import GameStats from "../homeComponents/GameStats";
import TextDisplay from "../homeComponents/TextDisplay";
import TypingInput from "../homeComponents/TypingInput";
import GameControls from "../homeComponents/GameControls";
import GameResults from "../homeComponents/GameResults";
import PlayersList from "../homeComponents/PlayersList";

export default function Home() {
  const { gameStatus, countdown } = useSocket();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="container mx-auto px-6 py-8">
        {/* Game Status Bar */}
        {gameStatus === "playing" && <GameStatusBar />}

        {/* Race Track with Cars */}
        {(gameStatus === "playing" || gameStatus === "finished") && (
          <RaceTrack />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Typing Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Countdown */}
            {countdown !== null && countdown > 0 && <CountdownDisplay />}

            {/* Stats during game */}
            {gameStatus === "playing" && <GameStats />}

            {/* Text Display */}
            <TextDisplay />

            {/* Input Field */}
            <TypingInput />

            {/* Game Controls */}
            {(gameStatus === "waiting" || gameStatus === "finished") && (
              <GameControls />
            )}

            {/* Game Finished - Show Final Results */}
            {gameStatus === "finished" && <GameResults />}
          </div>

          {/* Right Side - Players & Leaderboard */}
          <div className="space-y-6">
            <PlayersList />
          </div>
        </div>
      </div>
    </div>
  );
}
