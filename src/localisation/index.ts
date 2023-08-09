import { createI18n } from "vue-i18n";
import en from "./lang/en.json";
import nl from "./lang/nl.json";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en,
        nl
    },
    globalInjection: true,
});

export default i18n;