// import { drizzle } from 'drizzle-orm/node-postgres';
import * as schemaDB from "~/db/schema";
import { waitListUser,templateData,userData,fileBucket } from "~/db/schema";

// // const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle(process.env.DATABASE_URL!,);


// export {db,waitListUser}

// Make sure to install the 'pg' package


import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { eq, sql } from "drizzle-orm";
import download from "~/server/api/bucket/download";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool,schema:{...schemaDB} });


const validateAppKey =  async (key: String) => {
  const dataKey = await db.select().from(userData).where(eq(userData.connectionKey, key))


  if(dataKey.length === 0){
    return false
  }else{
    return true
  }

}

const getFileBucketData = async (file_id:String) => {
 return  await db.select().from(fileBucket).where(eq(fileBucket.id,file_id))
}


const removeFromFileBucketData = async (file_id:String) => {
  await db.delete(fileBucket).where(eq(fileBucket.id,file_id))
}


const addToTemplateDownloads = async (uid:String) => {
  await db.update(templateData).set({downloads:sql`${templateData.downloads} + 1`}).where(eq(templateData.id,uid))
}
export {db,waitListUser,templateData,userData,fileBucket,validateAppKey,getFileBucketData,removeFromFileBucketData,addToTemplateDownloads}
