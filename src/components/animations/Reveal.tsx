/**
* Reveal - Anima un elemento con fade + translate cuando entra al viewport
*
* Uso:
*   <Reveal><h1>Hola</h1></Reveal>
*   <Reveal delay={0.2} y={40}><p>Con delay</p></Reveal>
*/

import { motion, useReducedMotion } from 'framer-motion';
import type { JSX, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export default function Reveal({
    children,
    delay = 0,
    duration = 1,
    y = 30,
    once = true,
    className = '',
    as = 'div'
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();
    const MotionTag = motion[as] as typeof motion.div;

    if (shouldReduceMotion)
    {
        const Tag = as as keyof JSX.IntrinsicElements;
        return <Tag className={className}>{children}</Tag>;
    }

    return(
        <MotionTag 
            initial={{ opacity: 0, y }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '-80px' }}
            transition={{
                duration,
                delay,
                ease: [0.2, 0.9, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </MotionTag>
    )

}