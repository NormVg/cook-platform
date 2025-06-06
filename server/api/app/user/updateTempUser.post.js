import { eq } from "drizzle-orm";
import { db, userData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    if (!data || !data.uid || !data.userTemplates) {
      return { statusCode: 400, data: {}, status: "Invalid input" };
    }

    await db.update(userData)
      .set({
        userTemplates: data.userTemplates,
      })
      .where(eq(userData.id, data.uid));

    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
