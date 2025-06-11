import { getFileBucketData } from "~/db";
import { downloadFormAppwrite } from "~/utils/appwrite";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const {file} = getQuery(event)

  const fileData = await getFileBucketData(file)

  if (fileData.length === 0){
    return { success: false, file: 'file not found' }
  }

  const filePointerId = fileData[0].pointer


  const resp = downloadFormAppwrite(filePointerId,runtimeConfig.appWriteProject,runtimeConfig.appWriteBucket)

  try {
    return { success: true, file: resp };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "failed" });
  }
});
