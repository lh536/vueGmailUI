<template>
    <aside class="w-64">
        <logo-section />
        <compose-menu />




        <!-- 3 LEFT MENU BAR -->
        <div class="flex flex-col items-start text-sm min-h-full hidden">

            <button
                class="w-full flex justify-between items-center bg-[#595959] rounded-r-full font-bold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span>Inbox</span>
                </div>
                <span class="">47</span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </span>
                    <span>Starred</span>
                </div>
                <span class=""></span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span>Snoozed</span>
                </div>
                <span class=""></span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span class="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </span>
                    <span>Important</span>
                </div>
                <span class=""></span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span class="transform rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </span>
                    <span>Sent</span>
                </div>
                <span class=""></span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span>Drafts</span>
                </div>
                <span class="">2</span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span>All Mail</span>
                </div>
                <span class="">47</span>
            </button>

            <button
                class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                <div class="flex space-x-4 ml-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M19 9l-7 7-7-7" />
                        </svg>

                    </span>
                    <span>More</span>
                </div>
                <span class=""></span>
            </button>


            <!-- 4 CHAT -->
            <div class="flex w-full max-h-screen flex-col h-full border-t border-[#2E2E2E]">
                <div class="flex justify-between items-center group h-10 pl-1 py-4 cursor-default flex-grow">
                    <span class="flex items-center space-x-2">
                        <span
                            class="hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span class="text-sm font-semibold">Chat</span>
                    </span>

                    <button
                        class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] transition duration-200">
                        <span class="text-[#80868B] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="flex flex-col h-full justify-center items-center text-[#80868B] text-sm">
                    <span class="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </span>
                    <span>No conversations</span>
                    <span class="text-[#789CD6] cursor-pointer">Find a room</span>

                </div>

            </div>

            <!-- 4 ROOMS -->
            <div class="flex w-full max-h-screen flex-col h-full border-t border-[#2E2E2E]">
                <div class="flex justify-between items-center group h-10 pl-1 py-4 cursor-default flex-grow">
                    <span class="flex items-center space-x-2">
                        <span
                            class="hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span class="text-sm font-semibold">Rooms</span>
                    </span>

                    <button
                        class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#414141] transition duration-200">
                        <span class="text-[#80868B] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="flex flex-col h-full justify-center items-center text-[#80868B] text-sm">
                    <span class="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 transform rotate-180" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    </span>
                    <span>No rooms</span>
                    <span class="text-[#789CD6] cursor-pointer">Find a room to join</span>

                </div>
            </div>

            <!-- 4 MEET -->
            <div class="flex w-full mt-auto max-h-screen flex-col border-t border-[#2E2E2E]">
                <div class="flex justify-between items-center group h-10 pl-1 mr-2 py-4 cursor-default">
                    <span class="flex items-center space-x-2">
                        <span
                            class="hover:bg-[#676767] h-9 w-5 rounded-md transition duration-200 flex justify-center items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span class="text-sm font-semibold">Meet</span>
                    </span>
                </div>
                <div class="flex flex-col h-full justify-center items-center">

                    <button
                        class="w-full flex justify-between items-center hover:bg-[#414141] rounded-r-full font-semibold py-2 px-4 mr-4">
                        <div class="flex space-x-4 ml-4 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span>New meeting</span>
                        </div>
                        <span class=""></span>
                    </button>

                </div>

            </div>

        </div>

    </aside>

</template>


<script>
import { defineAsyncComponent } from "vue"
const compose = document.querySelector('#compose');

compose.addEventListener('mouseenter', () => {
    compose.parentElement.classList.toggle('hover:bg-[#414141]')
});

compose.addEventListener('mouseleave', () => {
    compose.parentElement.classList.toggle('hover:bg-[#414141]')
    console.log('salio');
})


    export default {
        name: 'LeftSidebar',
        components: {
            LogoSection: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/LogoSection.vue') ),
            ComposeMenu: defineAsyncComponent ( () => import ('@/modules/gmailSample/components/LeftSidebar/ComposeMenu.vue') )
        }
    }

</script>


<style scopped>

</style>
