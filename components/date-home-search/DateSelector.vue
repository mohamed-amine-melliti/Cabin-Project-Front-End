<template>
    <div class="flex gap-2.5 justify-center items-center px-2.5 py-5 mt-8 max-w-full bg-white rounded-[30px] w-[1066px]">
      <div class="flex flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <!-- Top button group -->
        <div
          class="flex overflow-hidden gap-2.5 items-center px-1.5 py-1 text-sm font-medium text-black bg-gray-200 min-h-[40px] rounded-[39px]">
          <button
            class="overflow-hidden gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap min-h-[35px] rounded-[47px] w-[87px] hover:bg-gray-300 transition-all duration-200">
            Calender
          </button>
          <button
            class="overflow-hidden gap-2.5 self-stretch py-2 pr-2.5 pl-2.5 my-auto bg-white min-h-[30px] rounded-[47px] w-[87px] hover:bg-gray-300 transition-all duration-200">
            I'm flexible
          </button>
        </div>
  
        <!-- Section 1: Stay for a Weekend -->
        <div class="flex flex-col items-center mt-16 text-black max-md:mt-10">
          <h2 class="text-xl font-medium">
            <span class="text-neutral-500">Stay for a</span>
            <span class="font-bold">weekend</span>
          </h2>
          <div class="flex gap-1 items-start mt-5 text-base whitespace-nowrap">
            <button
              class="gap-2.5 self-stretch px-5 py-2.5 border-2 border-black border-solid bg-neutral-100 rounded-[31px] hover:bg-gray-300 transition-all duration-200">
              Weekend
            </button>
            <button
              class="gap-2.5 self-stretch px-5 py-2.5 bg-white border border-solid border-zinc-400 rounded-[31px] hover:bg-gray-300 transition-all duration-200">
              Week
            </button>
            <button
              class="gap-2.5 self-stretch px-5 py-2.5 bg-white border border-solid border-zinc-400 rounded-[31px] hover:bg-gray-300 transition-all duration-200">
              Month
            </button>
          </div>
        </div>
  
        <!-- Section 2: Go in September, October -->
        <div class="flex flex-col items-center mt-16 max-md:mt-10 max-md:max-w-full">
          <h2 class="text-xl font-medium text-black">
            <span class="text-neutral-500">Go in</span>
            <span class="font-bold">September, October</span>
          </h2>
          <div
            class="flex flex-wrap gap-2.5 items-start mt-5 text-base whitespace-nowrap text-neutral-500 max-md:max-w-full">
            <MonthButton month="October" selected />
            <MonthButton month="September" />
            <MonthButton month="November" />
            <MonthButton month="December" />
            <MonthButton month="January" />
            <MonthButton month="February" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import MonthButton from './MonthButton.vue';
  
  export default defineComponent({
    name: 'DateSelector',
    components: {
      MonthButton
    }
  });
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.2s ease;
  }
  
  button:hover {
    background-color: rgba(0, 0, 0, 0.05); /* Light hover effect */
  }
  </style>
  