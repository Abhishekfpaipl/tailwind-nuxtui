<template>
    <div class="">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col md:flex-row lg:items-start lg:col-span-1 p-2">
                <div class="flex flex-col items-center lg:items-start">
                    <UCarousel v-slot="{ item }" :items="selectedImage" :ui="{ item: 'basis-full' }" indicators
                        class="w-80 mx-auto rounded-lg overflow-hidden">
                        <img :src="item" class="w-full" draggable="false">
                    </UCarousel>
                </div>
                <div id="scroll" class="flex flex-row items-start lg:flex-col lg:gap-2 mt-2 lg:mt-0 lg:ml-2">
                    <img v-for="(image, index) in showProduct.options" :key="index" :src="image.primary_image"
                        class="w-16 h-16 lg:w-16 lg:h-auto cursor-pointer rounded-lg mx-1" :alt="image.name"
                        @click="selectImage(image)" />
                </div>
            </div>
            <div class="p-2 lg:col-span-1">
                <p class="font-bold">{{ showProduct.name }}</p>
                <div class="flex justify-between items-center border-b pb-1">
                    <p v-if="showProduct.category" class="font-semibold text-yellow-500">{{ showProduct.category.name }}
                    </p>
                    <div class="">
                        <Icon name="uil:heart" size="25" color="red" />
                        <Icon name="uil:share" size="25" color="red" />
                    </div>
                </div>
                <strong>₹ {{ showProduct.price }}</strong>
                <div class="flex justify-between items-center">
                    <p class="line-through text-grey">MRP ₹ {{ showProduct.mrp }}</p>
                    <div class="">
                        <Icon name="material-symbols-light:star" size="25" color="red" />
                        <Icon name="material-symbols-light:star" size="25" color="red" />
                        <Icon name="material-symbols-light:star" size="25" color="red" />
                        <Icon name="material-symbols-light:star" size="25" color="red" />
                        <Icon name="material-symbols-light:star-half-outline" size="25" color="red" />
                    </div>
                </div>

                <div class="my-2">
                    <p class="font-semibold my-2">Color: <span class="capitalize text-red-500">{{ currentColor }}</span></p>
                    <div class="flex flex-wrap">
                        <div class="flex flex-col items-center mr-2" v-for="(color, index) in showProduct.options"
                            :key="index">
                            <img class="rounded w-10 h-10 object-cover" @click="selectColor(color)"
                                :src="color.primary_image" :alt="color.name">
                            <small :class="{ 'line-through': !color.active }">{{ color.name }}</small>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
definePageMeta({
    layout: 'default'
})
useHead({
    title: 'This is product page',
    meta: [
        { name: 'description', content: 'details' },
        { property: 'og:title', content: 'name' },
        { property: 'og:description', content: 'code' },
        { property: 'og:image', content: 'selectedImage' },
        { property: 'og:url', content: 'https://machiddle.com/product-page/' },
        { property: 'og:type', content: 'website' }
    ]
})

const showProduct = ref('');
const route = useRoute()
const productId = route.params.id;

onMounted(async () => {
    try {
        const response = await axios.get(`https://server.machiddle.com/api/products/${productId}`);
        showProduct.value = response.data.data;
    } catch (error) {
        console.error('Error fetching product', error);
    }
})

const selectedImage = ref();
watchEffect(() => {
    if (showProduct.value && showProduct.value.options && showProduct.value.options.length > 0 && showProduct.value.ranges && showProduct.value.ranges.length > 0) {
        selectedImage.value = showProduct.value.options[0].secondary_images;
    }
})

const selectImage = (image) => {
    selectedImage.value = image.secondary_images
}

const currentColor = ref();
const selectColor = (color) => {
    currentColor.value = color.name
}
</script>

<style lang="scss" scoped></style>