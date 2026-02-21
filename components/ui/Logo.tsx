import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'icon';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            {/* 
              User Instructions:
              Please upload the official logo image to the 'public/images' folder.
              Rename it to 'logo.png' (for the main specific logo) or update the src here.
              For now, the structure is ready for the image once uploaded.
            */}
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
