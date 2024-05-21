<!-- ParentComponent.vue -->
<template>
  <div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center bg-cyan-50">
      <div class="" v-for="(product, index) in products" :key="index">
        <!-- <ProductCard :product="product" @addToCart="openSideCard(product)"/> -->
        <ProductCard :product="product" />
      </div>
    </div>
    <ProductSlideover/>
    <!-- Render the side card here -->
    <!-- <ProductCardSideCard v-if="sideCardOpen" :product="selectedProduct" @closeSideCard="closeSideCard"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; 

const products = ref();
const sideCardOpen = ref(false);
const selectedProduct = ref(null);

onMounted(async () => {
  axios.get('https://server.machiddle.com/api/products')
    .then((response) => {
      products.value = response.data.data.data;
    });
});

const openSideCard = (product) => {
  selectedProduct.value = product;
  sideCardOpen.value = true;
};

const closeSideCard = () => {
  sideCardOpen.value = false;
};
</script>
