<script setup>

import { setLocalStorageToken } from "~/utils/ssoClientUtils"

const route = useRoute()

const Router = useRouter()

onMounted(async () => {

  const body  = route.query;

    if (!body || !body.refreshToken || !body.accessToken || !body.username ) {
      console.log("no args in params");
      Router.push("/")


    }else{
      await setLocalStorageToken(body.accessToken,body.refreshToken,body.username)
      Router.push("/")
    }



})

</script>


<template>
SSO LOGIN PAGE
</template>

<style scoped>

</style>
