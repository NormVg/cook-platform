import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    // console.log(data);

    const { id, name, category, date, author, stack, github, version, fileID } =
      data;

    await db.insert(templateData).values({
      id,
      name,
      category,
      date,
      author,
      stack,
      github,
      version,
      fileID,
    });

    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
