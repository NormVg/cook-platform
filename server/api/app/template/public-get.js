import { eq } from "drizzle-orm";
import { addToTemplateDownloads, db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {

    const body = getQuery(event)

    // console.log(body.uid);

    const termplateInfo = await db
      .select()
      .from(templateData)
      .where(
        eq(templateData.id, body.uid)
      )
      .where(
        eq(templateData.public, true)
      );
    console.log( termplateInfo);

    if (termplateInfo.length === 0){
      return { statusCode: 404, data: {}, status: "not found" };
    }else{
      const appHeader = getHeader(event, "X-COOK-APP");
      if (appHeader.toLowerCase() === 'cli'){

        await addToTemplateDownloads(body.uid)
      }
    }

    return { statusCode: 200, data: termplateInfo[0], status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
