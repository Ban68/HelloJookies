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
              Please upload the official logo image to the 'public' folder.
              Rename it to 'logo.png' (for the main specific logo) or update the src here.
              For now, we will use a placeholder text if image fails or while waiting for upload, 
              but the structure is ready for the image.
            */}
            <div className="relative w-full h-full min-w-[120px] min-h-[40px]">
                <Image
                    src="/logo.png"
                    alt="Jookies Bakery"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
