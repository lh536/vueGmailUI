<template>
    <!-- 3 SEARCH FIELD SECTION -->
    <div class="min-w-full">
        <div class="">
            <form class="text-[#E7E7E7]" action="">
                <div class="relative">
                    <button class="absolute inset-y-0 left-0 flex items-center sm:ml-2">
                        <span class="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-[#535354]">
                            <svg role="img" class="w-5 h-5">
                                <use xlink:href="icons/iconSet.svg#search"></use>
                            </svg>
                        </span>
                    </button>
                    <input class="bg-[#474747] border-0 placeholder-[#E7E7E7] p-3 pl-8 sm:pl-14 font-semibold" type="text" name="" id="" placeholder="Search all conversations">
                    <button class="absolute inset-y-0 right-0 hidden sm:flex items-center transform rotate-90 sm:mr-3">
                        <span class="flex justify-center items-center rounded-full w-8 h-8 sm:w-10 sm:h-10 hover:bg-[#535354]">
                            <svg role="img" class="w-7 h-7 text-inherit">
                                <use xlink:href="icons/iconSet.svg#adjustments"></use>
                            </svg>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'SearchField'
    }

</script>


<style scopped>

</style>
