import { db, waitListUser } from "~/db/index";
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);


    if (!body || !body.email || !body.type) {
      return {
        statusCode: 400,
        message: "Invalid request. 'email' and 'type' are required fields.",
      };
    }

    //  intermediate , advance ,  beginner

    const validTypes = ["intermediate", "advance", "beginner"];

    if (!validTypes.includes(body.type)) {
      return {
        statusCode: 400,
        message: "Invalid 'type'. Allowed values are 'intermediate', 'advance', or 'beginner'.",
      };
    }

    const newEntry = {
      "id": crypto.randomUUID(),
      "email": body.email,
      "type":body.type,
      "datetime": new Date().toISOString(),
    };

    const user = await db.query.waitListUser.findFirst({
      where: eq(waitListUser.email, body.email)
    })

    if (!user) {
      await db.insert(waitListUser).values(newEntry);
      return newEntry;
    } else {
      return {
      statusCode: 409,
      message: "User with this email already exists.",
      };
    }




  } catch (error) {
    return error;
  }
});
