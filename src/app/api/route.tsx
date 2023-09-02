import sqlConfig from "@/utils/db";
import { NextResponse } from "next/server";
import {Currency_rate} from "@/models/semex"
const sql = require('mssql')
export async function GET() {
  try {
    await sql.connect(sqlConfig);
    const query = "select  * from Currency_rate order by Currency_Priority asc";
    const result = await sql.query(query)
    const data = result.recordset;
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({error:error},{status:400})
  }
}