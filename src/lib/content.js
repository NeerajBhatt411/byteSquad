// Server-side content loaders: DB-first with hardcoded fallbacks so the
// public site keeps working even if MongoDB is unreachable.
import { getDb, isDbConfigured } from "./db";
import { DEFAULT_SERVICES, DEFAULT_PRODUCTS, DEFAULT_FOOTER } from "./defaults";

function serialize(doc) {
  if (!doc) return doc;
  const { _id, ...rest } = doc;
  return { id: _id ? String(_id) : undefined, ...rest };
}

// Seed a collection with defaults if it has never been populated. A `seeded`
// marker in `meta` makes "admin deleted everything" distinct from "never seeded".
export async function ensureSeeded(name, defaults) {
  const db = await getDb();
  const meta = db.collection("meta");
  const marker = await meta.findOne({ _id: `seeded:${name}` });
  if (!marker) {
    const col = db.collection(name);
    if ((await col.countDocuments()) === 0 && defaults.length) {
      await col.insertMany(defaults.map((d) => ({ ...d })));
    }
    await meta.insertOne({ _id: `seeded:${name}`, at: new Date() });
  }
  return getDb();
}

export async function getServices() {
  if (!isDbConfigured()) return DEFAULT_SERVICES;
  try {
    const db = await ensureSeeded("services", DEFAULT_SERVICES);
    const docs = await db.collection("services").find().sort({ order: 1, _id: 1 }).toArray();
    return docs.map(serialize);
  } catch (err) {
    console.error("getServices: falling back to defaults.", err?.message);
    return DEFAULT_SERVICES;
  }
}

export async function getProducts() {
  if (!isDbConfigured()) return DEFAULT_PRODUCTS;
  try {
    const db = await ensureSeeded("products", DEFAULT_PRODUCTS);
    const docs = await db.collection("products").find().sort({ order: 1, _id: 1 }).toArray();
    return docs.map(serialize);
  } catch (err) {
    console.error("getProducts: falling back to defaults.", err?.message);
    return DEFAULT_PRODUCTS;
  }
}

export async function getProjects() {
  if (!isDbConfigured()) return [];
  try {
    const db = await getDb();
    const docs = await db.collection("projects").find().sort({ order: 1, _id: -1 }).toArray();
    return docs.map(serialize);
  } catch (err) {
    console.error("getProjects: returning empty list.", err?.message);
    return [];
  }
}

export async function getFooterSettings() {
  if (!isDbConfigured()) return DEFAULT_FOOTER;
  try {
    const db = await getDb();
    const doc = await db.collection("settings").findOne({ _id: "footer" });
    return doc ? { ...DEFAULT_FOOTER, ...doc, _id: undefined } : DEFAULT_FOOTER;
  } catch (err) {
    console.error("getFooterSettings: falling back to defaults.", err?.message);
    return DEFAULT_FOOTER;
  }
}
