"use client"
import GlassSheet from "@/components/global/glass-sheet"
import { UserWidget } from "@/components/global/user-widget"
import { Button } from "@/components/ui/button"
import { Logout } from "@/icons"
import { useSession, useUser } from "@clerk/nextjs"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import Menu from "./menu"

type Props = {}

const LandingPageNavbar = (props: Props) => {
    const { isLoaded, session, isSignedIn } = useSession()
    const { user } = useUser()

    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="font-bold text-2xl">NexGen.</p>
            <Menu orientation="desktop" />
            <div className="flex gap-2">
                {session?.id ? (
                    <UserWidget
                        image={user?.imageUrl}
                        userid={user?.id}
                        groupid="19120b6b-c4ec-42da-9175-e1528c470419"
                    />
                ) : (
                    <Link href="/sign-in">
                        <Button
                            variant="outline"
                            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
                        >
                            <Logout />
                            Login
                        </Button>
                    </Link>
                )}

                <GlassSheet
                    triggerClass="lg:hidden"
                    trigger={
                        <Button
                            variant="ghost"
                            className="hover:bg-transparent"
                        >
                            <MenuIcon size={30} />
                        </Button>
                    }
                >
                    <Menu orientation="mobile" />
                </GlassSheet>
            </div>
        </div>
    )
}

export default LandingPageNavbar
