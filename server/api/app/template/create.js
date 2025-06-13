import { db, templateData } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    // console.log(data);

    const { id, name, category, date, author, stack, github, version,info, fileID } = data;



    let templateInfo = info;
    if (!templateInfo) {
      templateInfo = `
  # ${"Template: "+name || "Template"}
  - **Category:** ${category || "N/A"}
  - **Date:** ${date || "N/A"}
  - **Author:** ${author || "N/A"}
  - **Stack:** ${stack || "N/A"}
  - **GitHub:** ${github || "N/A"}
  - **Version:** ${version || "N/A"}
  `
    }

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
      info: templateInfo
    });

    return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
