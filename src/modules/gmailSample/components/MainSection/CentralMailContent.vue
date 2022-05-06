<template>

    <div class="bg-[#303030] mr-2">
        <div class="flex flex-grow-0 group border-l-none border-t-none border-r-none border-b border-[#494949] text-[#6E6E6E] pr-4 cursor-pointer hover:text-white">

            <!-- 2 ICONS -->
            <div class="w-28 flex justify-center items-center -space-x-2">
                <!-- 2 DOTS & INPUT -->
                <div class="flex justify-center items-center -space-x-4 relative border-l-4 border-[#4D90F0]">
                    <button class="w-5 h-5 flex justify-end items-center">
                        <svg role="img" class="h-5 w-4 invisible group-hover:visible relative z-10">
                            <use xlink:href="icons/iconSet.svg#sixDots"></use>
                        </svg>
                    </button>
                    <div class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] transition duration-200 hover:cursor-pointer group">
                        <input class="bg-[#303030] group-hover:bg-transparent group-hover:border-white group-hover:cursor-pointer group-hover:border-2" type="checkbox" name="" id="">
                    </div>
                </div>
                <!-- 2 STAR -->
                <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959]">
                    <span>
                        <svg role="img" class="h-5 w-5">
                            <use xlink:href="icons/iconSet.svg#starred"></use>
                        </svg>
                    </span>
                </button>
                <!-- 2 IMPORTANT -->
                <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959]">
                    <span>
                        <svg role="img" class="h-5 w-5">
                            <use xlink:href="icons/iconSet.svg#important"></use>
                        </svg>
                    </span>
                </button>
            </div>

            <!-- 2 SENDER -->
            <div class="w-56 shrink-0 font-medium text-sm flex items-center text-white">
                <span>Twitter</span>
            </div>

            <!-- 2 SUBJECT -->
            <div class="grow whitespace-nowrap font-medium text-sm flex items-center space-x-1 text-white">
                <span class="bg-[#DDDDDD] text-[#6A6766] rounded-md font-normal text-sm px-1">Social</span>
                <span>HEY! @lh536 You have a new follower!</span>
            </div>

            <!-- 2 TIME & OPTIONS -->
            <div class="font-medium text-sm flex items-center justify-end flex-grow group">
                <div class="invisible flex group-hover:visible -mr-2">
                    <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                        <svg role="img" class="h-5 w-5">
                            <use xlink:href="icons/iconSet.svg#archive"></use>
                        </svg>
                    </button>
                    <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                        <svg role="img" class="h-5 w-5">
                            <use xlink:href="icons/iconSet.svg#delete"></use>
                        </svg>
                    </button>
                    <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                        <svg role="img" class="h-5 w-5">
                            <use xlink:href="icons/iconSet.svg#markAsRead"></use>
                        </svg>
                    </button>
                    <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                        <svg role="img" class="h-5 w-5">
                            <use xlink:href="icons/iconSet.svg#snoozed"></use>
                        </svg>
                    </button>
                </div>
                <span class="visible group-hover:hidden text-white">7:29 PM</span>
            </div>
        </div>
    </div>






    <!-- 3 CONTENT -->
    <div class="mr-2">
        <!-- 3 CENTRAL MAIL CONTENT TABLE -->
        <table class="table-fixed w-full">
            <!-- <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Views</th>
                </tr>
            </thead> -->
            <tbody class="bg-[#303030]">
                <tr class="flex flex-grow-0 group border-l-none border-t-none border-r-none border-b border-[#494949] text-[#6E6E6E] pr-4 cursor-pointer hover:text-white">
                    <!-- 2 ICONS -->
                    <td class="w-1/12 flex justify-center items-center -space-x-2">
                        <!-- 2 DOTS & INPUT -->
                        <div class="flex justify-center items-center -space-x-4 relative border-l-4 border-[#4D90F0]">
                            <button class="w-5 h-5 flex justify-end items-center">
                                <svg role="img" class="h-5 w-4 invisible group-hover:visible relative z-10">
                                    <use xlink:href="icons/iconSet.svg#sixDots"></use>
                                </svg>
                            </button>
                            <div class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] transition duration-200 hover:cursor-pointer group">
                                <input class="bg-[#303030] group-hover:bg-transparent group-hover:border-white group-hover:cursor-pointer group-hover:border-2" type="checkbox" name="" id="">
                            </div>
                        </div>
                        <!-- 2 STAR -->
                        <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959]">
                            <span>
                                <svg role="img" class="h-5 w-5">
                                    <use xlink:href="icons/iconSet.svg#starred"></use>
                                </svg>
                            </span>
                        </button>
                        <!-- 2 IMPORTANT -->
                        <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959]">
                            <span>
                                <svg role="img" class="h-5 w-5">
                                    <use xlink:href="icons/iconSet.svg#important"></use>
                                </svg>
                            </span>
                        </button>
                    </td>
                    <!-- 2 SENDER -->
                    <td class="w-2/12 font-medium text-sm flex items-center text-white">
                        <span>Twitter</span>
                    </td>
                    <!-- 2 SUBJECT -->
                    <td class="w-5/6 font-medium text-sm flex items-center space-x-1 text-white">
                        <span
                            class="bg-[#DDDDDD] text-[#6A6766] rounded-md font-normal text-sm px-1">Social</span>
                        <span>HEY! @lh536 You have a new follower!</span>
                    </td>
                    <!-- 2 TIME & OPTIONS -->
                    <td class="w-2/12 font-medium text-sm flex items-center justify-end flex-grow group">
                        <div class="invisible flex group-hover:visible -mr-2">
                            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                <svg role="img" class="h-5 w-5">
                                    <use xlink:href="icons/iconSet.svg#archive"></use>
                                </svg>
                            </button>
                            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                <svg role="img" class="h-5 w-5">
                                    <use xlink:href="icons/iconSet.svg#delete"></use>
                                </svg>
                            </button>
                            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                <svg role="img" class="h-5 w-5">
                                    <use xlink:href="icons/iconSet.svg#markAsRead"></use>
                                </svg>
                            </button>
                            <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                <svg role="img" class="h-5 w-5">
                                    <use xlink:href="icons/iconSet.svg#snoozed"></use>
                                </svg>
                            </button>
                        </div>
                        <span class="visible group-hover:hidden text-white">7:29 PM</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        name: 'CentralMailContent'
    }

</script>


<style scopped>

</style>
