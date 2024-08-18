<template>
   
   <!-- 3d-model choice -->
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

   <!-- waiting modal -->
   <div v-if="waitingText" class="fixed top-12 left-0 m-4 p-4 bg-green-100 border-solid rounded z-50">
      <div>
         <template v-for="line in waitingText">
            <div>{{ line }}</div>
         </template>
      </div>
   </div>

   <!-- Github link -->
   <a href="https://github.com/jcbuisson/3d-model" target="_blank" class="w-8 h-8 absolute top-1 right-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
      </svg>
   </a>

</template>

<script setup>
import { ref } from 'vue'

const models = [
   { filePath: "https://ftp.jcbuisson.dev/3d-models/duolingo.gltf", name: "Duolingo (GLTF)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/arthology.fbx", name: "Arthologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/muscular-insertions.fbx", name: "Insertions musculaires (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/splanchnology.fbx", name: "Splanchnologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/angiology.fbx", name: "Angiologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
   { filePath: "https://ftp.jcbuisson.dev/3d-models/myology.fbx", name: "Myologie (FBX)", scale: {x: 0.8, y: 0.8, z: 0.8 }},
]

const selected = ref(models[0])

// when 3d-model is being loaded
const onProcess = (e) => {
   const perc = Math.round((e.loaded * 100.) / e.total)
   waitingText.value = [ `Chargement... ${perc} %`]
}

// when 3d-model has finished loading
const onLoad = () => {
   waitingText.value = null
}

const waitingText = ref(null)
</script>
