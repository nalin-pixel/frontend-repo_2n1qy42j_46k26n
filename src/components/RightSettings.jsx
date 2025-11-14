import React from 'react'
import { SlidersHorizontal, Code2, Download } from 'lucide-react'

export default function RightSettings() {
  return (
    <aside className="h-full w-full md:w-80 lg:w-96 border-l border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <SlidersHorizontal className="h-5 w-5 text-violet-600" />
        <span className="font-semibold">Strategy Settings</span>
      </div>
      <div className="h-[calc(100%-56px)] overflow-y-auto p-4 space-y-4">
        <Setting label="Symbol">
          <select className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm">
            <option>BTCUSD</option>
            <option>ETHUSD</option>
            <option>SPY</option>
          </select>
        </Setting>
        <Setting label="Timeframe">
          <select className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm">
            <option>1m</option>
            <option>5m</option>
            <option>1h</option>
            <option>4h</option>
            <option>1D</option>
          </select>
        </Setting>
        <Setting label="Risk per Trade">
          <input type="number" defaultValue={1} className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm" />
        </Setting>
        <Setting label="ATR Period">
          <input type="number" defaultValue={14} className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm" />
        </Setting>
        <Setting label="Entry Logic">
          <textarea rows={3} defaultValue={"Breakouts above last swing high with volume filter."} className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm" />
        </Setting>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="mb-2 flex items-center gap-2 text-slate-700">
            <Code2 className="h-4 w-4 text-violet-600" />
            <span className="text-sm font-medium">Generated Code (Preview)</span>
          </div>
          <pre className="max-h-48 overflow-auto rounded bg-slate-950 p-3 text-[11px] leading-relaxed text-slate-100">
{`def signal(df):
  hh = df['high'].rolling(20).max()
  vol = df['volume'].rolling(10).mean()
  return (df['close'] > hh.shift(1)) & (df['volume'] > vol)`}
          </pre>
          <button className="mt-2 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 text-white text-sm hover:bg-emerald-700">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>
    </aside>
  )
}

function Setting({ label, children }) {
  return (
    <div>
      <div className="mb-1 text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</div>
      {children}
    </div>
  )
}
