import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// Fix: Import the SanityImage type from the shared types file.
import type { SanityImage } from '../types';

// Fix: Use optional chaining to safely access VITE_SANITY_PROJECT_ID from import.meta.env, preventing a TypeError if env is undefined.
const projectId = (import.meta as any).env?.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID';

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export default client;
