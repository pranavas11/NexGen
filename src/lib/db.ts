import { client } from "./prisma"

interface UserData {
    firstname: string
    lastname: string
    clerkId: any
}

export async function storeUserData(userId: string, userData: UserData) {
    return await client.user.upsert({
        where: { clerkId: userId },
        update: {
            firstname: userData.firstname,
            lastname: userData.lastname,
        },
        create: {
            firstname: userData.firstname,
            lastname: userData.lastname,
            clerkId: userData.clerkId,
        },
    })
}
