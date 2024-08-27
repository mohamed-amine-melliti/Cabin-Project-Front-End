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
        class="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-lg overflow-auto z-10 max-h-96 p-4"
      >
        <h2 class="text-lg font-bold mb-4">Rechercher par région</h2>
        <div class="grid grid-cols-3 gap-4">
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
          <button
            @click="selectLocation('Moyen-Orient')"
            class="flex flex-col items-center p-4 bg-white border rounded-lg hover:bg-gray-50"
          >
            <img
              class="w-16 h-16 mb-2"
              src="https://a0.muscache.com/im/pictures/76b96d8e-04b1-4848-9464-0b5f049d9a3e.jpg?im_w=320"
              alt="moyen-orient"
            />
            <span>Moyen-Orient</span>
          </button>
          <button
            @click="selectLocation('Italie')"
            class="flex flex-col items-center p-4 bg-white border rounded-lg hover:bg-gray-50"
          >
            <img
              class="w-16 h-16 mb-2"
              src="https://a0.muscache.com/im/pictures/af7a81c8-3806-4265-bff6-d7fc609cfe13.jpg?im_w=320"
              alt="italie"
            />
            <span>Italie</span>
          </button>
          <button
            @click="selectLocation('Asie du Sud-Est')"
            class="flex flex-col items-center p-4 bg-white border rounded-lg hover:bg-gray-50"
          >
            <img
              class="w-16 h-16 mb-2"
              src="https://a0.muscache.com/im/pictures/33eb4b52-3312-4398-aee9-6df7a5d71ff9.jpg?im_w=320"
              alt="asie-du-sud-est"
            />
            <span>Asie du Sud-Est</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>



<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'DestinationSelect',
  setup() {
    const isAccordionOpen = ref(false);

    const toggleAccordion = () => {
      isAccordionOpen.value = !isAccordionOpen.value;
    };

    const selectLocation = (location: string) => {
      console.log(`Selected location: ${location}`);
      isAccordionOpen.value = false; // Close the accordion
    };

    const closeAccordion = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        isAccordionOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('click', closeAccordion);
    });

    onUnmounted(() => {
      window.removeEventListener('click', closeAccordion);
    });

    return {
      isAccordionOpen,
      toggleAccordion,
      selectLocation,
    };
  },
});
</script>


<style scoped>
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}

button {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e0e0e0;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

span {
  font-size: 14px;
  color: #333;
  text-align: center;
}
</style>

