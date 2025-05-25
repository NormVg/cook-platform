import { eq } from "drizzle-orm";
import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {

    const body = await getQuery(event)

    // console.log(body.uid);

    const termplateInfo = await db.select().from(templateData).where(eq(templateData.id,body.uid))
    console.log( termplateInfo);

    if (termplateInfo.length === 0){
      return { statusCode: 404, data: {}, status: "not found" };
    }

    return { statusCode: 200, data: termplateInfo[0], status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
