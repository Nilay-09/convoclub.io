const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        // console.log(await db.widget.create({ data: {} }));
        await db.category.createMany({
            data: [
                { name: "Famous People" },
                { name: "Movies & TV" },
                { name: "Musicians" },
                { name: "Games" },
                { name: "Animals" },
                { name: "Philosophers" },
                { name: "Scientists" },
            ]
        })
    } catch (err) {
        console.error("error seeding default executing query:", err);
    } finally {
        db.$disconnect();
    }
};

main();