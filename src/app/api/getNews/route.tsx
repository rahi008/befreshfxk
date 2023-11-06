import sqlConfig from "@/app/utils/db";
import knexInstance from "@/app/utils/knexfile"; // Import the Knex.js configuration
import { Knex, knex } from "knex";
import { NextResponse } from "next/server";
import { Currency_rate } from "@/app/models/semex";
const sql = require("mssql");
export const revalidate = 0;
export async function GET() {
  try {
    const query =
      "SELECT [atn],[headline],FORMAT(publishDate,'dd/MMM/yyyy') as pubDate,[newsSource],[imageFileName],[save_by],[save_time],[newsUrl] FROM [semex].[dbo].[currency_news] order by publishDate desc";

    const result1 = await knexInstance.raw(query);

    return NextResponse.json(result1);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
