import { MongoClient } from "mongodb";

// Reuse one client across hot reloads / route invocations.
let clientPromise = globalThis._bsMongoClientPromise;

export function isDbConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

export async function getDb() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }
  if (!clientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 6000,
    });
    clientPromise = client.connect();
    globalThis._bsMongoClientPromise = clientPromise;
  }
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB || "bytesquad");
}
