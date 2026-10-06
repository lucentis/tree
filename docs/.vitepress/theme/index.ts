import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import TreePhotos from '../components/TreePhotos.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TreePhotos', TreePhotos);
  },
} satisfies Theme;