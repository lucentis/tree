<script setup lang="ts">
import { reactive } from 'vue';
import { useData, withBase } from 'vitepress';
import { trees, groupLabels, type TreeGroup } from '../trees';

const { site } = useData();

const groups = (Object.keys(groupLabels) as TreeGroup[]).map((key) => ({
  key,
  label: groupLabels[key],
  trees: trees.filter((tree) => tree.group === key),
}));

const missingImages = reactive(new Set<string>());
</script>

<template>
  <div class="tree-grid">
    <header>
      <h1>{{ site.title }}</h1>
      <p>{{ site.description }}</p>
    </header>

    <section v-for="group in groups" :key="group.key">
      <h2>{{ group.label }}</h2>
      <ul>
        <li v-for="tree in group.trees" :key="tree.slug">
          <a :href="withBase(`/arbres/${tree.slug}`)">
            <div class="thumb">
              <img
                v-if="!missingImages.has(tree.slug)"
                :src="withBase(`/trees/${tree.slug}/tree.jpg`)"
                :alt="tree.name"
                loading="lazy"
                @error="missingImages.add(tree.slug)"
              />
            </div>
            <span>{{ tree.name }}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.tree-grid {
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}

header {
  margin-bottom: 40px;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
}

header p {
  margin-top: 8px;
  color: var(--vp-c-text-2);
}

h2 {
  margin: 32px 0 16px;
  font-size: 1.25rem;
  font-weight: 600;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  display: block;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.2s;
}

a:hover {
  border-color: var(--vp-c-brand-1);
}

.thumb {
  aspect-ratio: 4 / 3;
  background: var(--vp-c-bg-soft);
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  display: block;
  padding: 10px 12px;
  font-weight: 500;
}
</style>