<template>
  <div class="flex flex-col items-center mt-8 w-full">
    <!-- Top button group -->

    <ButtonSwitch></ButtonSwitch>

    <!-- Section 1: Stay Duration -->
    <StayDuration></StayDuration>
    
    <!-- Section 2: Month Selector with Arrows -->
    <div class="flex flex-col items-center mt-8 w-full">
      <h2 class="text-xl font-semibold">Quand souhaitez-vous partir ?</h2>
      <div class="relative w-full">
    

        <!-- Month Buttons -->
    <MonthButtons></MonthButtons>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MonthButton from './MonthButton.vue';

import { } from 'vue';
import ButtonSwitch from '../buttons/ButtonSwitch.vue';
import StayDuration from '../buttons/StayDuration.vue';
import MonthButtons from '../buttons/MonthButtons.vue';

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
    MonthButton,
    ButtonSwitch,
    StayDuration,
    MonthButtons
  }
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>