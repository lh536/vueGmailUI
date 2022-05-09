<template>
    <!-- 3 COMPOSE MENU -->
    <div class="flex items-center border-b border-[#2E2E2E]">
        <button class="flex justify-between items-center flex-grow group hover:bg-[#414141] h-10 rounded-full rounded-l-none pl-1 mr-2 py-6">

            <!-- CHEVRON DOWN & BUTTON TEXT -->
            <span class="flex items-center space-x-2">
                <span class="hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center">
                    <svg role="img" class="h-4 w-4 relative z-10">
                        <use xlink:href="icons/iconSet.svg#chevronDown"></use>
                    </svg>
                </span>
                <span class="text-sm font-semibold">Mail</span>
            </span>

            <!-- PENCIL ICON -->
            <div class="flex items-center justify-center group-hover:bg-[#303132] w-10 h-10 rounded-full" id="compose">
                <span class="flex items-center justify-center border border-[#5E6267] hover:bg-[#3C4043] hover:border-none w-10 h-10 rounded-full">

                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="icons/iconSet.svg#pencil"></use>
                    </svg>

                </span>
            </div>
        </button>
    </div>

</template>


<script>
    export default {
        name: 'ComposeMenu'
    }

</script>


<style scopped>

</style>
