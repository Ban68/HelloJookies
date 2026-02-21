import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'icon';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <Image
                    src="/images/logo.jpeg"
                    alt="Jookies Bakery"
                    fill
                    className="object-contain scale-[3.2] mix-blend-multiply brightness-[1.02] contrast-[1.05]"
                    priority
                />
            </div>
        </div>
    );
}
