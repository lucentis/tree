import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import TreePhotos from '../components/TreePhotos.vue';
import TreeBadges from '../components/TreeBadges.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TreePhotos', TreePhotos);
    app.component('TreeBadges', TreeBadges);
  },
} satisfies Theme;