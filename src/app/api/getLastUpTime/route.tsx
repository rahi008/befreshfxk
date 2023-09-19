import sqlConfig from "@/app/utils/db";
import knexInstance from "@/app/utils/knexfile"; // Import the Knex.js configuration
import { Knex, knex } from "knex";
import { NextResponse } from "next/server";
import { Currency_rate } from "@/app/models/semex";
const sql = require("mssql");
export const revalidate = 0;
export async function GET() {
  try {
    //const knexm = require("knex")(knexConfig);
    //await sql.connect(sqlConfig);
    const query =
      "select top(1) update_datetime from Currency_rate order by update_datetime desc";
    //const result = await sql.query(query);
    //const data = result.recordset;
    // Execute the raw SQL query
    const result1 = await knexInstance.raw(query);

    //console.log(result1);
    // Parse the result into an array of User objects
    //const data: Currency_rate[] = result.recordset;

    return NextResponse.json(result1);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
