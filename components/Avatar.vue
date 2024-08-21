<script lang="ts" setup>
type AvatarProps = {
  big?: boolean
  src?: string
}

defineProps<AvatarProps>()
</script>

<template>
  <NuxtImg
    format="webp"
    loading="eager"
    class="rounded-full"
    :src="src || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'"
    :height="big ? '140' : '30'"
    :width="big ? '140' : '30'"
    :alt="'avatar'"
    provider="cloudinary" />
</template>
