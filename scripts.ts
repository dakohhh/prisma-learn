import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // await prisma.user.deleteMany();

    // Inserting data

    const user = await prisma.user.create({
        data: {
            name: "Samuel Dakoh",
            email: "samueldakoh@test.com",
            userPreference: {
                create: {
                    emailNotifications: true
                }
            }
        }
    });

    console.log(user);

    // console.log(user.createdAt.toDateString());

    // Selecting data

    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: 3,
    //         email: "victordakoh@test.com"
    //     }
    // })

    // console.log(user);

    // const user = await prisma.user.findMany({
    //     where: {},
    //     select: {
    //         name: true,
    //         email: true,

    //     }
    // })

    // console.log(user);


    // const post = await prisma.post.create({
    //     data: {
    //         title: "Post 3",
    //         content: "This the third post",
    //         user: {
    //             connect: {
    //                 id: 1

    //             }
    //         }

    //     }
    // });

    // console.log(post);

    // const post = await prisma.post.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         content: "This the first post has been updated",
    //     }

    // });

    // console.log(post);

    // const post = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    // }).Post();


    // console.log(user);

};




main().catch((error)=>{

    console.log(error);

}).finally(async ()=>{
    prisma.$disconnect();
});



