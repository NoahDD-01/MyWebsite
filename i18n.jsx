import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "HOME": "HOME",
                    "OUR WORK": "OUR WORK",
                    "WHAT WE DO": "WHAT WE DO",
                    "PORTFOLIO": "PORTFOLIO",
                    "ABOUT US": "ABOUT US",
                    "Contact Us": "Contact Us",
                    "HERO_TITLE": "Design Your Future With Phyo",
                    "HERO_FUTURE": "Future",
                    "HERO_DESC": "Creative agency specializing in UI/UX design and professional web development. We build experiences that matter.",
                    "START_PROJECT": "Start a Project",
                    "MY_PORTFOLIO": "My Portfolio"
                }
            },
            mm: {
                translation: {
                    "HOME": "ပင်မ",
                    "OUR WORK": "လုပ်ဆောင်ချက်များ",
                    "WHAT WE DO": "ဘာတွေလုပ်သလဲ",
                    "PORTFOLIO": "လက်ရာများ",
                    "ABOUT US": "ကျွန်ုပ်တို့အကြောင်း",
                    "Contact Us": "ဆက်သွယ်ရန်",            
                    "HERO_DESC": "UI/UX ဒီဇိုင်းနှင့် ပရော်ဖက်ရှင်နယ် ဝဘ်ဆော့ဖ်ဝဲလ် ထုတ်လုပ်ရေးတွင် အထူးပြုသည့် ဖန်တီးမှုအေဂျင်စီ ဖြစ်ပါသည်။ ကျွန်ုပ်တို့သည် အရေးပါသော Software,Websit များကို တည်ဆောက်ပေးပါသည်။",
                    "START_PROJECT": "ပရောဂျက်စတင်ရန်",
                    "MY_PORTFOLIO": "ကျွန်ုပ်၏ လက်ရာများ"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;