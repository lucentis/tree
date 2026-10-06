import { defineConfig } from 'vitepress';
import { trees, groupLabels, type TreeGroup } from './trees';

const sidebarGroups = (Object.keys(groupLabels) as TreeGroup[]).map(
  (group) => ({
    text: groupLabels[group],
    items: trees
      .filter((tree) => tree.group === group)
      .map((tree) => ({ text: tree.name, link: `/arbres/${tree.slug}` })),
  }),
);

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'fr-FR',
  title: 'Reconnaître les arbres',
  description: 'Guide pour identifier les arbres les plus courants en France.',
  cleanUrls: true,

  themeConfig: {
    nav: [{ text: 'Arbres', link: '/' }],

    sidebar: {
      '/arbres/': sidebarGroups,
    },

    search: { provider: 'local' },

    docFooter: { prev: 'Précédent', next: 'Suivant' },
    outline: false,
  },
});