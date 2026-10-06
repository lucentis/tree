<script setup lang="ts">
import { computed, ref } from 'vue';
import { withBase } from 'vitepress';
import { trees } from '../trees';

interface Photo {
  kind: string;
  label: string;
}

const props = defineProps<{ slug: string }>();

const name = computed(
  () => trees.find((tree) => tree.slug === props.slug)?.name ?? props.slug,
);

const photos: Photo[] = [
  { kind: 'leaf', label: 'feuille' },
  { kind: 'bark', label: 'écorce' },
  { kind: 'fruit', label: 'fruit' },
];

const dialog = ref<HTMLDialogElement | null>(null);
const active = ref<Photo | null>(null);

const src = (photo: Photo) =>
  withBase(`/trees/${props.slug}/${photo.kind}.jpg`);
const alt = (photo: Photo) => `${name.value} : ${photo.label}`;

function open(photo: Photo) {
  active.value = photo;
  dialog.value?.showModal();
}

function close() {
  dialog.value?.close();
}

function onDialogClick(event: MouseEvent) {
  if (event.target === dialog.value) close();
}
</script>

<template>
  <div class="tree-photos">
    <button
      v-for="photo in photos"
      :key="photo.kind"
      type="button"
      class="thumb"
      :aria-label="`Agrandir : ${alt(photo)}`"
      @click="open(photo)"
    >
      <img :src="src(photo)" :alt="alt(photo)" loading="lazy" />
    </button>
  </div>

  <dialog ref="dialog" @click="onDialogClick" @close="active = null">
    <figure v-if="active">
      <img class="large" :src="src(active)" :alt="alt(active)" />
      <figcaption>{{ alt(active) }}</figcaption>
      <button type="button" class="close" aria-label="Fermer" @click="close">
        &times;
      </button>
    </figure>
  </dialog>
</template>

<style scoped>
.tree-photos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 16px 0;
}

.thumb {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: none;
  cursor: zoom-in;
  overflow: hidden;
}

.thumb img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: var(--vp-c-bg-soft);
}

dialog {
  margin: auto;
  max-width: none;
  max-height: none;
  padding: 0;
  border: 0;
  background: transparent;
  overflow: visible;
}

dialog::backdrop {
  background: rgb(0 0 0 / 0.75);
}

figure {
  position: relative;
  margin: 0;
}

.large {
  display: block;
  max-width: min(94vw, 1100px);
  max-height: 85vh;
  border-radius: 8px;
}

figcaption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 8px 12px;
  border-radius: 0 0 8px 8px;
  background: rgb(0 0 0 / 0.55);
  color: #fff;
  font-size: 0.875rem;
}

.close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgb(0 0 0 / 0.55);
  color: #fff;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
}

@media (min-width: 640px) {
  .tree-photos {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}
</style>