import { validateAppKey } from "~/db";

export default defineEventHandler(async (event) => {
  try {

    if (event.path.startsWith("/api/app/")) {
      const appHeader = getHeader(event, "X-COOK-APP") || ''
      const keyHeader = getHeader(event, "X-COOK-key");

      console.log(event.path, appHeader, keyHeader);

      if (
        (appHeader.toLowerCase() !== "cli" && appHeader.toLowerCase() !== "web") ||
        keyHeader.trim() === ""
      ) {
        return { err: "auth header not available", status: 400 };
      }

      const isValid = await validateAppKey(keyHeader);

      if (!isValid) {
        return { err: "Invalid key" };
      }
    }
  } catch (error) {
    return {err:'check your headers', status:400};
  }
});
