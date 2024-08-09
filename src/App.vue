<template>
   
   <!-- choix du modèle -->
   <select v-model="selected">
      <template v-for="model in models">
         <option :value="model">{{ model.name }}</option>
      </template>
   </select>

   <!-- viewer -->
   <vue3dLoader
      height="500"
      :scale="selected.scale"
      :filePath="selected.filePath"
      backgroundColor="#eee"
      @process="onProcess"
      @load="onLoad"
   ></vue3dLoader>

   <!-- waiting spinner -->
   <div v-if="spinnerWaitingText" class="fixed top-12 left-0 m-4 p-4 bg-green-100 border-solid rounded z-50">
      <div>
         <template v-for="line in spinnerWaitingText">
            <div>{{ line }}</div>
         </template>
      </div>
   </div>

</template>

<script setup>
import { ref } from 'vue'

const models = [
   { filePath: "https://ftp.jcbuisson.dev/3d-models/van.glb", name: "Volkswagen Van (GLB)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/arthology.fbx", name: "Arthologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/muscular-insertions.fbx", name: "Insertions musculaires (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/splanchnology.fbx", name: "Splanchnologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/angiology.fbx", name: "Angiologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/myology.fbx", name: "Myologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
]

const selected = ref(models[0])

const onProcess = (e) => {
   const perc = Math.round((e.loaded * 100.) / e.total)
   spinnerWaitingText.value = [ `Chargement... ${perc} %`]
}

const onLoad = () => {
   spinnerWaitingText.value = null
}

const spinnerWaitingText = ref(null)
</script>
