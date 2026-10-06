<script setup lang="ts">
import { computed } from 'vue';
import { trees, groupLabels } from '../trees';

const props = defineProps<{ slug: string; fruit?: string }>();

const group = computed(() => {
  const tree = trees.find((item) => item.slug === props.slug);
  return tree ? groupLabels[tree.group] : null;
});
</script>

<template>
  <div class="tree-badges">
    <span v-if="group" class="group">{{ group }}</span>
    <span v-if="fruit" class="fruit">Fruit : {{ fruit }}</span>
  </div>
</template>

<style scoped>
.tree-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 16px;
}

span {
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 20px;
}

.group {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.fruit {
  background: color-mix(in srgb, var(--organ-fruit) 14%, transparent);
  color: var(--organ-fruit);
}
</style>