
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient, { urlFor } from '../services/sanity';
import { type Product } from '../types';

const query = `*[_type == "product" && slug.current == $slug][0]`;

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    sanityClient.fetch<Product>(query, { slug })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading project...</div>;
  if (!product) return <div className="text-center py-20">Project not found.</div>;

  const imageUrl = product.mainImage ? urlFor(product.mainImage).width(1200).url() : '';

  return (
    <>
      <title>{`${product.title} | Nion’s Imagination`}</title>
      <meta name="description" content={product.shortDescription} />
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.title}</h1>
            <p className="text-xl text-gray-400">{product.shortDescription}</p>
        </header>
        
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={product.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
          />
        )}
        
        <div className="prose prose-invert lg:prose-xl mx-auto text-gray-300">
          {product.body && product.body.map((block) => (
            <p key={block._key}>
              {block.children.map(span => span.text).join('')}
            </p>
          ))}
        </div>

        {product.productUrl && (
          <div className="text-center mt-12">
            <a 
              href={product.productUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-500 transition-colors duration-300"
            >
              Visit Product
            </a>
          </div>
        )}
      </article>
    </>
  );
}
