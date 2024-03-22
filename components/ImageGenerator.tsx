'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { checkAuth } from '@/lib/auth/utils';

interface GenerateImageResponse {
  imageUrl: string;
}

interface ErrorResponse {
  error: string;
}

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const generateImage = async () => {
    setIsLoading(true);
    setError('');
    console.log('prompt', prompt);
    // check if the user is authenticated
    const authResponse = await fetch('/api/check-auth');
    if (!authResponse.ok) {
      window.location.href = '/sign-up';

      return;
    }

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setImageUrl((data as GenerateImageResponse).imageUrl);
      } else {
        setError((data as ErrorResponse).error);
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        type='text'
        value={prompt}
        onChange={handlePromptChange}
        placeholder='Enter your brand name'
        className='w-full max-w-md px-4 py-3 rounded-md mb-5'
      />
      <Button onClick={generateImage} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Image'}
      </Button>
      {error && <p>{error}</p>}
      {imageUrl && (
        <Image src={imageUrl} alt='Generated' width={500} height={500} />
      )}
    </div>
  );
};

export default ImageGenerator;
