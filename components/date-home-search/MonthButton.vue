<template>
    <button
      :class="[
        'flex overflow-hidden flex-col justify-center items-center px-2.5 py-8 rounded-2xl border border-solid min-h-[122px] w-[114px]',
        selected ? 'border-2 border-black bg-neutral-100 text-neutral-800' : 'bg-white border-zinc-300 text-neutral-500'
      ]"
    >
      <img :src="`calendar.svg`" class="object-contain w-7 aspect-[0.87]" />
      <div class="mt-2.5">{{ month }}</div>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue'; // Type-only import for PropType
  
  export default defineComponent({
    name: 'MonthButton',
    props: {
      month: {
        type: String as PropType<string>,
        required: true,
      },
      selected: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    methods: {
      getImageNumber(): number {
        const monthMap: { [key: string]: number } = {
          October: 3,
          September: 4,
          November: 5,
          December: 6,
          January: 7,
          February: 8,
        };
        return monthMap[this.month] || 3;
      },
    },
  });
  </script>
  