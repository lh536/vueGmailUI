<template>
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
