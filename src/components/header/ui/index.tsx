'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/asset/img/logo.png';
import { HEADER_NAV } from '../config';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between w-full h-[70px] px-[600px] py-[15px] bg-white border-b border-[#E3E3E3]">
      <Link href="/today">
        <Image src={logo} width={63} height={30} alt="logo" />
      </Link>
      <div className="flex items-center gap-[30px] font-medium">
        {HEADER_NAV.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-[10px] rounded-xl ${
                isActive
                  ? ' flex items-center justify-center bg-[#009691] w-[52px] h-[39px] text-white font-semibold'
                  : 'text-black font-medium'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
