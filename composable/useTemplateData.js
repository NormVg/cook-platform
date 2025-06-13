export const useUserAllTemplates = async () => {
  const userTokens = await getLocalStorageToken();
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error } = await useAsyncData("UserAllTemplates", () =>
    $fetch("/api/app/template/getByuser?username=" + userTokens.username, {
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

  const templates = computed(() => data.value.data ?? []);

  return {
    templates,
    pending,
    error,
  };
};

export const useTemplateData = async () => {

  const getTemplateData = async (uid) => {
    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "template-data-by-id",
      () =>
        $fetch("/api/app/template/get?uid=" + uid, {
          headers: {
            "X-COOK-APP": "web",
            "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
          },
        })
    );

    console.log(data.value);

    // Optional logging for development
    if (error.value) {
      console.error("Failed to fetch templates:", error.value);
    }

    const response = computed(() => data.value.data ?? []);

    return {
      response,
      pending,
      error,
    };
  };

  const getAllUserTemplates = async () => {

    const userTokens = await getLocalStorageToken();
    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "UserAllTemplates",
      () =>
        $fetch("/api/app/template/getByuser?username=" + userTokens.username, {
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

    const response = computed(() => data.value.data ?? []);

    return {
      response,
      pending,
      error,
    };
  };

    const getAllTemplates = async () => {


    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "all-templates",
      () =>
        $fetch("/api/app/template/public-list", {
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

    const response = computed(() => data.value.data ?? []);

    return {
      response,
      pending,
      error,
    };
  };



  const deleteTemplate = async (uid) => {

    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "remove-templates",
      () =>
        $fetch("api/app/template/remove?uid="+uid, {
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

    const response = computed(() => data.value.file ?? "");

    return {
      response,
      pending,
      error,
    };
  }


  const updateTemplate = async (body) => {

    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "update-templates",
      () =>
        $fetch("/api/app/template/update", {
          headers: {
            "X-COOK-APP": "web",
            "X-COOK-KEY": runtimeConfig.public.taoTokenWeb,
          },
          body:body,
          method:'POST'
        })
    );

    // Optional logging for development
    if (error.value) {
      console.error("Failed to fetch templates:", error.value);
    }

    const response = computed(() => data.value.file ?? "");

    return {
      response,
      pending,
      error,
    };
  }





  return { getTemplateData,getAllUserTemplates ,getAllTemplates,updateTemplate,deleteTemplate};
};
