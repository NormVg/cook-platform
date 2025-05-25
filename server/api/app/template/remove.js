import { eq } from "drizzle-orm";
import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {

    const body = await getQuery(event)



    await db.delete(templateData).where(eq(templateData.id,body.uid))




    return { statusCode: 200, data: {}, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
