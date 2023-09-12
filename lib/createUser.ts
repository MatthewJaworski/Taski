import { prisma } from './databaseConnection';

export const createUser = async (id: string, email: string) => {
  await prisma.user.create({
    data: {
      clerkId: id,
      email: email,
    },
  });
};
