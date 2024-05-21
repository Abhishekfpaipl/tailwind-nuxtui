<template>
    <div class="bg-cyan-50 rounded-lg shadow-md overflow-hidden my-2 px-2">
        <NuxtLink :to="'/products/' + product.sid" class="p-2">
            <div class="overflow-hidden mb-4">
                <UCarousel v-slot="{ item }" :items="product.options" :ui="{ item: 'basis-full' }" indicators
                    class="w-64 mx-auto rounded-lg overflow-hidden">
                    <img :src="item.primary_image" class="w-full" draggable="false">
                </UCarousel>
            </div>
            <h3 class="font-semibold text-lg mb-2 text-center text-black">{{ product.name }}</h3>

            <div class="flex justify-between px-2 mb-2">
                <small class="text-black">${{ product.price }}</small>
                <small class="text-black">{{ product.category.parent }}</small>
            </div>
        </NuxtLink>
        <div class="flex justify-between my-2">
            <UButton color="red" variant="outline" loading>Add to Wishtlist</UButton>
            <UButton color="red" variant="outline" class="" label="Reveal slideover" @click="addToCart">Add to Cart
            </UButton>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    product: Object
});

const emits = defineEmits(['addToCart']);

const addToCart = () => {
    emits('addToCart', props.product); // Emit the 'addToCart' event with the product data
};
</script>