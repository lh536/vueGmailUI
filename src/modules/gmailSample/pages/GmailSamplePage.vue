<template>
<span class="text-red-500 font-semibold sm:hidden">XS</span>
<span class="text-red-500 font-semibold hidden sm:block md:hidden">SM</span>
<span class="text-red-500 font-semibold hidden md:block lg:hidden">MD</span>
<span class="text-red-500 font-semibold hidden lg:block xl:hidden">LG</span>
<span class="text-red-500 font-semibold hidden xl:block 2xl:hidden">XL</span>
<span class="text-red-500 font-semibold hidden 2xl:block">2XL</span>
    <div class="bg-[#111111] min-h-screen text-white">

        <div class="flex min-h-screen">
            <aside class="w-72">
                <left-sidebar />
            </aside>

            <main class="w-full">
                <main-section />
            </main>
        </div>

    </div>
</template>


<script>
import { defineAsyncComponent } from "vue"

export default {
    name: 'GmailSamplePage',
    components: {
        LeftSidebar: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/layouts/LeftSidebar.vue') ),
        MainSection: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/layouts/MainSection.vue') ),
    }

}

</script>


<style scopped>

</style>
