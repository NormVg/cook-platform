<script setup>
import { usePopupStore } from '~/store/popupStore';




const  v1 = ref('')
const  v2 = ref('')

const PopStore = usePopupStore()

const isDeleteEnabled = computed(() => {
  return v1.value === PopStore.deletePopData.v1 && v2.value === 'sudo delete';
});


const handleDelete = ()=>{


  if (v1.value !== PopStore.deletePopData.v1 || v2.value !== 'sudo delete') {
    console.log("nopeeee");
    return;

  }

PopStore.setDeletePopResp(true)
v1.value = ''
v2.value = ''
}


const handleClose = ()=>{

PopStore.setDeletePopResp(false)
PopStore.setIsDeletePop(false)
v1.value = ''
v2.value = ''

}






</script>

<template>
  <Transition>
    <div id="pop-delete-box" v-if="PopStore.isDeletePop">
      <div id="pf-head">
          {{PopStore.deletePopData.head}}
      </div>

      <label for="id">Enter <b>{{ PopStore.deletePopData.v1 }}</b> to continue:</label>
      <input type="text" name="id" v-model="v1" />

      <label for="confirm">To verify, type <b>sudo delete</b> below:</label>
      <input type="text" name="confirm" v-model="v2" />

        <div>

            <button
              id="dlt-btn"
              @click="handleDelete"
              :class=" isDeleteEnabled ? 'enabled' : 'disabled'"
            >
              delete
            </button>
          <button id="close-btn" @click="handleClose">close</button>

        </div>
    </div>
  </Transition>
  </template>

<style scoped>
#pop-delete-box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: max-content;
  height: max-content;
  padding: 20px;
  transform: translate(-50%,-50%);
  background-color: var(--bg2);


  border: 1px solid var(--border);
  border-radius: 10px;

  z-index: 10000;


  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;


}

.disabled{
  background-color: var(--bg);

}

.enabled{
  background-color: var(--red);
}

b{
  color: var(--blue);
}

#pf-head {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--text);
  letter-spacing: 0.5px;
}

label{
  width: max-content;
  margin-right: 40px;
}

 input {
  background-color: var(--bg);
  border: none;
  width: calc(100% - 20px);
  font-weight: 500;
  color: white;
  height: 25px;
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 5px;

}

input:focus {
  outline: none;
}

.enabled:active{
  scale: .95;
}

#dlt-btn {
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 18px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  transition: background 0.2s;
}

#dlt-btn:hover {
  background-color: var(--bg);


}

#close-btn {
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 8px 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

#close-btn:hover {
  background-color: var(--bg);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>
