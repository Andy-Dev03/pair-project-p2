import { Timer } from "lucide-react";
import { useSocket } from "../contexts/Context";
export default function CountdownDisplay() {
  const { countdown } = useSocket();
  return (
    <div className="text-center bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-6">
      <div className="text-8xl font-bold text-gray-900 mb-4">{countdown}</div>
      <div className="flex items-center justify-center space-x-2">
        <Timer className="h-6 w-6 text-gray-600" />
        <p className="text-xl text-gray-700 font-medium">Get ready to race!</p>
      </div>
    </div>
  );
}
