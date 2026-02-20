import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderSocialIconsProps {
  stickyNav: boolean;
}

export default function HeaderSocialIcons({ stickyNav }: HeaderSocialIconsProps) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isVisible = stickyNav || isSmallScreen;

  return (
    <div className={`cursor-pointer ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="flex gap-1">
        <Link href="/" aria-label="Facebook">
          <Image src="/icons/facebook-blue.png" width={24} height={24} alt="Facebook logo" />
        </Link>
        <Link href="/" aria-label="Instagram">
          <Image src="/icons/instagram-color.png" width={24} height={24} alt="Instagram logo" />
        </Link>
        <Link href="/" aria-label="tiktok">
          <Image src="/icons/tiktok-circle.png" width={24} height={24} alt="tiktok" />
        </Link>
      </div>
    </div>
  );
}