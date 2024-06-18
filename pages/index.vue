<template>
  <div>
    <h1>Index Page</h1>
    <NuxtLink to="/posts">Go to Posts Page</NuxtLink>
    <NuxtLink to="/posts/1">Go to Posts 1</NuxtLink>
    <main>
      <a-button type="primary" @click="() => refresh()">Refresh</a-button>
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Index Page',
});

const id = ref(0);

const { data, refresh } = useFetch(`/api/foo?id=${id.value}`, { lazy: true });
</script>

<style></style>
