'use client';

import { useState } from 'react';
import { Map } from '@/components/Map';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { geocodeAddress } from '@/lib/utils/geocoding';

export default function MapExample() {
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [markers, setMarkers] = useState<Array<{ position: [number, number]; popup: string }>>([
    { position: [51.505, -0.09], popup: 'Default Location' },
  ]);

  const handleSearch = async () => {
    if (!address.trim()) return;

    setLoading(true);
    const result = await geocodeAddress(address);

    if (result) {
      const newPosition: [number, number] = [result.lat, result.lon];
      setCenter(newPosition);
      setMarkers([{ position: newPosition, popup: result.display_name }]);
    } else {
      alert('Location not found');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Leaflet Map Example</h1>

        <Card className="mb-6">
          <div className="flex gap-4">
            <Input
              placeholder="Enter an address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button onClick={handleSearch} isLoading={loading}>
              Search
            </Button>
          </div>
        </Card>

        <Card>
          <Map
            center={center}
            zoom={13}
            markers={markers}
            height="600px"
          />
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Map Features:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Interactive map with pan and zoom</li>
            <li>Geocoding address search</li>
            <li>Custom markers with popups</li>
            <li>Dynamic center updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

