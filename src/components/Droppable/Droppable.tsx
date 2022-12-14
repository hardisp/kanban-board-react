import { Box } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";

const MyDroppableComponent = () => {
  const { setNodeRef } = useDroppable({
    id: "droppable-1",
  });

  return <Box ref={setNodeRef}> Drop on me! </Box>;
};

export default MyDroppableComponent;
