import { defaultNS, resources } from "../src/localization/localize";
import es from "../src/localization/translations/es";
import en from "../src/localization/translations/en";

interface I18Namespaces {
  navigation: typeof es.navigation;
  home: typeof es.home;
  createGoal: typeof es.createGoal;
  progress: typeof es.progress;
  settings: typeof es.settings;
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: I18Namespaces;
  }
}
