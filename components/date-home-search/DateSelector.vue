<template>
    <div class="flex flex-col items-center mt-8 w-full">
      <!-- Top button group -->
      <div class="flex justify-center items-center gap-2.5 p-1 text-sm font-medium text-black bg-gray-200 rounded-full">
        <button class="px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-200">
          Dates
        </button>
        <button class="px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-200">
          Mois
        </button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-full shadow-md">
          Flexible
        </button>
      </div>
  
      <!-- Section 1: Stay Duration -->
      <div class="flex flex-col items-center mt-8">
        <h2 class="text-xl font-semibold">Quelle sera la durée de votre séjour ?</h2>
        <div class="flex justify-center gap-4 mt-4">
          <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200">
            Un week-end
          </button>
          <button class="px-4 py-2 border-2 border-black rounded-full font-semibold">
            Une semaine
          </button>
          <button class="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200">
            Un mois
          </button>
        </div>
      </div>
  
      <!-- Section 2: Month Selector with Arrows -->
      <div class="flex flex-col items-center mt-8 w-full">
        <h2 class="text-xl font-semibold">Quand souhaitez-vous partir ?</h2>
        <div class="relative w-full">
          <!-- Left Arrow -->
          <button
            class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
            @click="scrollLeft"
          >
            &lt;
          </button>
  
          <!-- Month Buttons -->
          <div class="flex overflow-x-auto mt-4 gap-4 pb-2 scrollbar-hide">
            <MonthButton month="Septembre" year="2024" />
            <MonthButton month="Octobre" year="2024" />
            <MonthButton month="Novembre" year="2024" />
            <MonthButton month="Décembre" year="2024" />
            <MonthButton month="Janvier" year="2025" />
            <MonthButton month="Février" year="2025" />
            <MonthButton month="Mars" year="2025" />
            <MonthButton month="Février" year="2025" />
            <MonthButton month="Février" year="2025" />
            <MonthButton month="Février" year="2025" />
            <MonthButton month="Février" year="2025" />
            <MonthButton month="Février" year="2025" />
            <MonthButton month="Février" year="2025" />
          </div>
  
          <!-- Right Arrow -->
          <button
            class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
            @click="scrollRight"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import MonthButton from './MonthButton.vue';

  import { ref } from 'vue';

const scrollLeft = () => {
  const container = document.querySelector('.overflow-x-auto');
  container.scrollBy({ left: -200, behavior: 'smooth' });
};

const scrollRight = () => {
  const container = document.querySelector('.overflow-x-auto');
  container.scrollBy({ left: 200, behavior: 'smooth' });
};
  
  export default defineComponent({
    name: 'DateSelector',
    components: {
      MonthButton
    }
  });
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.2s ease, border 0.2s ease;
  }
  
  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .overflow-x-auto {
    overflow-x: auto;
    padding-bottom: 1rem;
  }
  /* Hide scrollbar for better UI */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
  </style>
  