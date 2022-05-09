<template>
    <div>
        <!-- INBOX -->
        <button class="w-full flex justify-between items-center bg-[#595959] rounded-r-full font-bold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span>
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#inbox"></use>
                    </svg>
                </span>
                <span>Inbox</span>
            </div>
            <span class="">47</span>
        </button>

        <!-- STARRED -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span>
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#starred"></use>
                    </svg>
                </span>
                <span>Starred</span>
            </div>
            <span class=""></span>
        </button>

        <!-- SNOOZED -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span>
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#snoozed"></use>
                    </svg>
                </span>
                <span>Snoozed</span>
            </div>
            <span class=""></span>
        </button>

        <!-- IMPORTANT -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span class="">
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#important"></use>
                    </svg>
                </span>
                <span>Important</span>
            </div>
            <span class=""></span>
        </button>

        <!-- SENT -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span class="transform rotate-90">
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#sent"></use>
                    </svg>
                </span>
                <span>Sent</span>
            </div>
            <span class=""></span>
        </button>

        <!-- DRAFTS -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span>
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#drafts"></use>
                    </svg>
                </span>
                <span>Drafts</span>
            </div>
            <span class="">2</span>
        </button>

        <!-- ALL MAIL -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span>
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#allMail"></use>
                    </svg>
                </span>
                <span>All Mail</span>
            </div>
            <span class="">47</span>
        </button>

        <!-- MORE -->
        <button class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
            <div class="flex space-x-4 ml-4 items-center">
                <span>
                    <svg role="img" class="h-5 w-5">
                        <use xlink:href="/icons/iconSet.svg#more"></use>
                    </svg>
                </span>
                <span>More</span>
            </div>
            <span class=""></span>
        </button>
    </div>
</template>


<script>
    export default {
        name: 'LeftFolderMenu'
    }

</script>


<style scopped>

</style>
