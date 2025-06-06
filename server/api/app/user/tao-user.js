import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    const body = getQuery(event);

    const runtimeConfig  = useRuntimeConfig()


    if (!body || !body.username || !body.taoAccessToken || !body.taorRefreshToken) {
      return { statusCode: 400, data: [], status: "args not found" }
    }


    const origin = `${getRequestProtocol(event)}://${getRequestHost(event)}`

    console.log(origin);


    const options = {
      method: 'GET',
      url: runtimeConfig.public.taoAuthURL,
      params: {
        username: body.username,
        taoAuth: runtimeConfig.public.taoAuth,
        app: origin,
        accessToken: body.taoAccessToken,
        refreshToken: body.taorRefreshToken
      }
    };


      const { data } = await axios.request(options);
      console.log(data);
      return { statusCode: 200, data: data, status: "good" };



    // return { statusCode: 200, data: data, status: "good" };
  } catch (error) {
    return { statusCode: 500, data: {}, status: error };
  }
});
