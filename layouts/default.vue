<template>
    <div class="dark:bg-zinc-900 dark:text-white">
        <NuxtLoadingIndicator />
        <div id="main-content" class="min-h-full relative" :class="`${sidebarPinned ? 'sidebarPinned' : ''}`">
            <div class="container mx-auto max-w-[90%]">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'dark h-[100vh]',
    }
});
</script>

<style scoped>
#main-content {
    transition: all 0.3s ease;
}

#main-content > div {
    padding-bottom: 4rem; /* Footer padding */
}
</style>