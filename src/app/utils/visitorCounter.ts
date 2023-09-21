// visitor_counter.ts
import Knex from "knex";
import knexInstance from "@/app/utils/knexfile"; // Import the Knex.js configuration
import { visitor_count, vt_cnt } from "../models/semex";
export const revalidate = 0;

export async function getTotalVisitorCount(): Promise<number> {
  // Query the database to retrieve all records and calculate the total count
  const totalVisitorCount = await knexInstance<visitor_count>("visitor_count")
    .sum("cnt as total_count")
    .first();
  console.log(totalVisitorCount);
  // Extract the total count from the result
  return Number(totalVisitorCount) || 0;
}

export async function incrementvisitor_count(): Promise<visitor_count> {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Check if a record for today already exists
  const existingRecord = await knexInstance<visitor_count>("visitor_count")
    .where("v_date", today)
    .first();

  if (!existingRecord) {
    // If there's no record for today, insert a new one with cnt = 1
    const [newRecord] = await knexInstance<visitor_count>("visitor_count")
      .insert({ v_date: today, cnt: 1 })
      .returning("*");
    return newRecord;
  } else {
    // If there's a record for today, increment the count
    await knexInstance<visitor_count>("visitor_count")
      .where("v_date", today)
      .increment("cnt", 1);
    return existingRecord;
  }
}
