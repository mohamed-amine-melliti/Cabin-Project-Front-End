<template>

    <section class="flex flex-col bg-white">
  
      <div class="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full"></div>
  
      <div class="flex flex-col px-24 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
  
        <div class="flex flex-col mt-14 w-full text-black max-md:mt-10 max-md:max-w-full">
  
          <div class="flex flex-col w-full max-md:max-w-full">
  
            <div class="flex flex-col w-full max-md:max-w-full"></div>
  
          </div>
  
        </div>
  
        <div class="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
  
          <div class="flex flex-col w-full text-black max-md:max-w-full">
  
            <div class="flex flex-col w-full max-md:max-w-full">
  
              <h2 class="text-3xl font-bold leading-normal max-md:max-w-full">Inspiruj se</h2>
  
              <p class="text-base max-md:max-w-full">Nenechte si ujít novinky ze světa glampingu.</p>
  
            </div>
  
            <div class="flex flex-col py-4 w-full text-xs leading-loose max-md:max-w-full">
  
              <div class="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
  
                <InspirationCard
  
                  v-for="(card, index) in inspirationCards"
  
                  :key="index"
  
                  :image="card.image"
  
                  :title="card.title" :description="card.description"

/>

</div>

</div>

</div>

<div class="flex flex-col items-center mt-4 w-full text-base font-medium text-center text-white max-md:max-w-full">

<button class="self-stretch px-7 py-3 bg-black rounded-xl max-md:px-5">Prohlážej Chalupy</button>

</div>

</div>

<div class="flex flex-col mt-14 w-full text-sm leading-5 text-white rounded-xl max-md:mt-10 max-md:max-w-full"></div>

<div class="flex flex-wrap gap-10 justify-center py-4 mt-14 w-full max-md:mt-10 max-md:max-w-full">

<FeatureCard

v-for="(feature, index) in features"

:key="index"

:icon="feature.icon"

:title="feature.title"

:description="feature.description"

/>

</div>
<div class="flex flex-col mt-14 w-full text-black max-md:mt-10 max-md:max-w-full">

<h2 class="w-full text-3xl font-bold tracking-tight leading-none max-md:max-w-full">

  rozoumejte nabídku MEGA chalupy

</h2>

<div class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full"></div>

<div class="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full"></div>

</div>

<div class="flex flex-col self-center mt-14 max-w-full w-[1234px] max-md:mt-10">

<div class="flex flex-col w-full max-md:max-w-full">

  <div class="flex flex-col w-full text-black max-md:max-w-full"></div>

</div>

<div class="flex flex-col items-center w-full text-base font-medium text-center text-white max-md:max-w-full">

  <button class="self-stretch px-7 py-3 bg-black rounded-xl max-md:px-5">Přejít na blog</button>

</div>

</div>

</div>

</section>

</template>
<script lang="ts">

import { defineComponent } from 'vue';

import InspirationCard from './InspirationCard.vue';

import FeatureCard from './FeatureCard.vue';


export default defineComponent({

  name: 'InspirationSection',

  components: {

    InspirationCard,

    FeatureCard,

  },

  data() {

    return {

      inspirationCards: [

        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c6e27339190c571fdcd577a249b92b3dbfbace1358b08bf5eba5e74a2b8e3b85?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Rande na Chalupě', description: 'Example' },

        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa98b443e2849892d6034d783b4f13ca38c51305533eaf3bec480b16228e716a?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Dog Friedly Ubytování', description: 'Example' },

        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a73dbc4b806dc1677167e080f6f98104e9c112a0c16869855a73fe782fbb327e?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Svatba na chalupě', description: 'Example' },

        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20a00d26dd09de03bc8f4c7d61ca2936bd9340c19a8214b2800ddb150f18a666?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Pro party přátel', description: 'Example' },

        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/446a26831c83e73f038c69503dbbea00ca2099cf1553e6a5f7cbfa96dd0bffdc?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa', title: 'Výprava Apalucha', description: 'Example' },

      ],

      features: [ {

icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/118858cbb0b504f368c5b3d601c6e30f65c91adb7215bc44777492d1f9d1af42?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

title: 'V Pohodlí Domova',

description: 'Transparetni cenik sluzeTransparetni cenik.',

},

{

icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4833f052941409f78e4b64428cb5aff82fd3c52d6bbf4d52312fda9453b41848?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

title: 'Zabezpečené',

description: 'Transparetni cenik sluzebTransparetni cenik.',

},

{

icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2fe07b6dc329f7dc72d3c2570f3033908c21f1db9fcb3eac6a7177547e4d335?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

title: 'Transparetní ceník služeb',

description: 'Transparetni cenik sluzebTransparetni ceni.',

},

{

icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b29304e8dd5afa99888ea282aa8bfbfb4ecd95da634c86472d8b8811a3319c31?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa',

title: 'Pro celou Rodinu',

description: 'Vhodny pro kazdou rodinu. ou roou roou ro',

},

],   };

},

});

</script>