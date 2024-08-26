<script lang="ts" setup>
import { categories } from '~/data/constants'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const category = ref(route.query.category)
const isSticky = ref(false)

const isMainPage = computed(() => route.name === 'index')

watch(
  () => route.query.category,
  (newCategory) => {
    category.value = newCategory
  },
)

let observer: IntersectionObserver

onMounted(() => {
  const menu = document.querySelector('.menu')

  observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = entry.intersectionRatio < 1
    },
    {
      root: null,
      threshold: 0.9, // Adjust the threshold value to a smaller value
    }
  )

  if (menu) {
    observer.observe(menu)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>
  <Container v-if="isMainPage">
    <div
      :class="{ 'sticky top-0 left-0 right-0 z-10': isSticky }"
      class="menu bg-white scroll-snap-type-x-mandatory flex flex-row items-center justify-between overflow-x-auto gap-10 justify-center items-start px-12 pb-0.5 text-xs font-medium whitespace-nowrap backdrop-blur-[16.5px] bg-stone-50 bg-opacity-70 border-b-black border-b-opacity-10 border-x-black border-x-opacity-10 text-zinc-600 max-md:px-5 mt-8"
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

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 10; /* Ensure it stays above other content */
}
</style>
