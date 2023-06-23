import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("players", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(), // unique is not yet implemented
});
