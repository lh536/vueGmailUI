<template>
    <div class="flex justify-between w-full py-2 border-b border-[#2E2E2E]">
        <div class="flex max-w-3xl w-full">
            <search-field />
        </div>
        <div class="flex items-center">
            <user-status-indicator />
            <upper-right-options />
            <avatar-image />
        </div>
    </div>

    <div class="col-span-7 hidden">
        <!-- 3 MIDDLE CENTER OPTIONS MENU -->
        <div class="col-span-7">
            <div class="flex border-b border-[#2E2E2E] items-center h-10 space-x-3 text-[#E9E9E9] py-6">
                <!-- 3 MAIL SELECTION -->
                <div class="flex pl-4">
                    <div
                        class="w-7 h-9 rounded-md flex justify-center items-center group hover:bg-[#414141] transition duration-200 hover:cursor-pointer">
                        <input
                            class="group-hover:bg-[#414141] group-hover:border-white group-hover:cursor-pointer bg-[#111111]"
                            type="checkbox" name="" id="">
                    </div>
                    <button
                        class="w-4 h-9 rounded-md flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 hover:text-white" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <!-- 3 RELOAD BUTTON -->
                <div>
                    <button
                        class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>
                <!-- 3 MORE BUTTON -->
                <div>
                    <button
                        class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
                <!-- 3 PANEL MODE BUTTON -->
                <div class="flex justify-end items-center flex-grow pr-7">
                    <button
                        class="w-7 h-9 rounded-md flex justify-center items-center hover:bg-[#414141] transition duration-200 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    </button>
                    <!-- 3 DOWN ARROW BUTTON -->
                    <button
                        class="w-4 h-9 rounded-md flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 hover:text-white" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- 3 CONTENT -->
        <div class="col-span-7 mr-2">
            <!-- 3 UNREAD MENU, MAIL QUANTITY & OPTIONS DOTS -->
            <div class="flex justify-between items-center">
                <button
                    class="flex justify-between items-center hover:bg-[#414141] rounded-md font-semibold px-2 py-1 mx-2 transition duration-200 my-1">
                    <div class="flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#B0B0B0] hover:text-white"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M5 15l7-7 7 7" />
                        </svg>
                        <span>Unread</span>
                    </div>
                    <span class=""></span>
                </button>
                <div class="flex justify-center items-center text-xs font-semibold mr-2 -space-x-1 text-[#B0B0B0]">
                    <button
                        class="flex justify-between items-center hover:bg-[#414141] rounded-md font-semibold px-2 py-2 transition duration-200">
                        <span>1-10 of 57</span>
                    </button>
                    <div>
                        <button
                            class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] hover:text-white transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
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
                    <tr
                        class="flex flex-grow-0 group border-l-none border-t-none border-r-none border-b border-[#494949] text-[#6E6E6E] pr-4 cursor-pointer hover:text-white">
                        <!-- 2 ICONS -->
                        <td class="w-1/12 flex justify-center items-center -space-x-2">
                            <!-- 2 DOTS & INPUT -->
                            <div
                                class="flex justify-center items-center -space-x-4 relative border-l-4 border-[#4D90F0]">
                                <button class="w-5 h-5 flex justify-end items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-grid-dots h-5 w-4 invisible group-hover:visible relative z-10"
                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="5" cy="5" r="0.5" />
                                        <circle cx="12" cy="5" r="0.5" />
                                        <circle cx="5" cy="12" r="0.5" />
                                        <circle cx="12" cy="12" r="0.5" />
                                        <circle cx="5" cy="19" r="0.5" />
                                        <circle cx="12" cy="19" r="0.5" />
                                    </svg>
                                </button>
                                <div
                                    class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] transition duration-200 hover:cursor-pointer group">
                                    <input
                                        class="bg-[#303030] group-hover:bg-transparent group-hover:border-white group-hover:cursor-pointer group-hover:border-2"
                                        type="checkbox" name="" id="">
                                </div>
                            </div>
                            <!-- 2 STAR -->
                            <button
                                class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959]">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </span>
                            </button>
                            <!-- 2 IMPORTANT -->
                            <button
                                class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959]">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
                                <button
                                    class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#595959] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                            <span class="visible group-hover:hidden text-white">7:29 PM</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>


<script>

import { defineAsyncComponent } from 'vue'

    export default {
        name: 'MainSection',
        components: {
            SearchField: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/SearchField.vue') ),
            UserStatusIndicator: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/UserStatusIndicator.vue') ),
            UpperRightOptions: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/UpperRightOptions.vue') ),
            AvatarImage: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/MainSection/AvatarImage.vue') ),
        }
    }

</script>


<style scopped>

</style>
