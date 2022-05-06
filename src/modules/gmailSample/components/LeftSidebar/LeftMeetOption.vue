<template>
    <!-- 4 MEET -->
    <div class="flex w-full mt-auto max-h-screen flex-col border-t border-[#2E2E2E]">
        <div class="flex justify-between items-center group h-10 pl-1 mr-2 py-4 cursor-default">
            <span class="flex items-center space-x-2">
                <span class="hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer">
                    <svg role="img" class="h-4 w-4">
                        <use xlink:href="icons/iconSet.svg#chevronDown"></use>
                    </svg>
                </span>
                <span class="text-sm font-semibold">Meet</span>
            </span>
        </div>

        <div class="flex flex-col h-full justify-center items-center">
            <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg role="img" class="h-6 w-6">
                            <use xlink:href="icons/iconSet.svg#newMeeting"></use>
                        </svg>
                    </span>
                    <span>New meeting</span>
                </div>
                <span class=""></span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg role="img" class="h-6 w-6">
                            <use xlink:href="icons/iconSet.svg#joinMeeting"></use>
                        </svg>
                    </span>
                    <span>Join meeting</span>
                </div>
                <span class=""></span>
            </button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'LeftMeetOption'
    }

</script>


<style scopped>

</style>
