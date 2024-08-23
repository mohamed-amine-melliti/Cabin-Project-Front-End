<template>

    <article class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">

        <img :src="image" :alt="title" class="object-contain w-full rounded-xl aspect-[1.42] max-md:max-w-full"
            loading="lazy" />

        <div class="flex flex-col mt-4 w-full max-md:max-w-full">

            <p class="font-light max-md:max-w-full">{{ description }}</p>

            <h3 class="mt-2.5 font-semibold max-md:max-w-full">{{ title }}</h3>

        </div>

    </article>

</template>


<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'InspirationCard',

    props: {

        image: {

            type: String,

            required: true,

        },

        title: {

            type: String, required: true,

        },

        description: {

            type: String,

            required: true,

        },

    },

});

</script>