<template>
    <!-- 3 UNREAD MENU, MAIL QUANTITY & OPTIONS DOTS -->
    <div class="flex justify-between items-center mr-2">

        <button class="flex justify-between items-center hover:bg-[#414141] rounded-md font-semibold px-2 py-1 mx-2 transition duration-200 my-1">
            <div class="flex space-x-2 items-center">
                <svg role="img" class="h-5 w-5 text-[#B0B0B0] hover:text-white">
                    <use xlink:href="icons/iconSet.svg#informationChevron"></use>
                </svg>
                <span>Unread</span>
            </div>
            <span class=""></span>
        </button>

        <div class="flex justify-center items-center text-xs font-semibold mr-2 -space-x-1 text-[#B0B0B0]">
            <button class="flex justify-between items-center hover:bg-[#414141] rounded-md font-semibold px-2 py-2 transition duration-200">
                <span>1-10 of 57</span>
            </button>
            <div>
                <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200">
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="icons/iconSet.svg#threeDotsVertical"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'InformationSection'
    }

</script>


<style scopped>

</style>
