import { ui, defaultLang, type Language, type UIKey } from './ui';

/**
 * Extrae el idioma actual desde la URL
 * / → es (default)
 * /en → en
*/
export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (lang in ui)
    {
        return lang as Language;
    }
    return defaultLang;
}

// Devuelve una función de traducción de claves de UI para un idioma específico.
export function useTranslations(lang: Language) {
    return function t(key: UIKey): string {
        return ui[lang][key] ?? ui[defaultLang][key]
    };
}

// Ruta traducida 
export function getRouteForLang(currentPath: string, targetLang: Language): string {
    const cleanPath = currentPath.replace(/^\/(es|en)/, '') || '/';
    if ( targetLang === defaultLang)
    {
        return cleanPath;
    }
    return `/${targetLang}${cleanPath}`;
}