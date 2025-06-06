import { eq } from "drizzle-orm";
import { db, userData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const body = getQuery(event);

    const userDataDB = await db
      .select()
      .from(userData)
      .where(eq(userData.connectionKey,body.key));

    if (userDataDB.length === 0) {
      return {
        statusCode: 404,
        data: {},
        status: "not found",
      };
    }

    return { statusCode: 200, data: userDataDB[0], status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
