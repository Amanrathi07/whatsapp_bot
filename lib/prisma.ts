
import { PrismaClient } from "../prisma/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'


const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({connectionString})

const globalForPrisma = global as unknown as { prismaClient: PrismaClient };

export const prismaClient = globalForPrisma.prismaClient || new PrismaClient({adapter});

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaClient = prismaClient;