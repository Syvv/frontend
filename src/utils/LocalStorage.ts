import i18n from "../localisation";
import { Language } from "../types/Languages";

export default class LocalStorage {
    public static init() {
        LocalStorage.language = LocalStorage.language;
    }

    public static get language(): Language {
        return (localStorage.getItem("language") ?? "en") as Language;
    }

    public static set language(language: Language) {
        localStorage.setItem("language", language);
        i18n.global.locale.value = language
    }
}