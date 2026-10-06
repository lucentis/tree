<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { trees } from '../trees';

const props = defineProps<{ slug: string }>();

const name = computed(
  () => trees.find((tree) => tree.slug === props.slug)?.name ?? props.slug,
);

const photos = [
  { kind: 'leaf', label: 'feuille' },
  { kind: 'bark', label: 'écorce' },
  { kind: 'fruit', label: 'fruit' },
];
</script>

<template>
  <div class="tree-photos">
    <img
      v-for="photo in photos"
      :key="photo.kind"
      :src="withBase(`/trees/${slug}/${photo.kind}.jpg`)"
      :alt="`${name} : ${photo.label}`"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.tree-photos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 16px 0;
}

img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

@media (min-width: 640px) {
  .tree-photos {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}
</style>