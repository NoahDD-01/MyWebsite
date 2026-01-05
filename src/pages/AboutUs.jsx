import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import officeTeam from "../assets/images/officeteam.jpg";
import { getAboutUsList } from '../services/AboutUsService';
import { getChooseUsList } from '../services/ChooseUsService';
import { getOurMissionList } from '../services/OurMissionService';

const AboutUs = () => {
    const { i18n } = useTranslation();
    const [aboutData, setAboutData] = useState(null);
    const [missionData, setMissionData] = useState(null);
    const [chooseUsList, setChooseUsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [aboutRes, missionRes, chooseRes] = await Promise.all([
                    getAboutUsList(),
                    getOurMissionList(),
                    getChooseUsList()
                ]);

                if (aboutRes.data.length > 0) setAboutData(aboutRes.data[0]);
                if (missionRes.data.length > 0) setMissionData(missionRes.data[0]);
                setChooseUsList(chooseRes.data);
            } catch (err) {
                console.error("Error fetching About Us data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to get text based on current language
    const getText = (obj, field) => {
        if (!obj) return "";
        const lang = i18n.language === 'mm' ? 'mm' : 'en';
        return obj[`${field}_${lang}`];
    };

    if (loading) return <div className="min-h-screen bg-[#0A0F2C] flex items-center justify-center text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#0A0F2C] text-white">
            
            {/* 1. Header Section (About Us) */}
            <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-b from-[#11183d] to-[#0A0F2C]">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Who <span className="text-[#FF5F5F]">We Are</span>
                </h1>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    {getText(aboutData, 'des') || "ကျွန်ုပ်တို့သည် ခေတ်မီနည်းပညာများကို အသုံးပြု၍ Solution များ ဖန်တီးပေးနေသည့် အဖွဲ့အစည်းဖြစ်ပါသည်။"}
                </p>
            </section>

            {/* 2. Mission & Vision Section */}
            <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold border-l-4 border-[#FF5F5F] pl-4">
                            {i18n.language === 'mm' ? 'ကျွန်ုပ်တို့၏ ရည်မှန်းချက်' : 'Our Mission'}
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            {getText(missionData, 'des') || "Digital Transformation ကဏ္ဍတွင် အဓိကနေရာမှ ပါဝင်ကူညီပေးရန် ဖြစ်ပါသည်။"}
                        </p>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-[#FF5F5F] font-bold mb-2">Quality First</h3>
                            <p className="text-sm text-gray-300">
                                {i18n.language === 'mm' ? "အသေးစိတ်မှအစ အကောင်းဆုံးဖြစ်အောင် ဆောင်ရွက်ပါသည်။" : "We focus on every detail to ensure quality."}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative aspect-video bg-white/10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                            <img
                                src={officeTeam}
                                alt="Office Team"
                                className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF5F5F]/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us (Dynamic from ChooseUs Model) */}
            <section className="py-20 px-6 md:px-20 bg-white/5">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                    <div className="h-1 w-20 bg-[#FF5F5F] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {chooseUsList.map((item) => (
                        <div key={item.id} className="p-8 rounded-2xl border border-white/10 text-center hover:bg-[#FF5F5F]/5 transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-bold mb-2 text-[#FF5F5F]">
                                {getText(item, 'title')}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {getText(item, 'des')}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;