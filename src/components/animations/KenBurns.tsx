import { motion, useReducedMotion } from 'framer-motion';

interface KenBurnsProps {
    src: string;
    alt: string;
    duration?: number;
    className?: string;
}

export default function KenBurns({
    src,
    alt,
    duration = 20,
    className = '',
}: KenBurnsProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <img src={src} alt={alt} className={className} />;
    }

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
                duration,
                ease: 'easeOut',
                repeat: Infinity,
                repeatType: 'reverse',
            }}
        />
    );
}