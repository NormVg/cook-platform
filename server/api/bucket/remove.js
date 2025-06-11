import { getFileBucketData, removeFromFileBucketData } from "~/db";
import { downloadFormAppwrite, removeFormAppwrite } from "~/utils/appwrite";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const {file} = getQuery(event)


  const fileData = await getFileBucketData(file)

  if (fileData.length === 0){
    return { success: false, file: 'file not found' }
  }

  const filePointerId = fileData[0].pointer

  await removeFormAppwrite(filePointerId,runtimeConfig.appWriteProject,runtimeConfig.appWriteBucket)
  await removeFromFileBucketData(file)
  // const resp = downloadFormAppwrite(file,runtimeConfig.appWriteProject,runtimeConfig.appWriteBucket)

  try {
    return { success: true, data:{"deleted":true} };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: "Upload failed" });
  }
});
