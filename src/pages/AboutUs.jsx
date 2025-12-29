import React from 'react';
import officeTeam from "../assets/images/officeteam.jpg";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#0A0F2C] text-white">
            {/* 1. Header Section */}
            <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-b from-[#11183d] to-[#0A0F2C]">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Who <span className="text-[#FF5F5F]">We Are</span>
                </h1>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    ကျွန်ုပ်တို့သည် ခေတ်မီနည်းပညာများကို အသုံးပြု၍ လူကြီးမင်းတို့၏ စီးပွားရေးလုပ်ငန်းများအတွက်
                    အကောင်းဆုံးသော Web နှင့် Mobile Software Solution များကို ဖန်တီးပေးနေသည့် အဖွဲ့အစည်းဖြစ်ပါသည်။
                </p>
            </section>

            {/* 2. Mission & Vision Section */}
            <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold border-l-4 border-[#FF5F5F] pl-4">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed">
                            စီးပွားရေးလုပ်ငန်းတိုင်း နည်းပညာကို အလွယ်တကူ အသုံးပြုနိုင်စေရန်နှင့်
                            မြန်မာနိုင်ငံရှိ Digital Transformation ကဏ္ဍတွင် အဓိကနေရာမှ ပါဝင်ကူညီပေးရန် ဖြစ်ပါသည်။
                        </p>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-[#FF5F5F] font-bold mb-2">Quality First</h3>
                            <p className="text-sm text-gray-300">အသေးစိတ်မှအစ အကောင်းဆုံးဖြစ်အောင် ဂရုစိုက်ဆောင်ရွက်ပါသည်။</p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Image Placeholder - သင်တို့ Team ပုံ သို့မဟုတ် Office ပုံထည့်ရန် */}
                        <div className="relative aspect-video bg-white/10 rounded-3xl overflow-hidden border border-white/20">
                            <img
                                src={officeTeam}
                                alt="Office Team"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF5F5F]/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us (Stats or Core Values) */}
            <section className="py-20 px-6 md:px-20 bg-white/5">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                    <div className="h-1 w-20 bg-[#FF5F5F] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        { title: "Expert Team", desc: "ကျွမ်းကျင် Software Engineer များ" },
                        { title: "On-time Delivery", desc: "အချိန်တိကျစွာ အပ်နှံခြင်း" },
                        { title: "Support", desc: "၂၄ နာရီ နည်းပညာအကူအညီ" },
                        { title: "Fair Pricing", desc: "သင့်တင့်မျှတသော ဈေးနှုန်း" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 rounded-2xl border border-white/10 text-center hover:bg-[#FF5F5F]/5 transition-colors">
                            <h3 className="text-xl font-bold mb-2 text-[#FF5F5F]">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;