import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
        <h2 className="text-xl font-orbitron">Loading...</h2>
      </div>
    </div>
  )
}
