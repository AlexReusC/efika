import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageDetectorAsyncModule } from "i18next";

import es from "./translations/es";
import en from "./translations/en";

export const defaultNS = "es";

export const resources = {
  es,
  en,
};

const LANGUAGE_DETECTOR: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    callback("es");
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({ lng: "es", ns: ["navigation", "home"], defaultNS, resources });
