<template>
    <div class="bg-white">
        <!-- Mobile menu -->
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full" enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                    leave-to="-translate-x-full">
                    <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                        <div class="px-4 pt-5 pb-2 flex">
                            <button type="button"
                                class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                @click="open = false">
                                <span class="sr-only">Close menu</span>
                                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <!-- Links -->
                        <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                            <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                                <NuxtLink :to="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name
                                    }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>

        <header class="relative bg-white">
            <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="border-b border-gray-200">
                    <div class="h-16 flex items-center justify-between">
                        <div class="flex-1 flex items-center lg:hidden">
                            <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400"
                                @click="open = true">
                                <span class="sr-only">Open menu</span>
                                <Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
                            </button>

                            <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Search</span>
                                <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
                            </a>
                        </div>

                        <!-- Flyout menus -->
                        <PopoverGroup class="hidden lg:flex-1 lg:block lg:self-stretch">
                            <div class="h-full flex space-x-8">
                                <NuxtLink v-for="page in navigation.pages" :key="page.name" :to="page.href"
                                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{
                                    page.name }}
                                </NuxtLink>
                            </div>
                        </PopoverGroup>

                        <!-- Logo -->
                        <NuxtLink to="/" class="flex">
                            <span class="sr-only">Logo</span>
                            <img class="h-8 w-auto" :src="logo" alt="" />
                        </NuxtLink>

                        <div class="flex-1 flex items-center justify-end">

                            <!-- Search -->
                            <a href="/" class="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block">
                                <span class="sr-only">Search</span>
                                <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
                            </a>

                            <!-- Account -->
                            <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                                <span class="sr-only">Account</span>
                                <UserIcon class="w-6 h-6" aria-hidden="true" />
                            </a>

                            <!-- Cart -->
                            <div class="ml-4 flow-root lg:ml-6">
                                <a href="#" class="group -m-2 p-2 flex items-center">
                                    <ShoppingBagIcon
                                        class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true" />
                                    <span
                                        class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                    <span class="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import logo from '@/assets/img/nuxt.ico'

const navigation = {
    pages: [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Categories', href: '/categories' },
        { name: 'Services', href: '/services' },
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Login', href: '/login' },
    ],
}

const open = ref(false)

</script>