<template>
    <div class="bg-[#111111] min-h-screen text-white">
        <div class="grid grid-cols-8 py-2">
            <top-header />
            <left-sidebar />

        </div>

        <!-- <div class="bg-blue-300">HEADER</div>

        <div class="flex">
            <div class="hidden">
              HIDDEN
            </div>

            <div class="min-w-min bg-yellow-400">LH
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>

            <div class="bg-pink-200 w-full">
                <div class="w-full bg-pink-200">RH-TOP</div>
                <div class="w-full bg-pink-200">RH-MAIN</div>
            </div>
        </div> -->

    </div>
</template>


<script>
import { defineAsyncComponent } from "vue"

export default {
    name: 'GmailSamplePage',
    components: {
        TopHeader: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/TopHeader/TopHeader.vue') ),
        LeftSidebar: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/LeftSidebar.vue') )
    }

}

</script>


<style scopped>

</style>
