import { app } from "electron";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const dbPath = app.getPath("userData") + "/sqlite.db";

const sqlite = new Database(dbPath);

export const db: BetterSQLite3Database = drizzle(sqlite);
export * from "./schema";
