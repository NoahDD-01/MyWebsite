import React from 'react'

const Services = () => {
  return (
    <section className="bg-[#0A0F2C] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#FF5F5F]">Core Services</span>
          </h2>
          <p className="text-gray-400">ကျွန်ုပ်တို့ Company မှ အရည်အသွေးမြင့် Web နှင့် Mobile Software များကို ရေးသားပေးနေပါသည်။</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Development Card */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#FF5F5F]/50 transition-all group">
            <div className="bg-[#FF5F5F]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF5F5F] transition-colors">
              <span className="text-3xl text-[#FF5F5F] group-hover:text-white">🌐</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Modern Web Technologies (React, Vite, Next.js) များကို အသုံးပြု၍ မြန်ဆန်ပြီး Responsive ဖြစ်သော Website များနှင့် Web Applications များကို ဖန်တီးပေးပါသည်။
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">✔ Corporate Websites</li>
              <li className="flex items-center gap-2">✔ E-commerce Solutions</li>
              <li className="flex items-center gap-2">✔ Custom Web Portals</li>
            </ul>
          </div>

          {/* Mobile App Development Card */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#FF5F5F]/50 transition-all group">
            <div className="bg-[#FF5F5F]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF5F5F] transition-colors">
              <span className="text-3xl text-[#FF5F5F] group-hover:text-white">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mobile App Development</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              iOS နှင့် Android နှစ်မျိုးလုံးတွင် အသုံးပြုနိုင်သော Native နှင့် Cross-platform Mobile Apps များကို အသုံးပြုသူ စိတ်တိုင်းကျ ရေးသားပေးပါသည်။
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">✔ iOS & Android Development</li>
              <li className="flex items-center gap-2">✔ User-Friendly UI/UX Design</li>
              <li className="flex items-center gap-2">✔ Scalable Mobile Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services