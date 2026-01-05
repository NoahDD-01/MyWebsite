import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getServicetextList } from '../services/ServiceTextService';
import { getServiceBoxList } from '../services/ServiceBoxService';
import {BASE_URL} from '../constants/endpoint';

const Services = () => {
  const { i18n } = useTranslation();
  const [serviceText, setServiceText] = useState(null);
  const [serviceBoxes, setServiceBoxes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // API နှစ်ခုလုံးကို တစ်ပြိုင်တည်း (Parallel) ခေါ်လိုက်တာ ပိုမြန်ပါတယ်
    Promise.all([getServicetextList(), getServiceBoxList()])
      .then(([textRes, boxesRes]) => {
        // ၁။ Header Description အတွက် (Array ရဲ့ အခန်း ၀ ကို ယူပါတယ်)
        if (textRes.data && textRes.data[0]) {
          setServiceText(textRes.data[0]);
        }

        // ၂။ Service Cards အများကြီးအတွက် (Array တစ်ခုလုံးကို သိမ်းပါတယ်)
        if (boxesRes.data) {
          setServiceBoxes(boxesRes.data);
        }
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  // Language အလိုက် စာသားထုတ်ပေးမယ့် function
  const renderHeaderDescription = () => {
    if (loading) return "Loading...";
    if (!serviceText) return "No description available";
    const fieldName = `service_text_${i18n.language === 'mm' ? 'mm' : 'en'}`;
    return serviceText[fieldName] || "Description not found";
  };

  return (
    <section className="bg-[#0A0F2C] py-20 px-6 md:px-20 min-h-[400px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section (API 1) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#FF5F5F]">Core Services</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {renderHeaderDescription()}
          </p>
        </div>

        {/* Dynamic Cards Section (API 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceBoxes.map((box) => (
            <div 
              key={box.id} 
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#FF5F5F]/50 transition-all group"
            >
              {/* Icon Image from Backend */}
              <div className="bg-[#FF5F5F]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF5F5F] transition-colors overflow-hidden p-3">
                {box.icon ? (
                  <img 
                    src={`${BASE_URL}${box.icon}`} 
                    alt={box.title_en} 
                    className="w-full h-full object-contain brightness-100 group-hover:brightness-0 group-hover:invert transition-all"
                  />
                ) : (
                  <span className="text-3xl">🛠</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {i18n.language === 'mm' ? box.title_mm : box.title_en}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {i18n.language === 'mm' ? box.des_mm : box.des_en}
              </p>

              {/* Dynamic JSON List Loop */}
              <ul className="text-gray-300 space-y-2">
                {(i18n.language === 'mm' ? box.service_list_mm : box.service_list_en)?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-[#FF5F5F]">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;