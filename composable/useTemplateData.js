
export const useUserAllTemplates = async () => {
  const userTokens = await getLocalStorageToken()
  const runtimeConfig = useRuntimeConfig()


  const { data, pending, error } = await useAsyncData('UserAllTemplates', () =>
    $fetch('/api/app/template/getByuser?username='+userTokens.username, {
      headers: {
        "X-COOK-APP":"web",
        "X-COOK-KEY":runtimeConfig.public.taoTokenWeb
      },
    })
  )


  // Optional logging for development
  if (error.value) {
    console.error('Failed to fetch templates:', error.value)
  }

  const templates = computed(() => data.value.data ?? [])


  return {
    templates,
    pending,
    error,
  }


}



