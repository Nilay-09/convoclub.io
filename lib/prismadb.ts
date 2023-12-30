import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;

// const prisma = new PrismaClient();
//
// (async () => {
//     try {
//         console.log(await prisma.widget.create({ data: {} }));
//     } catch (err) {
//         console.error("error executing query:", err);
//     } finally {
//         prisma.$disconnect();
//     }
// })();