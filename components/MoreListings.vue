<template>
<section class="flex relative flex-col py-8 px-8 mx-auto w-full max-w-6xl rounded-2xl min-h-[376px] bg-white overflow-hidden mt-[55px] max-md:px-5 max-md:max-w-full">  
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fccbd3233e3b1c872c55804c7c793aaf3269768796215ff1ebba3e25d6cbe7c?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa" class="object-cover absolute inset-0 w-full h-full rounded-2xl" alt="" />
  
  <h2 class="relative text-2xl font-semibold text-black">More Listings</h2>
  
  <p class="relative mt-10 text-black max-md:mt-8">Explore more listings...</p>
  
  <button class="relative gap-2 self-start p-2.5 mt-10 leading-none bg-blue-600 text-white rounded-lg max-md:mt-8" @click="seeListings">
    See the listings
  </button>

</section>




</template>


<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'MoreListings',

    methods: {

        seeListings() {

            // Implement the logic for seeing listings

            console.log('Seeing listings');

        }
    }

});

</script>