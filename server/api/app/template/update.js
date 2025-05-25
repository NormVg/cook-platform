import { eq } from "drizzle-orm";
import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {

    const body = await readBody(event);


    if (!body || !body.uid || !body.name || !body.category || !body.date  || !body.stack || !body.github || !body.version || !body.fileID) {
      return { statusCode: 400, data: {}, status: "Invalid input" };
    }


    await db.update(templateData).set(
      {
          name: body.name,
          category: body.category,
          date: body.date,
          stack: body.stack,
          github: body.github,
          version: body.version,
          fileID: body.fileID
      }
    ).where(
      eq(templateData.id,body.uid)
    )


    // if (termplateInfo.length === 0){
    //   return { statusCode: 404, data: {}, status: "not found" };
    // }

    return { statusCode: 200, data: {}, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});

