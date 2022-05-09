<template>
    <div class="hidden md:flex md:ml-4 space-x-reverse space-x-2">
        <button class="w-8 h-8 lg:w-10 lg:h-10 mr-2 rounded-full flex justify-center shrink-0 items-center hover:bg-[#222223]">
            <svg role="img" class="w-6 h-6">
                <use xlink:href="/icons/iconSet.svg#circleQuestion"></use>
            </svg>
        </button>
        <button class="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex justify-center shrink-0 items-center hover:bg-[#222223]">
            <svg role="img" class="w-6 h-6">
                <use xlink:href="/icons/iconSet.svg#settings"></use>
            </svg>
        </button>
        <button class="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex justify-center shrink-0 items-center hover:bg-[#222223]">
            <svg role="img" class="w-5 h-5">
                <use xlink:href="/icons/iconSet.svg#nineDots"></use>
            </svg>
        </button>
    </div>

</template>


<script>
    export default {
        name: 'UpperRightOptions'
    }

</script>


<style scopped>

</style>
