import { validateAppKey } from "~/db";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  try {

    if (event.path.startsWith("/api/app/")) {

      const appHeader = getHeader(event, "X-COOK-APP");
      const keyHeader = getHeader(event, "X-COOK-key");



      if (appHeader === undefined) {
        return { err: "app not defined", status: 400 };
      }

      if (appHeader.toLowerCase() === "cli" && keyHeader.trim() !== '') {


        const isValid = await validateAppKey(keyHeader);

        if (!isValid) {
          return { err: "Invalid CLI key", isValid: false };
        }



      } else if (appHeader.toLowerCase() === "web" && keyHeader.trim() !== '') {

        if (keyHeader.trim() !== runtimeConfig.public.taoTokenWeb) {

          return { err: "Invalid WEB key", isValid: false };

        }

      } else {
        return { err: "invalid auth header or not available", status: 400 };
      }


    }
  } catch (error) {
    return { err: "check your headers", status: 400 };
  }
});
