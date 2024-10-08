<script setup lang="ts">
import { STEPS } from '~/composables/useCreateListing'
import { categories, things, buttons } from '~/data/constants'
import { ref } from 'vue';




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


const selectedButton = ref<string | null>(null);

function toggleSelection(label: string) {
  selectedButton.value = selectedButton.value === label ? null : label;



  const currentStep = ref(STEPS.TYPE); // Default to the first step

  const stepMap = {
    'Type': STEPS.TYPE,
    'Amenities': STEPS.THINGS,
    'Photos': STEPS.IMAGES,
    'Description': STEPS.DESCRIPTION,
    'Hosting': STEPS.INFO,
    'Location': STEPS.LOCATION,
    'Details': STEPS.INFO,
    'Price': STEPS.PRICE,
    'Rooms': STEPS.INFO,
    'Finish up': STEPS.PUBLISH
  };

  function handleStepChange(item: string) {
    currentStep.value = stepMap[item];
  }


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
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;" label="Next"  @click="onNext" />
      </div>
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
          <button v-for="button in buttons" :key="button.label" :class="[
            'flex gap-2.5 justify-center items-center px-5 py-2.5 text-sm font-medium whitespace-nowrap border-2 border-black border-solid bg-neutral-100 rounded-[31px]',
            selectedButton === button.label ? 'bg-black-500 text-white' : ''
          ]" @click="toggleSelection(button.label)">
            <img :src="button.imgSrc" alt=""
              class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
            <span class="self-stretch my-auto">{{ button.label }}</span>
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
    <!----------------------------------------------------------->
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

       
     <Heading title="Please set your price" subTitle="How much do you charge per night?" />
      <Input id="Price" label="Price" type="number" v-model="listingValues.price" :disabled="isLoading"
        :error="errors.price" formatPrice required />
      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button style="background-color: blue;" :disabled="!listingValues.price" label="Next" @click="onNext" />
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


            <video loading="eager" src="/finish.mp4" alt="Illustration representing the finish and publish step"
              class="object-contain self-stretch my-auto aspect-square min-w-[240px] w-[70px] max-md:max-w-full"
              autoplay muted loop>
            </video>
          </article>

        </div>
      </section>

      <div class="flex flex-col gap-4 md:flex-row">
        <Button label="Back" outline @click="onBack" />
        <Button label="Create" @click="createListing" style="background-color: blue;" />
      </div>

    </div>
    <!----------------------------------------------------------->

  </section>

  <NavigationForm :currentStep="currentStep" :onStepChange="handleStepChange" />

</template>
