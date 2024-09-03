<script lang="ts" setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main style="padding-top: 0;" class="flex-1 pt-12 pb-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
