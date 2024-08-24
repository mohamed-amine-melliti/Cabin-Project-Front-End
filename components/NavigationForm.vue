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
  export default defineComponent({
    name: 'NavigationBar',
    data() {
      return {
        navigationItems: [
          'Type',
          'Amenities',
          'Photos',
          'Description',
          'Hosting',
          'Location',
          'Details',
          'Price',
          //'Renting type',
          //'Billing'
          //'Discounts',
          'Rooms',
          'Finish up',

        ],
        selectedItem: '' // Track the currently selected item
      };
    },
    methods: {
      handleNavigation(item: string) {
        this.selectedItem = item; // Set the selected item when a button is clicked
        console.log(`Navigating to: ${item}`);
      }
    }
  });
  </script>
  