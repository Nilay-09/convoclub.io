import { Menu } from "lucide-react"

import {
    Sheet,
    SheetTrigger,
    SheetContent
} from './ui/sheet'
import Sidebar from "./sidebar"

interface MobileSidebarProps {
    isPro: boolean;
}

function MobileSidebar({ isPro }: MobileSidebarProps) {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4"> <Menu /></SheetTrigger>
            <SheetContent side={"left"} className="p-0 bg-secondary pt-10 w-32">
                <Sidebar isPro={isPro} />
            </SheetContent>

        </Sheet>
    )
}

export default MobileSidebar