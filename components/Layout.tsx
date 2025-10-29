
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import sanityClient from '../services/sanity';
import { type SiteSettings } from '../types';

export default function Layout() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    sanityClient.fetch<SiteSettings>(`*[_type == "siteSettings"][0]`)
      .then(setSettings)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {settings && (
        <>
          <title>{settings.siteTitle}</title>
          <meta name="description" content={settings.siteDescription} />
          {settings.analyticsHeadCode && <script>{settings.analyticsHeadCode}</script>}
          {settings.analyticsBodyCode && <script dangerouslySetInnerHTML={{ __html: `
            (function() {
              var script = document.createElement('script');
              script.innerHTML = \`${settings.analyticsBodyCode}\`;
              document.body.insertBefore(script, document.body.firstChild);
            })();
          `}} />}
        </>
      )}
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
