import React from 'react'
import Hero from './components/Hero'
import SidebarChat from './components/SidebarChat'
import CenterCharts from './components/CenterCharts'
import RightSettings from './components/RightSettings'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Studio Section */}
      <section id="studio" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="-mt-16 mb-6 rounded-2xl border border-slate-200 bg-white/80 shadow-xl ring-1 ring-black/5 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[360px_minmax(0,1fr)_360px]">
            {/* Left: AI Chat */}
            <div className="hidden lg:block">
              <SidebarChat />
            </div>
            {/* Center: Charts */}
            <CenterCharts />
            {/* Right: Settings */}
            <div className="hidden lg:block">
              <RightSettings />
            </div>
          </div>
          {/* Mobile stacked panels */}
          <div className="lg:hidden divide-y divide-slate-200">
            <div className="py-4"><SidebarChat /></div>
            <div className="py-4"><RightSettings /></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-12 text-center text-sm text-slate-500">
        Built for strategy tinkerers. Not financial advice.
      </footer>
    </div>
  )
}

export default App
