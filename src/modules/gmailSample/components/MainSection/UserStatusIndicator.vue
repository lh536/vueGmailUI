<template>
     <button class="hidden lg:flex justify-center items-center ml-4 border border-[#2E2E2E] rounded-full px-3 py-1 font-semibold hover:bg-[#414141] hover:border-[#585858]">
        <div class="w-2 h-2 bg-[#1E8E3E] rounded-full ring-white ring-1"></div>
        <span class="pl-2 pr-1">Active</span>
        <svg role="img" class="w-4 h-4">
            <use xlink:href="/icons/iconSet.svg#chevronDown"></use>
        </svg>
    </button>
</template>


<script>
    export default {
        name: 'UserStatusIndicator',
    }

</script>


<style scopped>

</style>
