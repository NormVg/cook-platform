import { isUserLoggedin } from "~/utils/ssoClientUtils";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig();



  if (to.path === "/login") {
    if (process.client) {

      const isLoggendIN = await isUserLoggedin(
        config.public.taoAuthToken,
        config.public.taoAuthCallback,
        config.public.taoAuthURL
      );


      if (isLoggendIN) {
        console.log(isLoggendIN, "logged in user");
        return await  navigateTo("/app")
      }
    }
  }


  if (to.path.startsWith("/app")) {



    if (process.client) {

      const isLoggendIN = await isUserLoggedin(
        config.public.taoAuthToken,
        config.public.taoAuthCallback,
        config.public.taoAuthURL
      );


      if (!isLoggendIN) {
        console.log(isLoggendIN, "logged in user");
        return await  navigateTo("/")
      }
    }
  }
});
