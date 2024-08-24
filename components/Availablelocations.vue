<template>
    <section class="flex flex-wrap justify-center gap-4 py-4 w-full font-semibold">

        <header class="flex flex-col items-center w-full px-4 mb-6 max-md:px-0">
            <h2 class="text-3xl font-bold leading-normal text-center max-md:text-2xl mb-2">
                Dostupné lokality
            </h2>
            <p class="text-base text-center max-md:text-sm">
                Nenechte si ujít novinky ze světa glampingu.
            </p>
        </header>


        <article @click="handleClick" v-for="(item, index) in galleryItems" :key="index"
            class="flex flex-col overflow-hidden rounded-xl border border-solid border-black border-opacity-10 min-w-[220px] max-w-[220px] bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img v-if="item.imageSrc" :src="item.imageSrc" :alt="item.imageAlt" loading="lazy"
                class="object-cover w-full h-[150px] bg-gray-200" />
            <div class="flex flex-col px-4 py-2">
                <p class="text-sm font-semibold text-gray-800">{{ item.title }}</p>
                <span class="text-lg text-gray-600">{{ item.flag }}</span>
            </div>
        </article>
    </section>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

interface GalleryItem {

    imageSrc?: string;

    imageAlt: string;

    title: string;

    flag: string;

}


export default defineComponent({

    name: 'ImageGallery',

    data() {

        return {

            galleryItems: [

                {

                    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a186527c931bec1b692ad6c8205aba4b1277225b97967d1b4d6693160888c91?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

                    imageAlt: 'Scenic view of Bavorsko',

                    title: 'Bavorsko',

                    flag: '🇩🇪'

                }, {

                    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a186527c931bec1b692ad6c8205aba4b1277225b97967d1b4d6693160888c91?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

                    imageAlt: 'Representation of Praha',

                    title: 'Praha',

                    flag: '🇨🇿'

                },

                {

                    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13684d835de52f60cba695368ebbd9a83645e2d5b619f568ecf04603ed5964f7?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

                    imageAlt: 'Landscape of Středočeský kraj',

                    title: 'Středočeský kraj',

                    flag: '🇨🇿'

                },

                {

                    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e35261c75ba191690d9831c37312e4628b76c8c382200ec59c804f1c8257e09e?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

                    imageAlt: 'Another view of Středočeský kraj',

                    title: 'Středočeský kraj',

                    flag: '🇨🇿'

                }

            ] as GalleryItem[]
        };

    }

});



</script>