import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18nEN from "./translations/en.json";
import i18nTR from "./translations/tr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: i18nEN,
      },
      tr: {
        translation: i18nTR,
      },
    },
  });

export default i18n;
