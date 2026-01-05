import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServiceBoxList } from '../services/ServiceBoxService';
import {BASE_URL} from '../constants/endpoint';

const WhatIDo = () => {
    const { i18n } = useTranslation();
    const [serviceBoxes, setServiceBoxes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getServiceBoxList()
            .then((res) => {
                if (res.data) {
                    setServiceBoxes(res.data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching Service Boxes:", err);
                setLoading(false);
            });
    }, []);

    // Helper: လက်ရှိ Language အလိုက် Field နာမည်ယူရန်
    const getField = (obj, field) => {
        const lang = i18n.language === 'mm' ? 'mm' : 'en';
        return obj[`${field}_${lang}`];
    };

    return (
        <div className="min-h-screen bg-[#0A0F2C] text-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Services <span className="text-[#FF5F5F]">I Provide</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        {i18n.language === 'mm' 
                            ? "ကျွန်ုပ်တို့ Company သည် လူကြီးမင်းတို့၏ စိတ်ကူးစိတ်သန်းများကို လက်တွေ့ကျသော Digital ထွက်ကုန်များအဖြစ် ပြောင်းလဲပေးပါသည်။"
                            : "Our company transforms your ideas into practical digital products."
                        }
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {loading ? (
                        <div className="col-span-full text-center text-gray-400">Loading Services...</div>
                    ) : (
                        serviceBoxes.map((service) => (
                            <div
                                key={service.id}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#FF5F5F]/5 transition-all duration-300 hover:-translate-y-2 shadow-2xl"
                            >
                                {/* Icon Image from Backend */}
                                <div className="mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-[#FF5F5F] transition-colors duration-300 overflow-hidden p-3">
                                    {service.icon ? (
                                        <img 
                                            src={`${BASE_URL}${service.icon}`} 
                                            alt="icon" 
                                            className="w-full h-full object-contain brightness-100 group-hover:brightness-0 group-hover:invert transition-all"
                                        />
                                    ) : (
                                        <span className="text-3xl">🌐</span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {getField(service, 'title')}
                                </h3>
                                
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {getField(service, 'des')}
                                </p>

                                {/* Dynamic Feature List (JSON Array) */}
                                <div className="flex flex-wrap gap-2">
                                    {(i18n.language === 'mm' ? service.service_list_mm : service.service_list_en)?.map((f, i) => (
                                        <span key={i} className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full border border-white/5 group-hover:border-[#FF5F5F]/30">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Call to Action */}
                <div className="mt-12 mb-5 p-7 md:p-16 bg-gradient-to-r from-[#FF5F5F] to-[#ff4545] rounded-[40px] text-center shadow-2xl shadow-[#FF5F5F]/20 mx-4 md:mx-0">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
                        {i18n.language === 'mm' ? "Project အကြောင်း ဆွေးနွေးလိုပါသလား?" : "Want to discuss a project?"}
                    </h2>
                    <a
                        href="https://t.me/Pz_1000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-[#FF5F5F] px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all uppercase tracking-wider hover:scale-105 active:scale-95"
                    >
                        {i18n.language === 'mm' ? "Telegram တွင် ဆက်သွယ်ပါ" : "Contact via Telegram"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;