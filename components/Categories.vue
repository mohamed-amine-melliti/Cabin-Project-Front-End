<script lang="ts" setup>
import { categories } from '~/data/constants'

const route = useRoute()
const category = ref(route.query.category)

const isMainPage = computed(() => route.name === 'index')

watch(
  () => route.query.category,
  newCategory => {
    category.value = newCategory
  },
)
</script>

<template>
  <Container v-if="isMainPage">
    <div style="background-color: #F8F8F8; opacity: 50%;" class="pt-4 flex flex-row items-center justify-between overflow-x-auto">
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
