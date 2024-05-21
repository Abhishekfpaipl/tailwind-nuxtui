<template>
   <!-- <UContainer> -->
    <UCard >
      <template #header>
        <div class="flex justify-between">
          <h1>Machiddle</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
     </UCard>
     <NuxtPage />
  <!-- </UContainer> -->
</template>
