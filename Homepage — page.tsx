"use client"
import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [stocks, setStocks] = useState<any[]>([])

  async function search() {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })
    const data = await res.json()
    setStocks(data)
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center">
      <h1 className="text-6xl mt-20 font-bold text-green-400">Pulze</h1>
      <p className="mt-2 text-gray-400">AI Stock Insights</p>

      <input
        className="mt-8 w-96 p-4 bg-gray-900 border border-gray-700"
        placeholder="Ask the market anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={search}
        className="mt-4 px-6 py-3 bg-green-500 text-black rounded"
      >
        Search
      </button>

      <div className="mt-10 w-2/3">
        {stocks.map((s, i) => (
          <div
            key={i}
            className="p-4 border border-gray-700 mt-2 rounded bg-gray-800"
          >
            <strong>{s.symbol}</strong> — ${s.price}
          </div>
        ))}
      </div>
    </div>
  )
}
