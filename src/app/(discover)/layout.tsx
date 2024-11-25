import { Navbar } from "./_components/navbar"

type ExploreLayoutProps = {
    children: React.ReactNode
    params: {
        groupid: string
    }
}

const DiscoverLayout = async ({ children, params }: ExploreLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-black pb-10">
            {/* @ts-ignore */}
            <Navbar groupid={params.groupid} />
            {children}
        </div>
    )
}

export default DiscoverLayout
