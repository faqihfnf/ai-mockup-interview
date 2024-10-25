// import { text, varchar } from "drizzle-orm/mysql-core";
import { pgTable, serial, timestamp, varchar, text } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdby: varchar("createdby").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
  language: varchar("language").notNull(),
});

export const UserAnswer = pgTable("userAnswer", {
  id: serial("id").primaryKey(),
  mockIdRef: varchar("mockId").notNull(),
  question: varchar("question").notNull(),
  correctAnswer: text("correctAnswer"),
  userAnswer: text("userAnswer"),
  feedback: text("feedback"),
  rating: varchar("rating"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
});

export const OverallFeedback = pgTable("overallFeedback", {
  id: serial("id").primaryKey(),
  mockIdRef: varchar("mockId").notNull(),
  overallFeedback: text("overallFeedback"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
});
