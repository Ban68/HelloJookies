import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={cn("relative overflow-hidden", className)}>
            {/* 
              The source logo.jpeg is square with ~60% whitespace top/bottom.
              We scale 2.6x and offset vertically so only the text band is visible.
              mix-blend-multiply hides the white JPEG background against any light bg.
            */}
            <Image
                src="/images/logo.jpeg"
                alt="Jookies Bakery"
                fill
                className="object-cover mix-blend-multiply scale-[2.6] translate-y-[5%]"
                priority
                sizes="(max-width: 768px) 176px, 200px"
            />
        </div>
    );
}
