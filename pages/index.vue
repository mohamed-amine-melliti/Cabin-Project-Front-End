<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import AirbnbListing from '~/components/listing/AirbnbListing.vue'
import Loading from '~/components/Loading.vue' // Import your loading component

const router = useRouter()
const route = useRoute()
const toast = useToast()
const user = useUser()

const { allListings, isLoading, fetchNextSet } = useFilteredPagination()

const showLoading = ref(true) // Ref to manage the loading state

onMounted(() => {
  // Set timeout to stop showing the loading component after 3 seconds
  setTimeout(() => {
    showLoading.value = false
  }, 3000)
})

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

      <!-- Show loading component initially -->
      <Loading v-if="showLoading" />

      <!-- Main content -->
      <div v-if="!showLoading">
        <IsEmpty v-if="!isLoading && allListings?.length === 0" :showReset="true" />
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" v-if="allListings && allListings.length > 0">
          <ListingCard v-for="listing in allListings" :listing="listing" :key="listing.id" />
        </div>
        <Observer @intersect="fetchNextSet" />
        <LoadingListingCards :cards="12" v-if="isLoading" />
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" v-if="allListings && allListings.length > 0">
          <ReservationListingCard v-for="listing in allListings" :listing="listing" :key="listing.id" />
        </div>
      </div>

    </Container>

    <Availablelocations></Availablelocations>
    <RegistrationBanner v-if="!user"></RegistrationBanner>

    <MoreListings></MoreListings>
    <InspirationSection></InspirationSection>
  </section>
</template>

