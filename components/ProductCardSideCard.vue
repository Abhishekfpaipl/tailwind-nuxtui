<!-- ProductCardSideCard.vue -->
<template>
    <div>
      <USlideover >
        <UCard class="flex flex-col flex-1"
            :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Slideover
                    </h3>
                    <!-- Emit 'closeSideCard' event when the close button is clicked -->
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeSideCard"/>
                </div>
            </template>
            <div class="">
                {{ product.name }}
            </div>
        </UCard>
      </USlideover>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    product: Object // Assuming product is an object with at least a name property
  });
  
  const emits = defineEmits(['closeSideCard']);
  
  const closeSideCard = () => {
    emits('closeSideCard'); // Emit 'closeSideCard' event when the close button is clicked
  };
  </script>
  
  <style lang="scss" scoped></style>
  