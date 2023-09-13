import sqlConfig from "@/utils/db";
import knexInstance from "@/utils/knexfile"; // Import the Knex.js configuration
import { Knex, knex } from "knex";
import { NextResponse } from "next/server";
import { Currency_rate } from "@/models/semex";
const sql = require("mssql");
export async function GET() {
  try {
    //const knexm = require("knex")(knexConfig);
    //await sql.connect(sqlConfig);
    const query =
      "select * from Currency_rate where view_status=0 order by Currency_Priority asc";
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
