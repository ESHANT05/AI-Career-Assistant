import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

//globalThis is used to prevent hot reloading from creating multiple instances of PrismaClient 
// means each time your application reloads, it doesn't create a new instance of PrismaClient, which would break your database connection.
