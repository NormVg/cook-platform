import { isUserLoggedin } from "~/utils/ssoClientUtils";

export default defineNuxtRouteMiddleware(async (to) => {
  if (process.client) {
    const config = useRuntimeConfig();
    const { taoAuthToken, taoAuthCallback, taoAuthURL } = config.public;

    // Only check login status for relevant routes
    if (
      to.path.startsWith("/login") ||
      to.path.startsWith("/app") ||
      to.path === "/"
    ) {
      const isLoggedIn = await isUserLoggedin(taoAuthToken, taoAuthCallback, taoAuthURL);

      // Handle root path "/"
      if (to.path === "/") {
        if (isLoggedIn && to.query.next !== "false") {
          return navigateTo("/app");
        }
        // If next=false, do nothing (stay on "/")
      }

      if (to.path.startsWith("/login") && isLoggedIn) {
        console.log(isLoggedIn, "already logged in user");
        return navigateTo("/app");
      }

      if (to.path.startsWith("/app") && !isLoggedIn) {
        console.log(isLoggedIn, "not logged in user");
        return navigateTo("/login");
      }
    }
  }
});
