<template>
  <div class="flex">
    <a href="https://github.com/LittleFoxCompany/usemods" class="flex h-8 items-center gap-2 rounded-lg border border-gray-200 px-2 dark:border-white/20">
      <Icon name="fa6-brands:github" class="h-4 w-4 dark:text-white" />
      <span v-if="data?.stargazers_count" class="text-sm">
        {{ formatNumber(data?.stargazers_count, false) }}
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
  const data = await useFetch('https://api.github.com/repos/LittleFoxCompany/usemods', {
    method: 'GET',
    immediate: true
  })
</script>
