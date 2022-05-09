<template>
    <!-- 4 ROOMS -->
    <div class="flex w-full max-h-screen flex-col h-full border-t border-[#2E2E2E] pb-5">
        <div class="flex justify-between items-center group h-10 pl-1 py-4 cursor-default flex-grow">
            <span class="flex items-center space-x-2">
                <span class="hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer">
                <svg role="img" class="h-4 w-4">
                    <use xlink:href="/icons/iconSet.svg#chevronDown"></use>
                </svg>
                </span>
                <span class="text-sm font-semibold">Rooms</span>
            </span>

            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] transition duration-200">
                <span class="text-[#80868B] hover:text-white">
                    <svg role="img" class="h-6 w-6">
                        <use xlink:href="/icons/iconSet.svg#plus"></use>
                    </svg>
                </span>
            </button>
        </div>
        <div class="flex flex-col h-full justify-center items-center text-[#80868B] text-sm">
            <span class="mb-2">
                <svg role="img" class="h-12 w-12 transform rotate-180">
                    <use xlink:href="/icons/iconSet.svg#rooms"></use>
                </svg>
            </span>
            <span>No rooms</span>
            <span class="text-[#789CD6] cursor-pointer">Find a room to join</span>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'LeftRoomsOption'
    }

</script>


<style scopped>

</style>
