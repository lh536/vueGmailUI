<template>
    <aside class="w-64 min-h-full flex flex-col">
        <logo-section />
        <compose-menu />
        <left-option-menu />
        <left-chat-option />
        <left-rooms-option />
        <left-meet-option />
    </aside>

</template>


<script>
import { defineAsyncComponent } from "vue"

    export default {
        name: 'LeftSidebar',
        components: {
            LogoSection: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/LogoSection.vue') ),
            ComposeMenu: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/ComposeMenu.vue') ),
            LeftOptionMenu: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/LeftFolderMenu.vue') ),
            LeftChatOption: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/LeftChatOption.vue') ),
            LeftRoomsOption: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/LeftRoomsOption.vue') ),
            LeftMeetOption: defineAsyncComponent ( () => import('@/modules/gmailSample/components/LeftSidebar/LeftMeetOption.vue') ),
        }
    }

</script>


<style scopped>

</style>
