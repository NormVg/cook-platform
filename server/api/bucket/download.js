import { downloadFormAppwrite } from "~/utils/appwrite";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const {file} = getQuery(event)


  const resp = downloadFormAppwrite(file,runtimeConfig.appWriteProject,runtimeConfig.appWriteBucket)

  try {
    return { success: true, file: resp };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Upload failed" });
  }
});
