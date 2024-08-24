<script setup lang="ts">
import { STEPS } from '~/composables/useCreateListing'
import { categories, things } from '~/data/constants'




const {
  listingValues,
  steps,
  isLoading,
  errors,
  onNext,
  onBack,
  add,
  reduce,
  categorySelected,
  locationSelected,
  createListing,
  imagePublicId,
} = useCreateListing()

useSeoMeta({
  title: 'Create Listing',
})


import { ref } from 'vue';

const selectedCategory = ref<string | null>(null);

function toggleSelection(category: string) {
  selectedCategory.value = selectedCategory.value === category ? null : category;
}
const categories = ref([
  { label: 'Modern', imageSrc: 'path-to-modern-image' },
  { label: 'Rustic', imageSrc: 'path-to-rustic-image' },
  { label: 'In Nature', imageSrc: 'path-to-nature-image' },
  { label: 'Memorable', imageSrc: 'path-to-memorable-image' },
  { label: 'Historic', imageSrc: 'path-to-historic-image' },
  { label: 'Romance', imageSrc: 'path-to-romance-image' }
]);

function selectCategory(category: string) {
  selectedCategory.value = category;
}


</script>

<template>
  <section class="relative w-full h-full max-w-2xl px-4 mx-auto my-6 mt-16 md:h-auto lg:h-auto md:px-0">

    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.CATEGORY">
      <Heading title="What type of place will your guests have ?" subTitle="Pick a category" />
      <div class="grid grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
        <CategoryInput v-for="category in categories" :key="category.label"
          :selected="listingValues.category === category.label" @categorySelect="categorySelected"
          :label="category.label" :icon="category.icon" />
      </div>
      <Button style="background-color: blue;" label="Next" :disabled="!listingValues.category" @click="onNext" />
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.THINGS">
      <Heading title="Tell the guest What you have in the place ?" subTitle="Please choose what amenities you have ?" />
      <div class="grid grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2 lg:grid-cols-3">
        <CategoryInput v-for="thing in things" :key="thing.label" :selected="listingValues.category === thing.label"
          @categorySelect="categorySelected" :label="thing.label" :icon="thing.icon" />
      </div>
      <Button style="background-color: blue;" label="Next" :disabled="!listingValues.category" @click="onNext" />
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.IMAGES">
      <Heading title="Add a photo of your place" subTitle="What you have in the place ?" />
      <ClientOnly>
        <ImageUpload v-model="listingValues.imageSrc" @imagePublicId="imagePublicId" />
      </ClientOnly>
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button label="Next" :disabled="!listingValues.imageSrc" @click="onNext" style="background-color: blue;" />
      </div>
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.LOCATION">
      <Heading title="Where is your place located?" subTitle="Help guests find you!" />
      <ClientOnly>
        <CountrySelect :selectedCountry="listingValues?.locationValue" @countrySelect="locationSelected" />
        <Map :center="listingValues?.locationValue?.latlng" />
      </ClientOnly>
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;" :disabled="!listingValues.locationValue" label="Next" @click="onNext" />
      </div>
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.TYPE">
      <Heading title="Choose What type of rental you offer ?" subTitle="What type of rental you offer ?" />

      <section class="flex flex-col w-full max-md:max-w-full">

        <div class="flex flex-wrap gap-4 justify-center items-start w-full max-md:max-w-full">

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 text-sm font-medium whitespace-nowrap border-2 border-black border-solid bg-neutral-100 rounded-[31px]">

            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54337a77c1fdc045d0086739becc265d7301606ee7ddf9bd5ea69b9c29b212ff?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">Modern</span>

          </button>

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 tracking-wide whitespace-nowrap bg-white border border-solid border-zinc-400 rounded-[31px]">

            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/084f5f689a85bef9b1da92a216661d6d4d5e38fb02770142c2205a6443d6eeda?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">Rustic</span>

          </button>

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 tracking-wide bg-white border border-solid border-zinc-400 rounded-[31px]">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83c9d9a14f31a889e1508dfcb205e009f4c16ee62461f6a4d6fbe2d2a7d2ff69?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">In Nature</span>

          </button>

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 tracking-wide whitespace-nowrap bg-white border border-solid border-zinc-400 rounded-[31px]">

            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f48adb8c2ff69fc2f5a72a3b340b6914f927e2bfc7c54b0ca44a1022082762b?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">Memorable</span>

          </button>

        </div>

        <div
          class="flex flex-wrap gap-4 justify-center items-start mt-5 w-full tracking-wide whitespace-nowrap max-md:max-w-full">

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 bg-white border border-solid border-zinc-400 rounded-[31px]">

            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/653f60f2970ba08bb706fd4b229efa95d7afca8e90ca1aa247e585f8650d530c?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">Historic</span>

          </button>

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 bg-white border border-solid border-zinc-400 rounded-[31px]">

            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1f8dbb22941feeba0b173ffc781308fbd48df81647e937b6bc4ab2d76185a38?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">Modern</span>

          </button>

          <button
            class="flex gap-2.5 justify-center items-center px-5 py-2.5 bg-white border border-solid border-zinc-400 rounded-[31px]"
            @click="toggleSelection('Romance')">

            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c4e5dd969da45f52a9e8819250b937cb8b3a66b019f23d3e8f599c71324cfb?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
              alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />

            <span class="self-stretch my-auto">Romance</span>

          </button>

        </div>





      </section>

      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;" :disabled="!listingValues.locationValue" label="Next" @click="onNext" />
      </div>
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.INFO">
      <Heading title="Share some basics about your place" subTitle="What amenities do you have?" />
      <Counter title="Guests" subtitle="How many guests do you allow?" :value="listingValues.guestCount" @add="add"
        @reduce="reduce" />
      <hr />
      <Counter title="Rooms" subtitle="How many rooms do you have?" :value="listingValues.roomCount" @add="add"
        @reduce="reduce" />
      <hr />
      <Counter title="Bathrooms" subtitle="How many bathrooms do you have?" :value="listingValues.bathroomCount"
        @add="add" @reduce="reduce" />
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;" :disabled="!listingValues.guestCount ||
          !listingValues.roomCount ||
          !listingValues.bathroomCount
          " label="Next" @click="onNext" />
      </div>
    </div>

    <!-----------------------------------------------------------
    <div class="flex flex-col gap-8" v-if="steps === STEPS.IMAGES">
      <Heading title="Add a photo of your place" subTitle="Show guests what your place looks like?" />
      <ClientOnly>
        <ImageUpload v-model="listingValues.imageSrc" @imagePublicId="imagePublicId" />
      </ClientOnly>
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button label="Next" :disabled="!listingValues.imageSrc" @click="onNext"
        style="background-color: blue;"
        />
      </div>
    </div>
    --------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.DESCRIPTION">
      <Heading title="How would you describe your place?" subTitle="Short and sweet works best!" />
      <Input id="Title" label="Title" v-model="listingValues.title" :disabled="isLoading" :error="errors.title"
        required />
      <hr />
      <Input id="Description" label="Description" v-model="listingValues.description" :disabled="isLoading"
        :error="errors.description" required />
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;"
          :disabled="!listingValues.description || listingValues.description.length > 400" label="Next"
          @click="onNext" />
      </div>
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.PRICE">
      <Heading title="Now set your price" subTitle="How much do you charge per night?" />
      <Input id="Price" label="Price" type="number" v-model="listingValues.price" :disabled="isLoading"
        :error="errors.price" formatPrice required />
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;"
          :disabled="!listingValues.description || listingValues.description.length > 400" label="Next"
          @click="onNext" />
      </div>
    </div>
    <!----------------------------------------------------------->
    <div class="flex flex-col gap-8" v-if="steps === STEPS.PUBLISH">

      <section class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">

          <article class="flex flex-col self-stretch my-auto min-w-[240px] w-[342px]">

            <header class="flex flex-col w-full">

              <h2 class="text-sm font-bold leading-none text-neutral-500">Step 3</h2>

              <h1 class="mt-4 text-4xl font-semibold leading-[50px] text-slate-800">

                Finish up and publish

              </h1>

            </header>

            <p class="mt-16 text-lg text-black max-md:mt-10">
              Finally, you'll choose booking settings...
            </p>

          </article>

          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf928fccc10357725808b128cacc24911c83195602ef8a7f59c24b59bb7d23b0?placeholderIfAbsent=true&apiKey=cefca70c5e3e4c30aa4a14ad34b27ffa"
            alt="Illustration representing the finish and publish step"
            class="object-contain self-stretch my-auto aspect-square min-w-[240px] w-[70px] max-md:max-w-full" />

        </div>



      </section>
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button :disabled="!listingValues.price" label="Create" @click="createListing"
          style="background-color: blue;" />

      </div>
    </div>
    <!----------------------------------------------------------->

  </section>

  <NavigationForm :currentStepLabel="STEPS" />


</template>
