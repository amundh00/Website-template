'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import { FileUpload } from '@/components/ui/FileUpload';

export default function ComponentsExample() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">UI Components Example</h1>

        {/* Buttons */}
        <Card title="Buttons">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Small Primary
            </Button>
            <Button variant="primary" size="md">
              Medium Primary
            </Button>
            <Button variant="primary" size="lg">
              Large Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="danger">Danger</Button>
            <Button isLoading={loading} onClick={handleButtonClick}>
              {loading ? 'Loading...' : 'Click Me'}
            </Button>
          </div>
        </Card>

        {/* Inputs */}
        <Card title="Input Fields">
          <div className="space-y-4">
            <Input
              label="Text Input"
              placeholder="Enter text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="This is a helper text"
            />
            <Input
              label="Email Input"
              type="email"
              placeholder="email@example.com"
              error="This field is required"
            />
            <Input
              label="Disabled Input"
              placeholder="Cannot edit"
              disabled
            />
          </div>
        </Card>

        {/* Textarea */}
        <Card title="Textarea">
          <Textarea
            label="Message"
            placeholder="Enter your message..."
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            rows={4}
            helperText="Maximum 500 characters"
          />
        </Card>

        {/* File Upload */}
        <Card title="File Upload">
          <FileUpload
            onFileSelect={(file) => {
              setSelectedFile(file);
              console.log('File selected:', file);
            }}
            accept="image/*"
            maxSize={5 * 1024 * 1024}
          />
          {selectedFile && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
            </div>
          )}
        </Card>

        {/* Cards with different layouts */}
        <Card
          title="Card with Footer"
          footer={
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Last updated: Today</span>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          }
        >
          <p className="text-gray-700">
            This is a card component with a title, content, and footer section.
            Cards are great for organizing related content and actions.
          </p>
        </Card>
      </div>
    </div>
  );
}

