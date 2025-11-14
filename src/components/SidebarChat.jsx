import React from 'react'
import { Bot, Send, Loader2 } from 'lucide-react'

export default function SidebarChat() {
  return (
    <aside className="h-full w-full md:w-80 lg:w-96 border-r border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <Bot className="h-5 w-5 text-violet-600" />
        <span className="font-semibold">AI Copilot</span>
      </div>
      <div className="flex h-[calc(100%-56px)] flex-col">
        <div className="flex-1 overflow-y-auto space-y-3 p-4">
          <ChatBubble role="assistant" text="Describe the instrument, timeframe, and entry conditions. I’ll draft a strategy and backtest template." />
          <ChatBubble role="user" text="Build a breakout strategy for BTC, 1h, with ATR stops." />
          <ChatBubble role="assistant" text="Drafting strategy blocks: signal = HH breakout + volume filter; risk = ATR(14) x 2; position = 1% of equity." />
        </div>
        <div className="border-t border-slate-200 p-3">
          <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-2 py-1.5">
            <input className="flex-1 bg-transparent outline-none text-sm" placeholder="Ask the copilot…" />
            <button className="inline-flex items-center gap-1 rounded-md bg-violet-600 px-3 py-1.5 text-white text-sm hover:bg-violet-700">
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">AI replies may reference indicators and risk rules. Review before use.</p>
        </div>
      </div>
    </aside>
  )
}

function ChatBubble({ role, text }) {
  const isAssistant = role === 'assistant'
  return (
    <div className={`max-w-[90%] rounded-lg px-3 py-2 text-sm shadow ${isAssistant ? 'bg-violet-50 text-slate-800' : 'bg-slate-100 ml-auto'}`}>
      {text}
    </div>
  )
}
