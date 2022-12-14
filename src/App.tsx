import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { KanbanBoard } from "@app/components/KanbanBoard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box px={"4rem"}>
      <KanbanBoard />
    </Box>
  </ChakraProvider>
);
