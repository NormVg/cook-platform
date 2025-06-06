import { eq } from "drizzle-orm";
import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {

    const body =  getQuery(event)

    // console.log(body.uid);

    const termplateInfo = await db.select().from(templateData).where(eq(templateData.author,body.username))
    console.log( termplateInfo);

    if (termplateInfo.length === 0){
      return { statusCode: 404, data: [], status: "not found" };
    }

    return { statusCode: 200, data: termplateInfo, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: [], status: error };
  }
});
