import type { CollectionEntry } from 'astro:content';

export type ProductEntry = CollectionEntry<'products'>;      // Entrada completa
export type Product = ProductEntry['data'];                  // Solo los datos
