<template>
  <nav class="flex flex-col pt-12 text-xs font-semibold text-zinc-400">
    <ul class="flex flex-wrap gap-1.5 justify-center items-center p-2.5 w-full bg-black max-md:max-w-full">
      <li v-for="(item, index) in navigationItems" :key="index" class="flex-1 shrink">
        <button
          :class="[
            'gap-1.5 self-stretch px-4 py-1.5 my-auto min-h-[23px] rounded',
            selectedItem === item ? 'text-black bg-white ' : 'bg-neutral-800'
          ]"
          @click="handleNavigation(item)"
        >
          {{ item }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { STEPS } from '~/composables/useCreateListing';

export default defineComponent({
  name: 'NavigationForm',
  props: {
    currentStep: {
      type: String,
      required: true
    },
    onStepChange: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const navigationItems = [
      'Type',
      'Amenities',
      'Photos',
      'Description',
      'Hosting',
      'Location',
      'Details',
      'Price',
      'Rooms',
      'Finish up',
    ];

    const selectedItem = ref(props.currentStep); // Initialize with the current step

    function handleNavigation(item: string) {
      selectedItem.value = item;
      props.onStepChange(item); // Trigger the step change in the parent
      console.log(`Navigating to: ${item}`);
    }

    return {
      navigationItems,
      selectedItem,
      handleNavigation
    };
  }
});
</script>
