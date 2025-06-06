import { db, userData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    await db.insert(userData).values({
      id:"uid_" + crypto.randomUUID(),
      username:data.username,
      email:data.email,
      name:data.name,
      templatesUser:[]
    })

    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
