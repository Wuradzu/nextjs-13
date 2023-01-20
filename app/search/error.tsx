'use client'
// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useEffect } from 'react';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}