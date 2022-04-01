<template>
    <header class="grid grid-cols-8 col-span-8">
        <!-- 2 ROW 1 -->
        <!-- 3 LOGO SECTION -->
        <button class="flex justify-start items-center pl-4 space-x-2">
            <div class="w-11 h-11 rounded-full flex justify-center items-center hover:bg-[#222223] text-[#E2E2E3]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 12h16M4 16h16" />
                </svg>
            </div>
            <div class="font-normal text-xl">Gmail</div>
        </button>
        <!-- 3 SEARCH FIELD SECTION -->
        <div class="col-span-5">
            <div class="w-7/12">
                <form class="text-[#E7E7E7]" action="">
                    <div class="relative">
                        <button class="absolute inset-y-0 left-0 flex items-center ml-2">
                            <span
                                class="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#535354]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </button>
                        <input class="bg-[#474747] border-0 placeholder-[#E7E7E7] p-3 pl-14 font-semibold "
                            type="text" name="" id="" placeholder="Search all conversations">
                        <button class="absolute inset-y-0 right-0 flex items-center transform rotate-90 mr-3">
                            <span
                                class="flex justify-center items-center rounded-full w-10 h-10 hover:bg-[#535354]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!-- 3 UPPER RIGHT OPTIONS SECTION -->
        <div class="col-span-2 flex items-center justify-end pr-2">
            <button
                class="flex justify-center items-center border border-[#2E2E2E] rounded-full px-3 py-1 font-semibold hover:bg-[#414141] hover:border-[#585858]">
                <div class="w-2 h-2 bg-[#1E8E3E] rounded-full ring-white ring-1"></div>
                <span class="pl-2 pr-1">Active</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#222223]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#222223]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#222223]">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots h-5 w-5"
                    viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="5" cy="5" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="19" cy="5" r="1" />
                    <circle cx="5" cy="12" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="19" r="1" />
                    <circle cx="12" cy="19" r="1" />
                    <circle cx="19" cy="19" r="1" />
                </svg>
            </button>
            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#222223]">
                <img src="https://pbs.twimg.com/profile_images/458965238004453377/KxtxcGCE.jpeg"
                    class="rounded-full w-8 h-8" alt="">
            </button>
        </div>

    </header>

</template>


<script>
    export default {
        name: 'Header'
    }

</script>


<style scopped>

</style>
