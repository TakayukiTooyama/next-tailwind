import { CacheProvider } from '@emotion/react';
import { createEmotionCache, MantineProvider } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const cache = createEmotionCache({ key: 'my' });
cache.compat = true;

const MantineEmotionProvider: FC<Props> = ({ children }) => {
  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache}>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
};

export default MantineEmotionProvider;
