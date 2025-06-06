import { eq } from "drizzle-orm";
import { db, userData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const body = getQuery(event);


    if (!body || !body.uid) {
      return { statusCode: 400, data: [], status: "args not found" };
    }

    const newKey = "cook_connection_key_"+crypto.randomUUID()

    await db
      .update(userData)
      .set({
        connectionKey: newKey,
      })
      .where(eq(userData.id, body.uid));

    return { statusCode: 200, data: {"connKey":newKey}, status: "renewed the connection keys" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
