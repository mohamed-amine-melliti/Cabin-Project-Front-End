<template>
  <NuxtLink :to="`/listings/${listing.id}`">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
      <!-- Image Slider Section -->
      <div class="relative h-56 overflow-hidden">
        <swiper
          class="image-slider"
          :pagination="{ clickable: true }"
          :navigation="true"
          :lazy="true"
          :modules="modules"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Listing Image" loading="lazy" />
          </swiper-slide>
        </swiper>
        <!-- Heart Button -->
        <div class="absolute top-4 right-4" @click.stop>
          <HeartButton 
            :listingId="listing.id" 
            @favorited="favorited(listing.id)"
          />
        </div>
      </div>

      <!-- Details Section -->
      <div class="p-4">
        <p class="uppercase tracking-wide text-sm font-bold text-gray-700">
          {{ listing.title }} • {{ listing.category }}
        </p>
        <p class="text-gray-900">
          ${{ totalPrice || price }} • Per Night
        </p>
        <p class="text-gray-700">
          {{ location?.flag }} {{ location?.label }}, {{ location?.region }}
        </p>
      </div>

      <!-- Info Section -->
      <div class="flex p-4 border-t border-gray-300 text-gray-700">
        <!-- Bedrooms -->
        <div class="flex-1 flex items-center">
          <svg
            class="h-6 w-6 text-gray-600 fill-current mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
            />
          </svg>
          <p>
            <span class="text-gray-900 font-bold">{{ listing.roomCount }}</span>
            Bedrooms
          </p>
        </div>

        <!-- Bathrooms -->
        <div class="flex-1 flex items-center">
          <svg
            class="h-6 w-6 text-gray-600 fill-current mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
            />
          </svg>
          <p>
            <span class="text-gray-900 font-bold">{{ listing.bathroomCount }}</span>
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { format } from 'date-fns'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import type { AuthUser, Listing } from '~/types'; // Make sure to import necessary types
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/effect-cards';


type ListingCardProps = {
  listing: Listing;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  totalPrice?: number;
  title?: string;
  user: AuthUser;
  roomCount?: number;
  guestCount?: number;
  bathroomCount?: number;
  description?: string;
  locationValue: string;
  category:
  | {
    icon: string;
    label: string;
    description: string;
  }
  | undefined;

};


// Correct usage: defineProps should be called once
const props = defineProps<ListingCardProps>();

// Destructure the props directly from the props object
const { listing, reservation, locationValue } = props;

const { getByValue } = useCountries()
const location = getByValue(listing.locationValue)
const price = computed(() => (reservation ? reservation.totalPrice : listing.price))
const reservationDate = computed(() => {
  if (!reservation) return null

  const start = new Date(reservation?.startDate)
  const end = new Date(reservation?.endDate)

  return `${format(start, 'PP')} - ${format(end, 'PP')}`
})

const emit = defineEmits(['action', 'favorited'])

function action(id: string) {
  emit('action', id)
}

function favorited(id: string) {
  emit('favorited', id)
}

// Swiper modules
const modules = [Pagination, Navigation];

// Array of images
const images = [
  'https://a0.muscache.com/im/pictures/miso/Hosting-634092978468676421/original/33702451-a463-4a03-88b4-ccb8f994360a.jpeg?im_w=1200&im_format=avif',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg',
];
</script>


<style scoped>

.image-slider {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ddd;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 16px;
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.card-host {
  font-size: 14px;
  color: #777;
  margin-bottom: 4px;
}

.card-status {
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

/* Custom Navigation Buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background-color: rgba(255, 255, 255, 0.8); /* White with transparency */
  color: #000; /* Black arrow */
  width: 35px;
  height: 35px;
  border-radius: 50%; /* Circular buttons */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background-color: rgba(255, 255, 255, 1); /* Solid white on hover */
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 18px; /* Smaller arrow */
  font-weight: bold;
}

/* Custom Pagination Dots */
:deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* Inactive dot: grayish */
  opacity: 1;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #000; /* Active dot: black */
  width: 10px;
  height: 10px;
  transform: scale(1.2); /* Slightly enlarge active dot */
}
</style>