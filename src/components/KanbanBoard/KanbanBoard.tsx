import { DndContext, rectIntersection } from "@dnd-kit/core";
// import AddCard from "./AddCard";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { TypeCard } from "@app/types/TypeCard";
import { KanbanLane } from "@app/components/KanbanLane";
import { AddCard } from "@app/components/AddCard";
export default function KanbanBoard() {
  const [todoItems, setTodoItems] = useState<Array<TypeCard>>([]);
  const [doneItems, setDoneItems] = useState<Array<TypeCard>>([]);
  const [inProgressItems, setInProgressItems] = useState<Array<TypeCard>>([]);
  const [uItems, setuItems] = useState<Array<TypeCard>>([]);
  const addNewCard = (title: string) => {
    setuItems([...uItems, { title }]);
  };
  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "ToDo";
        if (container === "ToDo") {
          setTodoItems([...todoItems, { title }]);
        } else if (container === "Done") {
          setDoneItems([...doneItems, { title }]);
        } else if (container === "Unassigned") {
          setuItems([...uItems, { title }]);
        } else {
          setInProgressItems([...inProgressItems, { title }]);
        }
        if (parent === "ToDo") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
        } else if (parent === "Unassigned") {
          setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
        }
      }}
    >
      <Flex flexDir="column" my={"5rem"}>
        <Box pb={"2rem"}>
          <AddCard addCard={addNewCard} />
        </Box>
        <Box>
          <Flex overflowX={"auto"} mx={-2}>
            <Box flex={"0 0 380px"} px={2}>
              <KanbanLane title="Backlog" items={uItems} />
            </Box>
            <Box flex={"0 0 380px"} px={2}>
              <KanbanLane title="ToDo" items={todoItems} />
            </Box>
            <Box flex={"0 0 380px"} px={2}>
              <KanbanLane title="In Progress" items={inProgressItems} />
            </Box>
            <Box flex={"0 0 380px"} px={2}>
              <KanbanLane title="Done" items={doneItems} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </DndContext>
  );
}
