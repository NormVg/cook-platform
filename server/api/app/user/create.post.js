import { db, userData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    await db.insert(userData).values({
      id:`cook_user_${crypto.randomUUID()}${new Date().toISOString()}`,
      username:data.username,
      email:data.email,
      name:data.name,
      connectionKey:`cook_connection_key_${crypto.randomUUID()}${new Date().toISOString()}_${data.username}_${data.email}`
    })

    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
