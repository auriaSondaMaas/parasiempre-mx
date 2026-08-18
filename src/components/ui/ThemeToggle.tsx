/**
* ThemeToggle - Cambia entre light y dark
*
* - Detecta preferencia del sistema al montar
* - Persiste elección en localStorage
* - Sincroniza con data-theme del <html>
*/

import { useEffect, useState } from 'react';
import type { Theme } from '../../types';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const current = document.documentElement.getAttribute('data-theme') as Theme;
        setTheme(current ?? 'light');
        setMounted(true);
    }, []);

    const toggle = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    if(!mounted)
    {
        return (
            <button className="theme-toggle" aria-label="Toggle theme" style={{ visibility: 'hidden'}}>
                night
            </button>
        )
    }

    return(
        <button
            onClick={toggle}
            className="theme-toggle"
            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
        >
            {theme === 'dark' ? 'day' : 'night'}
            <style>{`
                .theme-toggle {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    border: 1px solid var(--border-soft);
                    border-radius: 100px;
                    background: transparent;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .theme-toggle:hover {
                    border-color: var(--accent);
                    transform: scale(1.05);
                }
            `}</style>
        </button>
    )

}

