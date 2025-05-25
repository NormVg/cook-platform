import { db, waitListUser } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const all_data = await db.select().from(waitListUser);

    return all_data;
  } catch (error) {
    return error;
  }
});
