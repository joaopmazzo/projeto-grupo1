import { PrismaClient } from "@prisma/client/extension";

async function main() {
  const users = await PrismaClient.user.findMany({
    include: { tasks: true },
  });

  console.log("Usuários e tarefas:", users);

  await PrismaClient.$disconnect();
}

main().catch((e) => {
  console.error(e);
  PrismaClient.$disconnect();
});
