<template>
    <div v-if="product">
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Product Image Section -->
                <div>
                    <img :src="combinedImages[selectedImageIndex]" alt="Product Image"
                        class="w-full rounded-lg shadow-lg">
                    <div class="mt-4 flex justify-center space-x-4">
                        <div v-for="(image, index) in combinedImages" :key="index">
                            <img :src="image" alt="Product Image" class="w-16 h-16 rounded-lg shadow-lg cursor-pointer"
                                @click="selectImage(index)">
                        </div>
                    </div>
                </div>

                <!-- Product Details Section -->
                <div>
                    <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
                    <p class="text-gray-600 mb-4">{{ product.details }}</p>

                    <!-- Price Section -->
                    <div class="flex items-center mb-4">
                        <span class="text-lg font-bold text-gray-800 mr-2">Price:</span>
                        <span class="text-lg font-bold text-green-500">{{ product.price }}</span>
                        <span class="text-sm text-gray-600 line-through ml-2">{{ product.mrp }}</span>
                    </div>

                    <!-- Options Section -->
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold mb-2">Options:</h2>
                        <button v-for="(option, index) in product.options" :key="index" @click="selectOption(index)"
                            :class="{ 'bg-gray-300': selectedIndex === index }"
                            class="px-4 py-2 rounded-lg mr-2 mb-2">{{ option.name }}</button>
                    </div>

                    <!-- Sizes Section -->
                    <div class="mb-4">
                        <h2 class="text-lg font-semibold mb-2">Sizes:</h2>
                        <button v-for="(range, index) in product.ranges" :key="index" @click="selectSize(index)"
                            :class="{ 'bg-gray-300': selectedSizeIndex === index }"
                            class="px-4 py-2 rounded-lg mr-2 mb-2">{{ range.name }}</button>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="border border-gray-400 w-full">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-400 px-4 py-2">
                                        <div class="flex flex-col items-center">
                                            <p class="m-0">SKU</p>
                                            <!-- <p class="m-0">{{grandTotalQty}}</p> -->
                                        </div>
                                    </th>
                                    <th scope="col" v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex"
                                        class="border border-gray-400 px-4 py-2 bg-gray-200">
                                        <div class="font-bold flex flex-col items-center">
                                            <p class="m-0">{{ range.name }}</p>
                                            <p class="m-0">₹5</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(option, optionIndex) in product.options" :key="optionIndex">
                                    <td class="border border-gray-400 px-4 py-2">
                                        <div class="w-16 sm:w-24 h-16 sm:h-24">
                                            <img :src="option.primary_image" alt="" class="object-cover w-full h-full">
                                        </div>
                                    </td>
                                    <td v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex"
                                        class="border border-gray-400 px-4 py-2 text-center">
                                        <div>
                                            <input type="number" class="form-input text-center w-16 sm:w-24"
                                                placeholder="0" v-model="quantities[optionIndex][rangeIndex]">
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <th class="border border-gray-400 px-4 py-2">Qty</th>
                                    <td class="border border-gray-400 px-4 py-2 text-center"
                                        v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                                        {{ calculateQty(rangeIndex) }}
                                    </td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <th class="border border-gray-400 px-4 py-2">Amt.</th>
                                    <td class="border border-gray-400 px-4 py-2 text-center"
                                        v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                                        ₹{{ calculateTotal(rangeIndex) }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <!-- Add to Cart Button -->
                    <div class="flex justify-center my-3">
                        <button @click="addToCart"
                            class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Add
                            to Cart</button>
                    </div>
                </div>
            </div>

            <!-- Variant Quantity Table Section -->
            <!-- <div v-if="product.ranges" class="container mx-auto px-4 mt-8 border">
                <p class="text-xl font-semibold mb-2">Enter Desired Quantity of Available Variants</p>
                <div class="flex justify-between items-center mb-4 bg-slate-400">
                    <div>
                        <p class="font-bold">Option</p>
                    </div>
                    <div class="" v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                        <p class="font-bold">{{ range.name }}</p>
                    </div>
                </div>

                <div v-for="(option, optionIndex) in product.options" :key="optionIndex">
                    <div class="flex justify-between items-center mb-4">
                        <div class="w-24 h-24">
                            <img :src="option.primary_image" alt="" class="object-cover w-full h-full">
                        </div> 
                        <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                            <input type="number" class="border w-24 text-center"
                                :value="quantities[optionIndex][rangeIndex]"
                                @input="updateQuantity(optionIndex, rangeIndex, $event.target.value)">
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-4">
                    <p class="font-bold">Total Quantity</p>
                    <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                        <p class="text-center">{{ calculateQty(rangeIndex) }}</p>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-2">
                    <p class="font-bold">Total Price</p>
                    <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                        <p class="text-center">{{ calculateTotal(rangeIndex) }}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center mt-4 font-bold">
                <p class="text-center">Grand Total Quantity</p>
                <p class="text-center">{{ grandTotalQty }}</p>
            </div>

            <div class="flex justify-between items-center mt-2 font-bold">
                <p class="text-center">Grand Total Price</p>
                <p class="text-center">{{ grandTotalPrice }}</p>
            </div> -->

            <!-- Additional Information Section -->
            <div class="mt-8">
                <h2 class="text-lg font-semibold mb-2">Additional Information:</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(attribute, index) in product.attributes" :key="index" class="flex items-center">
                        <span class="font-semibold">{{ attribute.name }}</span>
                        <span class="ml-2 text-gray-600">{{ attribute.value }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>


<script setup>
import axios from 'axios';
import { ref, onMounted, computed, watch } from 'vue';

const selectedIndex = ref(0);
const selectedSizeIndex = ref(0);
const product = ref(null);
const selectedOption = ref(null);
const quantities = ref([]);
const selectedImageIndex = ref(0);

function selectImage(index) {
    // Update the selectedImageIndex to the index of the clicked image
    selectedImageIndex.value = index;
}
// Combined images computed property
const combinedImages = computed(() => {
    if (selectedOption.value) {
        // Combine primary_image and secondary_images into a single array
        return [selectedOption.value.primary_image, ...selectedOption.value.secondary_images];
    }
    return [];
});

onMounted(async () => {
    await fetchData();
    initializeQuantities();
});

async function fetchData() {
    try {
        const response = await axios.get('https://server.machiddle.com/api/products/harry-potter-hogwarts-history');
        if (response.status === 200) {
            product.value = response.data.data;
            selectedOption.value = product.value.options[0];
        } else {
            console.error('Failed to fetch product data');
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

function selectOption(index) {
    selectedIndex.value = index;
    selectedOption.value = product.value.options[index];
}

function selectSize(index) {
    selectedSizeIndex.value = index;
}

const updateQuantity = (optionIndex, rangeIndex, value) => {
    quantities.value[optionIndex][rangeIndex] = parseInt(value);
};

function calculateQty(rangeIndex) {
    let qtyTotal = 0;
    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
        const quantity = quantities.value[optionIndex][rangeIndex] || 0;
        qtyTotal += parseInt(quantity);
    }
    return qtyTotal;
}

function calculateTotal(rangeIndex) {
    let totalPrice = 0;
    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
        const quantity = quantities.value[optionIndex][rangeIndex] || 0;
        const price = product.value.price; // Assuming price is the same for all options and ranges
        totalPrice += quantity * price;
    }
    return totalPrice;
}

const grandTotalQty = computed(() => {
    let grandQty = 0;
    for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
        grandQty += calculateQty(rangeIndex);
    }
    return grandQty;
});

const grandTotalPrice = computed(() => {
    let grandTotal = 0;
    for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
        grandTotal += calculateTotal(rangeIndex);
    }
    return grandTotal;
});

function initializeQuantities() {
    if (product.value && product.value.options && product.value.ranges) {
        for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
            quantities.value[optionIndex] = [];
            for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
                quantities.value[optionIndex][rangeIndex] = 0;
            }
        }
    }
}

function formatCartData() {
    const cartData = {};
    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
        for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
            const quantity = quantities.value[optionIndex][rangeIndex];
            if (quantity > 0) {
                const key = `${product.value.options[optionIndex].name}-${product.value.ranges[rangeIndex].name}`;
                cartData[key] = quantity;
            }
        }
    }
    return cartData;
}

async function addToCart() {
    const cartData = formatCartData();
    try {
        const response = await axios.post('https://server.machiddle.com/api/cart', cartData);
        if (response.status === 200) {
            alert('Items added to cart successfully');
        } else {
            console.error('Failed to add items to cart');
        }
    } catch (error) {
        console.error('Error adding items to cart:', error);
    }
}

watch(product, (newProduct) => {
    if (newProduct) {
        selectedOption.value = newProduct.options[selectedIndex.value];
    }
});
</script>

