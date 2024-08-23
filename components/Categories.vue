<script lang="ts" setup>
import { categories } from '~/data/constants'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const category = ref(route.query.category)

const isMainPage = computed(() => route.name === 'index')

watch(
  () => route.query.category,
  (newCategory) => {
    category.value = newCategory
  },
)
</script>

<template>
  <Container v-if="isMainPage">
    <div
      class=" pt-4 flex flex-row items-center justify-between overflow-x-auto  gap-10 justify-center items-start px-12 pb-0.5 text-xs font-medium whitespace-nowrap backdrop-blur-[16.5px] bg-stone-50 bg-opacity-70 border-b-black border-b-opacity-10 border-x-black border-x-opacity-10 text-zinc-600 max-md:px-5 mt-8"
    >
      <CategoryBox
        v-for="item in categories"
        :key="item.label"
        :label="item.label"
        :selected="category === item.label"
        :icon="item.icon"
      />
    </div>
  </Container>


</template>
