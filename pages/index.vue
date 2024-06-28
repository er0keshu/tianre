<template lang="pug">
a-row(:gutter="[16, 16]")
  a-col(:span="6")
    a-card(title="Welcome" size="small")
      a-space(:size="20")
        NuxtLink(to="/demo") Demo Page
        NuxtLink(to="/demo/foo") Foo Page

  a-col(:span="6")
    a-card(title="Request" size="small")
      a-upload(:beforeUpload="beforeUpload" :show-file-list="false")
        a-button(type="primary") Click to upload
        pre {{ JSON.stringify(state.fileResult, null, 2) }}
</template>

<script lang="ts" setup>
definePageMeta({});

useHead({
  title: 'Index Page',
});

const state = reactive({
  count: 0,
  fileResult: {
    name: '',
    size: 0,
  },
});

async function beforeUpload(file: File) {
  const formData = new FormData();
  formData.append('msg', 'hello');
  formData.append('file', file, file.name);
  const res = await $fetch('/api/upload', { method: 'POST', body: formData });
  state.fileResult.name = res.name!;

  return false;
}
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
