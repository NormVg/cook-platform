import { useUserStore } from "~/store/userStore";

export const useCheckAndCreateCookUser = async () => {
  const CheckUser = async () => {
    const userTokens = await getLocalStorageToken();
    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData("CheckCookUser", () =>
      $fetch("/api/app/user/validateUser?username=" + userTokens.username, {
        headers: {
          "X-COOK-APP": "web",
          "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
        },
      })
    );

    // Optional logging for development
    if (error.value) {
      console.error("Failed to fetch templates:", error.value);
    }

    console.log("Check User Data", data.value);

    if (data.value.isValid === true) {
      return true;
    } else {
      return false;
    }
  };


  const getTaoUser = async () => {
    const userTokens = await getLocalStorageToken();
    const runtimeConfig = useRuntimeConfig();

    const { data } = await useAsyncData("tao-user-data", () =>
      $fetch("/api/app/user/tao-user", {
        headers: {
          "X-COOK-APP": "web",
          "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
        },
        method: "POST",
        body: {
          username: userTokens.username,
          taoAccessToken:userTokens.accessToken,
          taoRefreshToken: userTokens.refreshToken,
        },
      })
    );

    console.log("Get Tao User Data", data.value);

    return data.value.data;
  }

  const CreateUser = async () => {
    const userTokens = await getLocalStorageToken();
    const runtimeConfig = useRuntimeConfig();

    const taoUserData = await getTaoUser();

    const { data, pending, error } = await useAsyncData("CreateCookUser", () =>
      $fetch("/api/app/user/create", {
        headers: {
          "X-COOK-APP": "web",
          "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
        },
        method: "POST",
        body: {
          username: userTokens.username,
          email:taoUserData.email || 'none',
          name: taoUserData.name || 'none',
        },
      })
    );

    // Optional logging for development
    if (error.value) {
      console.error("Failed to fetch templates:", error.value);
    }
  };

  const CookUserCheckFlow = async () => {
    const isValid = await CheckUser();

    if (!isValid) {
      console.log("Cook User is not Found");

      await CreateUser();
    } else {
      console.log("Cook User is Found");
    }
  };

  return {
    CookUserCheckFlow,
  };
};

export const useCookUser = async () => {
  const getCookUser = async () => {
    const userTokens = await getLocalStorageToken();
    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData("CreateCookUser", () =>
      $fetch("/api/app/user/getByUser?username="+userTokens.username, {
        headers: {
          "X-COOK-APP": "web",
          "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
        },
      })
    );

    // Optional logging for development
    if (error.value) {
      console.error("Failed to fetch templates:", error.value,data.value);
    }

    return data.value.data;

  };


  const renewCookConnKey = async () => {
    const userTokens = await getLocalStorageToken();
    const runtimeConfig = useRuntimeConfig();
    const userDataStore = useUserStore()


    const { data, pending, error } = await useAsyncData("renewCookUserKey", () =>
      $fetch("/api/app/user/changeKey?uid="+userDataStore.currentCookUserData.id+"&username="+userDataStore.currentCookUserData.username+"&email="+userDataStore.currentCookUserData.email, {
        headers: {
          "X-COOK-APP": "web",
          "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
        },
      })
    );

    // Optional logging for development
    if (error.value) {
      console.error("Failed to fetch templates:", error.value,data.value);
    }

    console.log("Renew Cook Conn Key",data.value.data);

    return data.value.data;

  }

  return { getCookUser,renewCookConnKey };
};
