import prisma from './lib/prisma.js';
import bcrypt from 'bcryptjs';

async function main() {
    console.log('Seeding superadmin...');

    const email = 'superadmin@admin.com';
    const password = 'Adeyinka1997$';
    const hashedPassword = await bcrypt.hash(password, 10);

    const superAdmin = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
            email,
            password: hashedPassword,
            role: 'superadmin',
        },
    });

    console.log('Superadmin user created:', superAdmin.email);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
