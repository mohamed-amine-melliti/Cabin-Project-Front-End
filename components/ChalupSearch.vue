<template>
    <section class="flex flex-col pb-28 max-md:pb-24">

        <header class="flex relative flex-col px-1.5 w-full min-h-[451px] max-md:max-w-full">

            <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/384a23c6d77e1000d629c4b4178ad51ca48cd6672996f176f8b2e9c27370293a?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="" class="object-cover absolute inset-0 size-full" />

            <main class="flex z-10 flex-col self-center mt-0 max-w-full w-[479px] max-md:mt-0">
                <h1 class="text-3xl font-extrabold leading-none text-white max-md:max-w-full">
                    Vítejte, hledej chalupu
                </h1>
                <form @submit.prevent="handleSearch"
                    class="flex gap-1.5 items-center p-2.5 mt-3 w-full text-xs bg-gray-200 rounded-3xl border-solid border-[0.627px] border-black border-opacity-10 max-md:max-w-full">
                    <div
                        class="flex flex-1 shrink gap-1 items-center self-stretch my-auto leading-none basis-3 min-w-[240px] text-slate-800">
                        <div
                            class="flex overflow-hidden flex-1 shrink gap-2.5 items-center self-stretch py-2 pr-8 pl-2 my-auto bg-white rounded-3xl border-solid basis-[31px] border-[0.627px] border-black border-opacity-10 max-md:pr-5">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4ea68a008ae9dd183ee824e10715869e80b1eb05e7139f33595a2df3614bb8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[9px]" />
                            <label for="destination" class="sr-only">Going to</label>
                            <input type="text" id="destination" placeholder="Going to"
                                class="self-stretch my-auto bg-transparent border-none outline-none" />
                        </div>

                        <div
                            class="flex overflow-hidden flex-1 shrink gap-2.5 items-center self-stretch py-2 pr-8 pl-2 my-auto whitespace-nowrap bg-white rounded-3xl border-solid basis-[31px] border-[0.627px] border-black border-opacity-10 max-md:pr-5">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/385186cd1e9b4d55a0a945e9beba365cb5e8c23ae2ff1582c154eef948783cbb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[9px]" />

                            <label for="dates" class="sr-only">Dates</label>

                            <input type="text" id="dates" placeholder="Dates"
                                class="self-stretch my-auto bg-transparent border-none outline-none" />

                        </div>
                        <div
                            class="flex overflow-hidden flex-1 shrink gap-2.5 items-center self-stretch py-2 pr-16 pl-2 my-auto bg-white rounded-3xl border-solid basis-0 border-[0.627px] border-black border-opacity-10 max-md:pr-5">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef580c73e38012b4a90786e17c2f82fadbdb107d48a77ca14baeebf60950b7b0?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                                alt="" class="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[1.11]" />

                            <label for="travelers" class="sr-only">Number of travelers</label>

                            <input type="number" id="travelers" value="2" min="1"
                                class="self-stretch my-auto bg-transparent border-none outline-none" />

                            <span class="self-stretch my-auto">travelers</span>

                        </div>

                    </div>

                    <button type="submit"
                        class="gap-1.5 self-stretch p-1.5 my-auto leading-none text-center text-white whitespace-nowrap bg-blue-600 rounded-3xl">
                        Search
                    </button>
                </form>

            </main>

        </header>


    </section>

</template>

<script lang="ts">

import { defineComponent } from 'vue';


export default defineComponent({

    name: 'ChalupSearch',

    methods: {

        handleSearch() {

            // Implement search functionality

        }

    }

});

</script>

<style scoped>
.mt-0 {
  margin-top: 150px;
}
.mt-3 {
  margin-top: 1.75rem;
}
.w-\[479px\] {
  width: 800px;
}
</style>