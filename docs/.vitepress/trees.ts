export type TreeGroup = 'broadleaf' | 'conifer';

export interface Tree {
  slug: string;
  name: string;
  group: TreeGroup;
}

export const groupLabels: Record<TreeGroup, string> = {
  broadleaf: 'Feuillus',
  conifer: 'Résineux',
};

const entries: Tree[] = [
  { slug: 'aulne', name: 'Aulne', group: 'broadleaf' },
  { slug: 'bouleau', name: 'Bouleau', group: 'broadleaf' },
  { slug: 'charme', name: 'Charme', group: 'broadleaf' },
  { slug: 'chataignier', name: 'Châtaignier', group: 'broadleaf' },
  { slug: 'chene', name: 'Chêne', group: 'broadleaf' },
  { slug: 'erable', name: 'Érable', group: 'broadleaf' },
  { slug: 'frene', name: 'Frêne', group: 'broadleaf' },
  { slug: 'hetre', name: 'Hêtre', group: 'broadleaf' },
  { slug: 'marronnier', name: 'Marronnier', group: 'broadleaf' },
  { slug: 'noisetier', name: 'Noisetier', group: 'broadleaf' },
  { slug: 'noyer', name: 'Noyer', group: 'broadleaf' },
  { slug: 'peuplier', name: 'Peuplier', group: 'broadleaf' },
  { slug: 'platane', name: 'Platane', group: 'broadleaf' },
  { slug: 'saule', name: 'Saule', group: 'broadleaf' },
  { slug: 'tilleul', name: 'Tilleul', group: 'broadleaf' },
  { slug: 'cedre', name: 'Cèdre', group: 'conifer' },
  { slug: 'epicea', name: 'Épicéa', group: 'conifer' },
  { slug: 'meleze', name: 'Mélèze', group: 'conifer' },
  { slug: 'pin', name: 'Pin', group: 'conifer' },
  { slug: 'sapin', name: 'Sapin', group: 'conifer' },
];

export const trees: Tree[] = [...entries].sort((a, b) =>
  a.name.localeCompare(b.name, 'fr'),
);