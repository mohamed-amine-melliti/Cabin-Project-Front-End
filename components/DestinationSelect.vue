<template>
  <div class="relative flex flex-1 items-center p-3 bg-white rounded-full shadow-sm border border-gray-200">
    <img loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4ea68a008ae9dd183ee824e10715869e80b1eb05e7139f33595a2df3614bb8?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
      alt="destination-icon" class="w-5 h-5 mr-2" />
    <label for="destination" class="sr-only">Going to</label>
    <input type="text" id="destination" placeholder="Destination"
      class="w-full bg-transparent border-none outline-none placeholder-gray-500" @focus="toggleAccordion" />

    <!-- Dropdown -->
    <transition name="fade">
      <div
        v-if="isAccordionOpen"
        class="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-10"
      >
        <div class="p-4">
          <h2 class="text-lg font-bold mb-4">Destination</h2>
          <div class="relative flex items-center mb-4">
            <svg
              class="absolute left-3 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8.293 16.293a1 1 0 011.414 0l5.586-5.586a1 1 0 00-1.414-1.414L10 14.586 7.414 12A1 1 0 106 13.414l3 3a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une destination"
              class="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="flex gap-4">
            <button
              @click="selectLocation('Je suis flexible')"
              class="flex flex-col items-center p-4 bg-white border rounded-lg hover:bg-gray-50"
            >
              <img
                class="w-16 h-16 mb-2"
                src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
                alt="flexible"
              />
              <span>Je suis flexible</span>
            </button>
            <button
              @click="selectLocation('Afrique')"
              class="flex flex-col items-center p-4 bg-white border rounded-lg hover:bg-gray-50"
            >
              <img
                class="w-16 h-16 mb-2"
                src="https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320"
                alt="afrique"
              />
              <span>Afrique</span>
            </button>
            <button
              @click="selectLocation('Turquie')"
              class="flex flex-col items-center p-4 bg-white border rounded-lg hover:bg-gray-50"
            >
              <img
                class="w-16 h-16 mb-2"
                src="https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320"
                alt="turquie"
              />
              <span>Turquie</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DestinationSelect',
  setup() {
    const isAccordionOpen = ref(false);

    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
    };

    const selectLocation = (location: string) => {
      console.log(`Selected location: ${location}`);
      // Optionally, you can set the destination input value here
      isAccordionOpen.value = false; // Close the accordion
    };

    return {
      isAccordionOpen,
      toggleAccordion,
      selectLocation,
    };
  },
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.destination-search {
  display: flex; /* Adjust display to flex for horizontal alignment */
}

.destination-search button {
  padding: 10px 20px; /* Reduce padding for smaller buttons */
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px; /* Add rounded corners */
}

.destination-search button:hover {
  background-color: #e0e0e0; /* Adjust hover color */
}

.transition {
  position: relative;
  transition: opacity 0.3s ease-in-out;
}

.transition-enter,
.transition-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.transition-enter-active,
.transition-leave-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
