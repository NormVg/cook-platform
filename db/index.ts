// import { drizzle } from 'drizzle-orm/node-postgres';
import * as schemaDB from "./schema";
import { waitListUser,templateData,userData,fileBucket } from "./schema";

// // const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle(process.env.DATABASE_URL!,);


// export {db,waitListUser}

// Make sure to install the 'pg' package


import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool,schema:{...schemaDB} });



export {db,waitListUser,templateData,userData,fileBucket}
