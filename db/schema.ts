

import { pgTable, varchar } from "drizzle-orm/pg-core";



export const waitListUser = pgTable("cook-waitlist", {
  id: varchar("id").primaryKey(),
  email: varchar("email").notNull(),
  type: varchar("type").notNull(),
  datetime: varchar("datetime").notNull(),
});

export const userData = pgTable("userData",{
  id:varchar("id").primaryKey(),
  username:varchar("username").unique().notNull(),
  pointer:varchar("pointer").notNull(),
  templatesUser:varchar("templatesUser").array().notNull().default([]),
})


export const templateData = pgTable("template-data",{
  id:varchar("id").primaryKey(),
  name: varchar("name").notNull(),
  category: varchar("category").notNull(),
  date: varchar("date").notNull(),
  author: varchar("author").notNull().references(()=> userData.username ),
  stack: varchar("stack").array().notNull(),
  github: varchar("github").notNull(),
  version: varchar("version").notNull(),
  fileID:varchar("file-id").notNull()
})



export const fileBucket = pgTable("file-bucket",{
  id:varchar("id").primaryKey(),
  pointer:varchar("pointer").notNull(),
  datetime:varchar("datetime").notNull(),
  type:varchar("type").notNull()
})


