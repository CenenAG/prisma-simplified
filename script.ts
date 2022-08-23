import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({log:["query"]})

async function main() {
    const user = await prisma.user.create({ 
        data: {
            name: 'John3',
            email: 'john3@prisma.io',
            age: 36,
            UserPreferences: {
                create: {
                    emailUpdates: true,
                }
            }

        },
    })
    console.log(user)
}

main()
    .catch((e) => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
