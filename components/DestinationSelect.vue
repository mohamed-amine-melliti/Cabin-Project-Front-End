<template>

  <div class="flex flex-col text-black min-w-[240px]">

    <h2 class="text-sm font-semibold">Buscar por región</h2>

    <div class="flex flex-col mt-4 text-xs font-medium">

      <div class="flex gap-4 items-start">

        <div v-for="(region, index) in regions.slice(0, 3)" :key="index" class="flex flex-col w-[124px]">

          <img :src="region.imageSrc" :alt="region.name" class="object-contain max-w-full aspect-square w-[124px]" />

          <div class="mt-2">{{ region.name }}</div>

        </div>

      </div>

      <div class="flex gap-4 items-start mt-12 max-md:mt-10">

        <div v-for="(region, index) in regions.slice(3)" :key="index + 3" class="flex flex-col w-[124px]">

          <img :src="region.imageSrc" :alt="region.name" class="object-contain max-w-full aspect-square w-[124px]" />

          <div class="mt-2">{{ region.name }}</div>

        </div>

      </div>

    </div>

  </div>

</template>


<script lang="ts">

import { defineComponent } from 'vue';


interface Region {

  imageSrc: string;

  name: string;

}


export default defineComponent({

  name: 'RegionSearch',

  data() {

    return {

      regions: [ { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/efa6d3a5cf57b116527c6187a9ef1c64ea6965fd2f3c4f81806c9d5ca149996b?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', name: 'Búsqueda flexible' },

        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6801b04a2dfe0ed91bac89b1af2bcc8b250062a9bdf75392b2caf3326bc050f8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', name: 'Europa' },

        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/57d28d576dd60cbae6fa9b03b1dc6bd265acb54d69766af67d2b38421c9e91e5?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', name: 'Francia' },

        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6801b04a2dfe0ed91bac89b1af2bcc8b250062a9bdf75392b2caf3326bc050f8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', name: 'Búsqueda flexible' },

        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6801b04a2dfe0ed91bac89b1af2bcc8b250062a9bdf75392b2caf3326bc050f8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', name: 'Búsqueda flexible' },

        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6801b04a2dfe0ed91bac89b1af2bcc8b250062a9bdf75392b2caf3326bc050f8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', name: 'Búsqueda flexible' }

      ] as Region[]

    };

  }

});

</script>