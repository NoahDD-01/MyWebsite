import React from 'react';

const services = [
    {
        title: "Web Development",
        icon: "🌐",
        description: "Responsive Website များ၊ Admin Panel များနှင့် E-commerce Platform များကို ခေတ်မီ Framework များဖြင့် ရေးသားပေးပါသည်။",
        features: ["React / Next.js", "Tailwind CSS", "API Integration"]
    },
    {
        title: "Mobile App Development",
        icon: "📱",
        description: "Android နှင့် iOS နှစ်မျိုးလုံးတွင် အဆင်ပြေပြေ အသုံးပြုနိုင်မည့် Cross-platform Mobile App များကို ဖန်တီးပေးပါသည်။",
        features: ["Flutter / React Native", "App Store Deployment", "Firebase Integration"]
    },
    {
        title: "UI/UX Design",
        icon: "🎨",
        description: "အသုံးပြုသူများ စိတ်ကျေနပ်မှုရှိစေမည့် လှပသေသပ်ပြီး အသုံးပြုရလွယ်ကူသော Design System များကို ရေးဆွဲပေးပါသည်။",
        features: ["Figma Design", "User Flow", "Prototype"]
    },
    {
        title: "IT Consulting",
        icon: "💡",
        description: "သင့်လုပ်ငန်းအတွက် လိုအပ်သော Software နည်းပညာများကို အကြံပေးခြင်းနှင့် System အဆင့်မြှင့်တင်ခြင်းများကို ဆောင်ရွက်ပေးပါသည်။",
        features: ["Project Planning", "Technical Support", "Scalability"]
    }
];

const WhatIDo = () => {
    return (
        <div className="min-h-screen bg-[#0A0F2C] text-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Services <span className="text-[#FF5F5F]">I Provide</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        ကျွန်ုပ်တို့ Company သည် လူကြီးမင်းတို့၏ စိတ်ကူးစိတ်သန်းများကို လက်တွေ့ကျသော Digital ထွက်ကုန်များအဖြစ် ပြောင်းလဲပေးပါသည်။
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#FF5F5F]/5 transition-all duration-300 hover:-translate-y-2 shadow-2xl"
                        >
                            <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-[#FF5F5F] transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Feature List */}
                            <div className="flex flex-wrap gap-2">
                                {service.features.map((f, i) => (
                                    <span key={i} className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full border border-white/5">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 mb-5 p-7 md:p-16 bg-gradient-to-r from-[#FF5F5F] to-[#ff4545] rounded-[40px] text-center shadow-2xl shadow-[#FF5F5F]/20 mx-4 md:mx-0">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
                        Project အကြောင်း ဆွေးနွေးလိုပါသလား?
                    </h2>
                    <a
                        href="https://t.me/Pz_1000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-[#FF5F5F] px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all uppercase tracking-wider hover:scale-105 active:scale-95"
                    >
                        Telegram တွင် ဆက်သွယ်ပါ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;