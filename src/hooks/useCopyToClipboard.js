import { useCallback, useEffect, useRef, useState } from 'react';

export const useCopyToClipboard = (resetDelay = 2000) => {
  const [copiedKey, setCopiedKey] = useState('');
  const resetTimeoutRef = useRef(null);

  const copy = useCallback(async (text, key) => {
    await navigator.clipboard.writeText(text);

    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    setCopiedKey(key);
    resetTimeoutRef.current = window.setTimeout(() => {
      setCopiedKey('');
      resetTimeoutRef.current = null;
    }, resetDelay);
  }, [resetDelay]);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return { copiedKey, copy };
};
