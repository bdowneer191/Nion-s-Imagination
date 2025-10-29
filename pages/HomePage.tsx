
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../services/sanity';
import { Scene } from '../components/Scene';
import { type Product } from '../types';

const query = `*[_type == "product"]{
  _id,
  title, 
  slug, 
  shortDescription, 
  "imageUrl": mainImage.asset->url
}`;

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch<Product[]>(query)
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Nion’s Imagination
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          A collection of digital creations, blending code and design.
        </p>
        <Scene />
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Creations</h2>
        {loading ? (
          <p className="text-center">Loading creations...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <li key={product._id} className="list-none bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105">
                <Link to={`/product/${product.slug.current}`} className="block">
                  <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{product.title}</h3>
                    <p className="mt-2 text-gray-400">{product.shortDescription}</p>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
