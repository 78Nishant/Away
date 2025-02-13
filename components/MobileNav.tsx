'use client'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const pathName = usePathname();
  return (
    <section className='w-full max-w-[16] '>
        <Sheet >
            <SheetTrigger asChild>
                <Image
                    src="/icons/hamburger.svg"
                    alt="Hamburger Menu"
                    width={36}
                    height={36}
                    className='cursor-pointer sm:hidden'
                />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-dark-1">
                <Link href="/" className="flex items-center gap-1">
                    <Image 
                        src={'/icons/logo.svg'}
                        alt='Away Logo'
                        width={32}
                        height={32}
                        loading='eager'
                        className='max-sm:size-10'
                        unoptimized
                    />
                    <p className='text-[26px] font-extrabold text-white'>Away</p>
                    </Link>
                     
                     <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map((link) => {
                                    const isActive = pathName === link.route ;

                                    return (
                                        <SheetClose asChild key={link.route}> 
                                        <Link
                                        href={link.route}
                                        key={link.label}
                                        className={cn('flex items-center gap-4 p-4 rounded-lg', { 'bg-blue-1': isActive })}>

                                        <Image
                                            src={link.imgUrl.startsWith('/') ? link.imgUrl : `/icons/${link.imgUrl}`}
                                            alt={link.label}
                                            width={20}
                                            height={20}
                                            loading="eager"
                                        />
                                        <p className='text-lg  font-semibold max-lg:hidden text-white'>
                                            {link.label}
                                        </p>
                                        </Link>
                                        </SheetClose>
                                    )
                                    })}
                            </section>
                        </SheetClose>

                     </div>


            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav
