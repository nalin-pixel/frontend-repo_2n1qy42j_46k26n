import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[64vh] md:h-[72vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-600" />
            Live 3D • Playful, modern, vibrant
          </div>
          <h1 className="text-3xl leading-tight font-extrabold text-slate-900 drop-shadow-sm sm:text-5xl">
            AI‑Powered Strategy Lab for Traders
          </h1>
          <p className="mt-4 text-slate-700/90 sm:text-lg">
            Sketch ideas with an AI copilot, preview charts in real time, and fine‑tune parameters until your edge feels just right.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#studio" className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-white shadow-md hover:bg-violet-700 transition-colors">
              Open Studio
            </a>
            <a href="/test" className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-2.5 text-slate-900 shadow hover:bg-white transition-colors">
              Backend Test
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
