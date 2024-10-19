import { text, varchar } from "drizzle-orm/mysql-core";
import { pgTable, serial, timestamp, varchar, text } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdby: varchar("createdby").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  mockId: varchar("mockId").notNull(),
});
