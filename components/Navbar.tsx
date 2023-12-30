'use client';

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./MobileSidebar";
import { useProModal } from "@/hooks/use-pro-model";

const font = Poppins({
    weight: '600',
    subsets: ['latin']
});

interface NavbarProps {
    isPro: boolean;
}

function Navbar({ isPro }: NavbarProps) {
    const proModel = useProModal();
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">

                <MobileSidebar isPro={isPro} />
                <Link href='/'>
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
                        convoClub.io
                    </h1>
                </Link>
            </div>
            <div className="flex gap-3 items-center">
                {!isPro && (
                    <Button onClick={proModel.onOpen} variant={"premium"} size={'sm'}>Upgrade
                        <Sparkles className="h-4 w-4 fill-white text-white ml-2"></Sparkles>
                    </Button>
                )}
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div >
    )
}

export default Navbar