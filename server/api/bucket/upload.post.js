// import { createTempFile, uploadFileToAppwrite } from './fileUtils'; // Adjust the path as necessary

import { uploadFileToAppwrite } from "~/utils/appwrite";
import { createTempFile } from "~/utils/temple";

import {db,fileBucket} from "~/db/index"

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const file = formData?.[0];

  if (!file || !file.data || !file.filename) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No valid file uploaded',
    });
  }

const runtimeConfig = useRuntimeConfig()


  try {
    const tempFilePath = await createTempFile(file.data, file.filename);
    const uploadResponse = await uploadFileToAppwrite(tempFilePath, file.filename,runtimeConfig.appWriteProject,runtimeConfig.appWriteBucket,runtimeConfig.appWriteKey);

    const fileUploadedID = uploadResponse.$id
    const dbFileID = crypto.randomUUID()


    await db.insert(fileBucket).values({
      id:dbFileID,
      pointer:fileUploadedID,
      datetime: new Date().toISOString(),
      type:"template"
    })



    return { success: true, file: dbFileID };
  } catch (error) {
    console.error('Error:', error);
    throw createError({ statusCode: 500, statusMessage: 'Upload failed' });
  }
});
