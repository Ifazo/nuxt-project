<template>
    <div v-bind="product"
     class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
        <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
            <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-center object-cover" />
        </div>
        <div class="pt-10 pb-4 text-center">
            <h3 class="text-sm font-medium text-gray-900">
                <NuxtLink
                    :to="`/products/${product.id}`"
                >
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                </NuxtLink>
            </h3>
            <div class="mt-3 flex flex-col items-center">
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                <div class="flex items-center">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                        :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'flex-shrink-0 h-5 w-5']"
                        aria-hidden="true" />
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ product.stock }} stock</p>
            </div>
            <p class="mt-4 text-base font-medium text-gray-900">${{ product.price }}</p>
        </div>
    </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
})
</script>