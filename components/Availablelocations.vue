<template>
    <section class="flex flex-wrap gap-4 items-center py-4 w-full font-semibold max-md:max-w-full">
     <!----   <article v-for="(item, index) in galleryItems" :key="index"
            class="flex overflow-hidden flex-col flex-1 shrink self-stretch my-auto whitespace-nowrap rounded-xl border border-solid basis-0 border-black border-opacity-10 min-w-[240px]">
            <img v-if="item.imageSrc" :src="item.imageSrc" :alt="item.imageAlt" loading="lazy"
                class="object-contain max-w-full aspect-[1.76] w-[390px]" />
            <div class="flex gap-10 justify-between items-center px-4 py-2.5 w-full bg-white">
                <p class="self-stretch my-auto text-xs leading-loose">{{ item.title }}</p>
                <span class="self-stretch my-auto text-xl leading-none">{{ item.flag }}</span>
            </div>
        </article>---->


        
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

interface GalleryItem {

    imageSrc?: string;

    imageAlt: string ;
    
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