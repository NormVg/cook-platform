import { db, fileBucket } from "~/db";

export default defineEventHandler(async (event) => {

  try {

    const data  = await db.select().from(fileBucket)


    return { success: true, file: data };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Upload failed" });
  }
});
