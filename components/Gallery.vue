<template>

    <section class="flex flex-col font-semibold text-center">
        <div class="w-full h-[60vh] overflow-hidden rounded-xl relative my-2">
            <NuxtImg loading="eager" provider="cloudinary" format="webp" :src="mainImageSrc"
            class="object-fill object-center h-full w-full rounded-xl"  />


        </div>


        <div class="flex flex-wrap justify-between mt-5 w-full max-md:max-w-full">

            <div
                class="flex flex-wrap flex-1 shrink gap-2.5 h-full text-4xl leading-5 basis-[100px] min-w-[240px] text-neutral-800 max-md:max-w-full">

                <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8eefb0e2abeb28283e72059d56e44c6b3b990b2f3172bb4a434daa338bbb1af?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Product thumbnail 1"
                    class="object-contain flex-1 shrink gap-1.5 py-1.5 rounded-md aspect-[1.32] basis-0 w-[212px]" />

                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9678eb5cc0f4a8c185464b48fe20ae7aebf787a9611c585d067bbe01bd3c3d50?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Product thumbnail 2"
                    class="object-contain flex-1 shrink gap-1.5 py-1.5 rounded-md aspect-[1.31] basis-0 w-[211px]" />

                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0d5fe006da6cf79abd5cc8bef2871aec841f8d48636d5e6b345a0befc27cf3?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                    alt="Product thumbnail 3"
                    class="object-contain flex-1 shrink gap-1.5 py-1.5 rounded-md aspect-[1.32] basis-0 w-[212px]" />


            </div>

            <ProceedToPaymentFromListing />

        </div>

    </section>

</template>


<script lang="ts">

import { defineComponent } from 'vue';
import ProceedToPaymentFromListing from './ProceedToPaymentFromListing.vue';
export default defineComponent({
    name: 'ProductGallery',
    components: {

        ProceedToPaymentFromListing,
    },

    props: {
        mainImageSrc: {
            type: String,
            required: true
        },

    }
});

</script>