<script lang="ts" setup>
import { useToast } from 'vue-toastification'

const router = useRouter()
const route = useRoute()
const toast = useToast()

const { allListings, isLoading, fetchNextSet } = useFilteredPagination()

if (import.meta.client) {
  if (route.fullPath.includes('?email=verified')) {
    toast.success('Email verified')

    const url = new URL(route.fullPath, window.location.origin)

    url.searchParams.delete('email')

    router.replace(url.pathname + url.search)
  } else if (route.fullPath.includes('?error')) {
    toast.error('Invalid or missing token')

    const url = new URL(route.fullPath, window.location.origin)

    url.searchParams.delete('error')

    router.replace(url.pathname + url.search)
  }
}
</script>

<template>
  <section>
    <Container>

      <ChalupSearch></ChalupSearch>
      <IsEmpty v-if="!isLoading && allListings?.length === 0" :showReset="true" />
      <div class="max-w-6xl mx-auto px-8 max-md:px-5 max-md:max-w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" v-if="allListings && allListings.length > 0">
          <ListingCard v-for="listing in allListings" :listing="listing" :key="listing.id" />
        </div>
      </div>

      <Observer @intersect="fetchNextSet" />
      <LoadingListingCards :cards="12" v-if="isLoading" />
    </Container>

    <Availablelocations></Availablelocations>
    <RegistrationBanner></RegistrationBanner>

    <MoreListings></MoreListings>
    <InspirationSection></InspirationSection>
  </section>
</template>
