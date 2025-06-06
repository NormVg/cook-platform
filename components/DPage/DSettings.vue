<script setup>
import { useUserStore } from '~/store/userStore';
import DSettingsCard from './DSettingsCard.vue';
import {logOutUser} from "~/utils/ssoClientUtils"
import {
  LogOut,
  Copy,
  RotateCcwKey
} from "lucide-vue-next";
import { useCookUser } from '~/composable/useCookUser';


const UserStore = useUserStore()

const {renewCookConnKey} = await useCookUser()


const reNewKeys = async () => {

  const newKey = await renewCookConnKey()
  console.log("New Key: ", newKey)
  var oldDataUser = UserStore.currentCookUserData
  oldDataUser.connectionKey = newKey.connKey

  UserStore.setCurrentCookUserData(oldDataUser)
}


const CopyKey = () => {
  navigator.clipboard.writeText(UserStore.currentCookUserData.connectionKey)
}

const logOutClient = async () => {
await logOutUser()

await navigateTo("/")
}








</script>

<template>
  <div id="settings-box">

    <!-- <DSettingsCard>

      COOK : LAZY : Setting
    </DSettingsCard>



    <DSettingsCard>

      COOK : LAZY : Setting
    </DSettingsCard> -->

    <DSettingsCard title="CLI Connection Key">

      <div id="key-comp">
        {{UserStore.currentCookUserData.connectionKey}}

      </div>

      <div id="kc-btns">
        <div @click="CopyKey()">
          <Copy size="18px"/>
          COPY</div>
        <div @click="reNewKeys()" >
          <RotateCcwKey size="18px"/>
          RENEW</div>
      </div>

    </DSettingsCard>

    <DSettingsCard :title="`Logout: ${UserStore.currentUsername}` ">


      <div id="kc-btns">
        <div @click="logOutClient()" >
          <LogOut size="18px"/>
          LOGOUT</div>
      </div>

    </DSettingsCard>

  </div>

</template>


<style scoped>
#settings-box{
  display: flex;flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 15px;
}

#key-comp{
  font-family: monospace;
  border: 1px solid var(--border);
  width: max-content;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--bg2);
}

#kc-btns{
  display: flex;
  gap: 10px;
}


#kc-btns div{
  border: 1px solid var(--border);
  border-radius: 5px;
  background-color: var(--bg2);
  padding: 5px 10px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

#kc-btns div:hover{
 background-color: var(--bg3);
}


#kc-btns div:active{
 background-color: var(--bg);
}

</style>
