<template>
  <header 
    class="flex flex-wrap justify-between items-center px-8 py-2.5 mt-14 mx-auto w-full max-w-6xl text-base leading-none text-white bg-black rounded-3xl max-md:mt-10 max-md:max-w-full max-md:px-6 max-md:py-5">
    
    <!-- Left section with logo and text -->
    <div class="flex flex-wrap flex-1 shrink gap-6 items-center my-auto min-w-[240px] max-md:max-w-full">
      <img  
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/609de48249f6c87f700fb90996a663eb76c6130c1e22ff548824521797e78d3f?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
        alt="Logo" class="object-contain shrink-0 my-auto aspect-square w-[34px]" />

      <p class="flex-1 shrink my-auto max-md:max-w-full text-sm max-md:text-center">
        Sign up <strong> or FREE get premium placement for 1 month free </strong>
      </p>
    </div>

    <!-- Right section with links -->
    <nav class="flex gap-4 items-center pr-1.5 my-auto text-center max-md:w-full max-md:justify-center">
      <NuxtLink to="/register">
        <button class="gap-2.5 p-2.5 my-auto whitespace-nowrap bg-blue-600 rounded-[44px] hover:bg-blue-700 transition-colors">
          Register
        </button>
      </NuxtLink>
      <a href="#" class="my-auto text-sm max-md:text-center">How is it going?</a>
    </nav>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrationBanner',
});
</script>

<style scoped>
/* Scoped styles to ensure the component is responsive and consistent */
</style>
