import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-gray-100'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center layout'>
            <h1>Open Graph Generator</h1>

            <ButtonLink variant='light' href='/builder'>
              Link Builder
            </ButtonLink>
          </div>

          <footer className='absolute text-gray-800 bottom-2'>
            © {new Date().getFullYear()} By{' '}
          </footer>
        </section>
      </main>
    </>
  );
}
