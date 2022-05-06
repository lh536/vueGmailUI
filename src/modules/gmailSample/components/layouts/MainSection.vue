<template>
    <main>
        <div class="flex justify-between w-full py-2 border-b border-[#2E2E2E]">
            <div class="flex max-w-3xl w-full">
                <search-field />
            </div>
            <div class="flex items-center">
                <user-status-indicator />
                <upper-right-options />
                <avatar-image />
            </div>
        </div>
        <middle-center-options-menu />
        <information-section />
        <central-mail-content />
    </main>

</template>


<script>

import { defineAsyncComponent } from 'vue'

    export default {
        name: 'MainSection',
        components: {
            SearchField: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/SearchField.vue') ),
            UserStatusIndicator: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/UserStatusIndicator.vue') ),
            UpperRightOptions: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/UpperRightOptions.vue') ),
            AvatarImage: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/AvatarImage.vue') ),
            MiddleCenterOptionsMenu: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/MiddleCenterOptionsMenu.vue') ),
            InformationSection: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/InformationSection.vue') ),
            CentralMailContent: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/CentralMailContent.vue') ),
        }
    }

</script>


<style scopped>

</style>
