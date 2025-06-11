import { eq } from "drizzle-orm";
import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {

    const body = await readBody(event);


    if (!body || !body.uid ) {
      return { statusCode: 400, data: {}, status: "Invalid input" };
    }

    const { uid, ...updateData } = body;

    await db.update(templateData).set(updateData).where(
      eq(templateData.id,uid)
    )


    return { statusCode: 200, data: {}, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});

