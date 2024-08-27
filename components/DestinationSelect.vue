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
                src="https://a0.muscache.com/im/pictures/65020241-c5d8-4fa6-a5b5-c2e3dc9b6b45.jpg?im_w=320"
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
                src="https://a0.muscache.com/im/pictures/89c10f4d-2a87-4e38-9bda-d7b709ce71a0.jpg?im_w=320"
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
                src="https://a0.muscache.com/im/pictures/23482b82-04c1-4f44-b8ed-58d462ce416d.jpg?im_w=320"
                alt="asie-du-sud-est"
              />
              <span>Asie du Sud-Est</span>
            </button>
          </div>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

button {
  transition: transform 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}
</style>
