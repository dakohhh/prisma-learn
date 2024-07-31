"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // await prisma.user.deleteMany();
        // Inserting data
        const user = yield prisma.user.create({
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
        console.log(user.createdAt.toDateString());
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
    });
}
;
main().catch((error) => {
    console.log(error);
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    prisma.$disconnect();
}));
//# sourceMappingURL=scripts.js.map