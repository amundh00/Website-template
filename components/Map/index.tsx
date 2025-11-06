'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
export const Map = dynamic(
  () => import('./MapComponent').then((mod) => mod.MapComponent),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center bg-gray-100 rounded-lg"
           style={{ height: '400px' }}>
        <p className="text-gray-500">Loading map...</p>
      </div>
    ),
  }
);

