<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';

const { data: products } = await useFetch('/api/products');

definePageMeta({
  layout: 'category',
})
</script>

<style scoped></style>