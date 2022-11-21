import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { themeChakra } from '../assets/themes/chakra-theme';
import { LayoutStateProvider } from './layout/state/layout.state';
import { Router } from './router';
import { queryClient } from './tools/react-query-tools';

function App() {
  return (
    <LayoutStateProvider>
      <ChakraProvider theme={themeChakra}>
        <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </LayoutStateProvider>
  );
}

export default App;
