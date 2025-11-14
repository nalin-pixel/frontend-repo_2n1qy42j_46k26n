import React from 'react'
import { LineChart, CandlestickChart } from 'lucide-react'

export default function CenterCharts() {
  return (
    <div className="flex-1 min-w-0 bg-white/70 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <LineChart className="h-5 w-5 text-violet-600" />
        <span className="font-semibold">Market Preview</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <ChartCard title="BTCUSD • 1h" />
        <ChartCard title="ETHUSD • 1h" />
      </div>
    </div>
  )
}

function ChartCard({ title }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-700">{title}</h3>
        <div className="text-[11px] text-slate-500">Simulated</div>
      </div>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-50 via-white to-white">
        <FakeCandleGrid />
      </div>
    </div>
  )
}

function FakeCandleGrid() {
  // Simple decorative grid with mock candles to imply charts
  return (
    <svg className="h-full w-full" viewBox="0 0 600 330" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="600" height="330" fill="url(#grad)" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`translate(${40 + i * 45}, 0)`}>
          <line x1="0" y1="20" x2="0" y2="300" stroke="#e5e7eb" strokeWidth="1" />
          {Array.from({ length: 6 }).map((__, j) => (
            <rect key={j} x="-6" width="12" y={60 + j * 35 - (i % 3 === 0 ? 8 : 0)} height={20 + ((i + j) % 4) * 12} rx="2" fill={((i + j) % 2 === 0) ? '#10b981' : '#ef4444'} opacity="0.8" />
          ))}
        </g>
      ))}
    </svg>
  )
}
