<template>
  <div>
    <h1>Index Page</h1>
    <NuxtLink to="/demo">Go to Demo Page</NuxtLink>
    <main>
      {{ pending }}
      <a-space>
        <a-button type="primary" @click="() => refresh()">Refresh</a-button>
        <a-button type="primary" @click="() => id++">{{ id }}</a-button>
      </a-space>
    </main>
    <main>
      {{ testData }}

      <div class="box"></div>
      <div class="box-1"></div>
    </main>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({});

useHead({
  title: 'Index Page',
});

const id = ref(0);

const { data, refresh, pending } = await useFetch(`/api/foo`, {
  query: { id },
  server: false,
  immediate: false,
});

const { data: testData } = await useFetch(`/api/test`, {
  method: 'POST',
  body: {
    name: 'Lily',
  },
});

onMounted(() => {});
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  padding: 10px;
  background-origin: content-box;
  background-color: #0e294c;
  background-image: linear-gradient(
      0deg,
      #4cc7f3 2px,
      transparent 2px,
      transparent calc(100% - 2px),
      #4cc7f3 calc(100% - 2px)
    ),
    linear-gradient(0deg, #4cc7f3 2px, transparent 2px, transparent calc(100% - 2px), #4cc7f3 calc(100% - 2px)),
    linear-gradient(90deg, #4cc7f3 2px, transparent 2px, transparent calc(100% - 2px), #4cc7f3 calc(100% - 2px)),
    linear-gradient(90deg, #4cc7f3 2px, transparent 2px, transparent calc(100% - 2px), #4cc7f3 calc(100% - 2px));
  background-repeat: no-repeat;
  background-size: 10px 100%, 10px 100%, 100% 10px, 100% 10px;
  background-position: top left, top right, 0 0, 0 100%;
}

.box-1 {
  margin-top: 10px;
  width: 300px;
  height: 200px;
  padding: 10px;
  background-color: #0e294c;
  background-image: linear-gradient(transparent 19px, rgba(250, 250, 250, 0.1) 20px),
    linear-gradient(90deg, transparent 19px, rgba(250, 250, 250, 0.1) 20px);
  background-size: 20px 20px;
  background-repeat: repeat;
}
</style>
