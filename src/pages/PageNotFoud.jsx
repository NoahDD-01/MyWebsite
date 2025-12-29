import React from 'react'

const PageNotFoud = () => {
  return (
    <div className="min-h-screen bg-[#0A0F2C] flex flex-col items-center justify-center text-center px-6">
      {/* 404 Visual */}
      <div className="relative mb-8">
        <h1 className="text-[120px] md:text-[200px] font-black text-white/5 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[#FF5F5F] text-2xl md:text-4xl font-bold tracking-widest uppercase">
            Lost in Space
          </p>
        </div>
      </div>

      {/* Background Glows */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-[#FF5F5F]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  )
}

export default PageNotFoud