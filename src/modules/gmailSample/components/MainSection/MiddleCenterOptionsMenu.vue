<template>
    <!-- 3 MIDDLE CENTER OPTIONS MENU -->
    <div class="">
        <div class="flex border-b border-[#2E2E2E] items-center h-10 space-x-3 text-[#E9E9E9] py-6">
            <!-- 3 MAIL SELECTION -->
            <div class="flex pl-4">
                <div class="w-7 h-9 rounded-md flex justify-center items-center group hover:bg-[#414141] transition duration-200 hover:cursor-pointer">
                    <input class="group-hover:bg-[#414141] group-hover:border-white group-hover:cursor-pointer bg-[#111111]" type="checkbox" name="" id="">
                </div>
                <button class="w-4 h-9 rounded-md flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200">
                    <svg role="img" class="h-4 w-4 hover:text-white">
                        <use xlink:href="icons/iconSet.svg#chevronDown"></use>
                    </svg>
                </button>
            </div>
            <!-- 3 RELOAD BUTTON -->
            <div>
                <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white">

                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="icons/iconSet.svg#reload"></use>
                    </svg>

                </button>
            </div>
            <!-- 3 MORE BUTTON -->
            <div>
                <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white">

                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="icons/iconSet.svg#threeDotsVertical"></use>
                    </svg>

                </button>
            </div>
            <!-- 3 PANEL MODE BUTTON -->
            <div class="flex justify-end items-center flex-grow pr-7">
                <button class="w-7 h-9 rounded-md flex justify-center items-center hover:bg-[#414141] transition duration-200 hover:text-white">

                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="icons/iconSet.svg#rooms"></use>
                    </svg>

                </button>
                <!-- 3 DOWN ARROW BUTTON -->
                <button class="w-4 h-9 rounded-md flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200">

                    <svg role="img" class="h-4 w-4 hover:text-white">
                        <use xlink:href="icons/iconSet.svg#chevronDown"></use>
                    </svg>

                </button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'MiddleCenterOptionsMenu'
    }

</script>


<style scopped>

</style>
