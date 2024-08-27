<template>
    <section class="flex flex-col pb-28 max-md:pb-24">
      <header class="relative flex flex-col px-4 w-full min-h-[451px] max-md:max-w-full">
        <!-- Background Image with Gradient Overlay -->
        <div class="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
          <img loading="lazy" src="../public/chalupsearch.png" alt="background"
            class="object-cover w-full h-full rounded-lg" />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-lg"></div>
        </div>
  
        <!-- Main Content -->
        <main class="relative z-10 flex flex-col self-center mt-0 max-w-full w-[479px] text-center text-white max-md:mt-0">
          <h1 class="text-4xl font-extrabold leading-snug mb-4 drop-shadow-lg">
            Vítejte, hledej chalupu
          </h1>
  
          <!-- Search Form -->
          <form @submit.prevent="handleSearch"
            class="flex gap-3 items-center p-4 mt-5 w-full bg-white/90 rounded-full shadow-lg max-md:flex-col max-md:w-full max-md:gap-4 max-md:bg-white backdrop-blur-lg">
  
            <!-- DestinationSelect Component -->
            <DestinationSelect />
  
            <!-- Dates Input -->
            <div class="flex flex-1 items-center p-3 bg-white rounded-full shadow-sm border border-gray-200">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/385186cd1e9b4d55a0a945e9beba365cb5e8c23ae2ff1582c154eef948783cbb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="dates-icon" class="w-5 h-5 mr-2" />
              <label for="dates" class="sr-only">Dates</label>
              <input type="text" id="dates" placeholder="Select dates"
                class="w-full bg-transparent border-none outline-none placeholder-gray-500" />
            </div>
  
            <!-- Travelers Input -->
            <div class="flex flex-1 items-center p-3 bg-white rounded-full shadow-sm border border-gray-200">
              <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef580c73e38012b4a90786e17c2f82fadbdb107d48a77ca14baeebf60950b7b0?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
                alt="travelers-icon" class="w-5 h-5 mr-2" />
              <label for="travelers" class="sr-only">Number of travelers</label>
              <input type="number" id="travelers" min="1" value="2"
                class="w-full bg-transparent border-none outline-none placeholder-gray-500" />
              <span class="ml-2 text-gray-600">travelers</span>
            </div>
  
            <!-- Search Button -->
            <button type="submit"
              class="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none">
              Search
            </button>
          </form>
        </main>
      </header>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import DestinationSelect from './DestinationSelect.vue';
  
  export default defineComponent({
    name: 'ChalupSearch',
    components: {
      DestinationSelect,
    },
    methods: {
      handleSearch() {
        console.log('Search initiated');
      },
    },
  });
  </script>
  
  <style scoped>
  .mt-0 {
    margin-top: 150px;
  }
  
  .w-\[479px\] {
    width: 100%;
    max-width: 800px;
  }
  
  input::placeholder {
    color: #9ca3af;
  }
  
  button:hover {
    background-color: #2563eb;
  }
  
  header {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  form {
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  }
  
  form:hover {
    transform: translateY(-5px);
  }
  
  button {
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  </style>
  