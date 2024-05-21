<template>
    <div class="container mx-auto px-4">
        <p class="text-xl font-semibold mb-2">Enter Desired Quantity of Available Variants</p>
        <div class="flex justify-between items-center mb-4">
            <div>
                <p class="font-bold">SKU</p>
                <p class="font-bold">90</p>
            </div>
            <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                <div class="">
                    <p class="font-bold">{{ range.name }}</p>
                </div>
            </div>
        </div>
        <div v-for="(option, optionIndex) in product.options" :key="optionIndex">
            <div class="flex justify-between items-center mb-4">
                <div class="w-24 h-24">
                    <img :src="option.primary_image" alt="" class="object-cover w-full h-full">
                </div>
                <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                    <div class="">
                        <input type="number" class="border w-24 text-center"
                            v-model="quantities[rangeIndex][optionIndex]" placeholder="">
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="">
            <p>Qty</p>
            <div class="" v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                {{ calculateQty(rangeIndex) }}
            </div>
        </div> -->
    </div>

</template>
 
  <script setup>
import { ref, computed, defineProps } from 'vue';
const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});
const { product } = props;
// const product = ref(props.product);
const quantities = ref([]);

// const calculateQty = (rangeIndex) => {
//    let qtyTotal = 0;
//    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
//        const quantity = quantities.value[optionIndex][rangeIndex] || 0;
//        qtyTotal += parseInt(quantity);
//    }
//    return qtyTotal;
// };

// const calculateTotal = (rangeIndex) => {
//    let totalPrice = 0;
//    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
//        const quantity = quantities.value[optionIndex][rangeIndex] || 0;
//        const price = product.value.ranges[rangeIndex].price;
//        totalPrice += quantity * price;
//    }
//    return totalPrice;
// };

// const calculateTotalQty = computed(() => {
//    let totalQty = 0;
//    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
//        for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
//            const quantity = quantities.value[optionIndex][rangeIndex];
//            if (quantity) {
//                totalQty += parseInt(quantity);
//            }
//        }
//    }
//    return totalQty;
// });

// const skuCounter = computed(() => {
//    let count = 0;
//    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
//        for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
//            const quantity = quantities.value[optionIndex][rangeIndex];
//            if (quantity) {
//                count++;
//            }
//        }
//    }
//    return count;
// });

// const calculateGrandTotal = computed(() => {
//    let grandTotal = 0;
//    for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
//        grandTotal += calculateTotal(rangeIndex);
//    }
//    return grandTotal;
// });

// const skuCount = computed(() => {
//    return product.value.options.length * product.value.ranges.length;
// });

// const initializeQuantities = () => {
//    for (let optionIndex = 0; optionIndex < product.value.options.length; optionIndex++) {
//        quantities.value[optionIndex] = [];
//        for (let rangeIndex = 0; rangeIndex < product.value.ranges.length; rangeIndex++) {
//            quantities.value[optionIndex][rangeIndex] = '';
//        }
//    }
// };

// initializeQuantities();
</script> 