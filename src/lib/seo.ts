/**
 * Configuración de seo centralizada
 */
import type { Language } from '../i18n/ui';

export interface SEOConfig {
    title: string;
    description: string;
    ogImage?: string;
    canonical?: string;
}

const seoData: Record<Language, SEOConfig> = {
    es: {
        title: 'Para Siempre MX · Wedding Experiences',
        description: 'Wedding planners. No planeamos bodas, acompañamos historias. Conoce nuestra propuesta para tu día especial.',
        ogImage: '/images/og-image.jpg',
    },
    en: {
        title: 'Para Siempre MX · Wedding Experiences',
        description: 'Wedding planners in Mexico. We don\'t plan weddings, we accompany stories. Discover our proposal for your special day.',
        ogImage: '/images/og-image.jpg',
    }
};

export function getSEO(lang: Language): SEOConfig {
    return seoData[lang];
}