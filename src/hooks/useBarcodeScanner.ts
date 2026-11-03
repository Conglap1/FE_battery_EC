'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom hook to capture rapid keypresses from USB/Bluetooth Barcode Scanners.
 * Barcode scanners typically emit characters with < 50ms interval terminated by 'Enter'.
 */
export function useBarcodeScanner(onScan: (barcode: string) => void) {
  const bufferRef = useRef<string>('');
  const lastKeyTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentTime = Date.now();

      // Reset buffer if delay between keystrokes exceeds 50ms (manual typing vs scanner)
      if (currentTime - lastKeyTimeRef.current > 50) {
        bufferRef.current = '';
      }
      lastKeyTimeRef.current = currentTime;

      if (e.key === 'Enter') {
        if (bufferRef.current.length >= 4) {
          onScan(bufferRef.current);
          bufferRef.current = '';
        }
      } else if (e.key.length === 1) {
        bufferRef.current += e.key;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onScan]);
}
