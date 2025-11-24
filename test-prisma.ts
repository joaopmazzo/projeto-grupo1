import { prisma } from './prisma.config';

async function main() {
  const users = await prisma.user.findMany({
    include: { tasks: true },
  });

  console.log("Usuários e tarefas:", users);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});
