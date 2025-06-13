
export const useBucketData = async () => {

    const downloadBucketFile = async (uid) => {

    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "download-bucket-file",
      () =>
        $fetch("/api/bucket/download?file="+uid, {
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


  const deleteBucketFile = async (uid) => {

    const runtimeConfig = useRuntimeConfig();

    const { data, pending, error } = await useAsyncData(
      "remove-bucket-file",
      () =>
        $fetch("/api/bucket/remove?file="+uid, {
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


  return { deleteBucketFile,downloadBucketFile};
};
