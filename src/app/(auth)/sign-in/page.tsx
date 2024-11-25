"use client"
import SignInForm from "@/components/forms/sign-in"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Separator } from "@/components/ui/separator"
import { useUser } from "@clerk/clerk-react"
import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { useEffect } from "react"

interface UserTable {
    clerkId: string
    firstname: string
    lastname: string
}

// Set up Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and anon key must be provided.")
}
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

const SignInPage = () => {
    const { user } = useUser()

    useEffect(() => {
        const storeUserData = async () => {
            if (user) {
                const { firstName, lastName, id: clerkId } = user

                const { data, error } = await supabase
                    .from("User")
                    .upsert<UserTable>(
                        {
                            clerkId,
                            firstname: firstName ?? "",
                            lastname: lastName ?? "",
                        },
                        { onConflict: "clerkId" },
                    )

                if (error) {
                    console.error("Error storing user data in Supabase:", error)
                } else {
                    console.log("User data stored successfully:", data)
                }
            }
        }

        if (user) {
            storeUserData()
        }
    }, [user])

    return (
        <>
            <h5 className="font-bold text-base text-themeTextWhite">Login</h5>
            <p className="text-themeTextGray leading-tight">
                Network with people from around the world, join groups, create
                your own, watch courses and become the best version of yourself.
            </p>
            <SignInForm />
            <div className="my-10 w-full relative">
                <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    OR CONTINUE WITH
                </div>
                <Separator orientation="horizontal" className="bg-themeGray" />
            </div>
            <GoogleAuthButton method="signin" />
            <p className="text-themeTextWhite text-center mt-2 font-bold text-sm">
                Not registered yet?
                <a
                    href="/sign-up"
                    className="text-blue-600 hover:underline font-semibold px-1"
                >
                    <span className="text-blue-500">Register here!</span>
                </a>
            </p>
        </>
    )
}

export default SignInPage
