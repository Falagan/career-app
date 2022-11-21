import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const config = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'gray',
  }),
);

export const themeChakra = extendTheme(config);
