<template>
  <article
    class="flex overflow-hidden flex-col justify-center p-4 bg-white rounded-lg shadow-lg border border-solid border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">

    <div class="flex flex-wrap gap-4 min-h-[240px] max-md:max-w-full">

      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71f61ad8678a5487e111cb0c189fb1a2fe74f99e5b4aa88bac312e69359ad654?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
        alt="Eilot property" class="object-cover self-start w-60 rounded-lg aspect-square transition-opacity hover:opacity-90" />

      <div class="flex gap-10 items-start h-full min-w-[240px] w-[361px]">

        <div class="flex flex-1 shrink gap-10 items-center w-full basis-0 min-w-[240px]">

          <div
            class="flex flex-col justify-between self-stretch my-auto text-xs text-gray-800 w-[133px]">

            <h1 class="text-xl font-bold text-black">
              Eilot
            </h1>

            <button class="mt-5 font-semibold text-blue-600 underline transition-colors hover:text-blue-800">
              Show on map
            </button>

            <div class="flex gap-2.5 items-center mt-5 w-full">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d78d6f0f876de8e12c91df1ee460f3e5c5aff85bdb11d2b7356bf03eeeed6db?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="Distance icon" class="w-4" />
              <p>2 km from castle</p>
            </div>

            <p class="mt-5 leading-5">
              Located in Eilat, 650 metres from Kisuski Beach and less than 1 km from
            </p>

            <div class="flex gap-2.5 items-end mt-5">
              <p>
                <span class="font-bold">Ustecký</span>
                <span class="font-bold">kraj</span>
              </p>
              <span class="font-black">-</span>
              <p class="font-bold">Most</p>
            </div>
          </div>

          <div class="flex flex-col flex-1 shrink justify-between self-stretch my-auto basis-0 min-h-[240px]">

            <div class="flex gap-10 justify-between items-center w-full">
              <div class="flex flex-col">
                <p class="text-base text-gray-800">Fabulous</p>
                <p class="text-xs text-gray-500">428 reviews</p>
              </div>

              <div
                class="px-1 w-8 h-8 text-base text-white bg-black rounded-md flex items-center justify-center">
                8.8
              </div>
            </div>

            <button
              class="gap-2.5 px-4 py-2 mt-20 w-full text-sm text-white bg-blue-600 rounded-lg transition-transform transform hover:scale-105">
              Go to detail
            </button>

          </div>

        </div>

      </div>

    </div>

  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReservationListingCard',
});
</script>
