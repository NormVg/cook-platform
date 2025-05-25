import { db, userData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    await db.insert(userData).values({
      id:crypto.randomUUID(),
      username:data.username,
      pointer:data.pointer,
      templatesUser:[]
    })

    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
