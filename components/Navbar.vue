<template>
  <section class="z-10 w-full  shadow-sm">
    <Container>
      <nav class="flex flex-col w-full">
        <div
          class="flex flex-wrap justify-between items-center px-6 py-4 w-full bg-white border-opacity-40 shadow-[0px_1px_1px_rgba(0,0,0,0.13)]">

          <!-- Logo -->
          <div class="flex items-center py-2 w-8 md:w-10 lg:w-12">
            <a href="/">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d94eb955a9911f127502f228d4b5bd9c7d8dfc5042ed9c3733608221b0d7c07?placeholderIfAbsent=true&apiKey=5b20c0d534a34f0091744edaaeed1afd"
                alt="Company Logo" class="object-contain w-full aspect-square" />
            </a>
          </div>

          <!-- Navigation Links -->
          <nav class="nav-container">
  <a href="#" class="nav-link">Domů</a>
  <a href="#" class="nav-link">Přehled nabídky</a>
  <a href="#" class="nav-link">O nás</a>
</nav>


          <!-- User Options -->
          <div class="flex gap-2 items-center py-2 text-sm text-blue-600 rounded-full">
            <!-- Dropdown Menu -->
            <div class="relative">
              <button @click="toggleDropdown" class="focus:outline-none">
                <img src="/cz.svg" alt="User Icon" class="w-8 h-8 object-contain" />
              </button>
              <transition name="fade" mode="out-in">
                <ul v-if="dropdownOpen"
                  class="dropdown absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                  <li v-for="(flag, index) in flags" :key="index"
                    class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer">
                    <img :src="flag.src" :alt="flag.alt" class="w-6 h-6 object-contain" />
                    {{ flag.label }}
                  </li>
                </ul>
              </transition>
            </div>

            <!-- User Menu Component -->
            <NavUserMenu />
          </div>
        </div>
      </nav>
    </Container>

    <!-- Categories Section -->
    <Categories />
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import UserMenu from './nav/UserMenu.vue';
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}


export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      showNavSearch: false, // Track whether NavSearch is displayed
    };
  },

});


const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

const flags = [
  { src: '/cz.svg', alt: 'Czech Flag', label: 'Czech Republic' },
  { src: '/us.svg', alt: 'US Flag', label: 'United States' },
  { src: '/fr.svg', alt: 'France Flag', label: 'France' },
  { src: '/de.svg', alt: 'Germany Flag', label: 'Germany' },
  { src: '/it.svg', alt: 'Italy Flag', label: 'Italy' }
];

</script>

<style scoped>

/* Base styles for desktop */
.nav-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adjust gap as needed */
  align-items: center;
  padding: 0 1rem; /* Adjust padding as needed */
  font-size: 0.875rem; /* Adjust font size as needed */
  font-weight: 600;
  color: black;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem; /* Adjust padding as needed */
  text-decoration: none;
}

/* Mobile styles */
@media (max-width: 767px) {
  .nav-container {
    flex-direction: column;
    gap: 0.5rem; /* Adjust gap as needed */
    padding: 0 0.5rem; /* Adjust padding as needed */
  }

  .nav-link {
    text-align: center;
    padding: 0.5rem 0; /* Adjust padding as needed */
  }
}

.menu {
  position: relative;
  display: inline-block;
}

.dropdown {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none;
  /* Hidden by default */
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.menu:hover .dropdown {
  display: block;
  /* Show dropdown on hover */
}

.dropdown li {
  padding: 8px 16px;
}

.dropdown li a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}

.dropdown li a:hover {
  background-color: #f1f1f1;
}
</style>