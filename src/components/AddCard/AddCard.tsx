import { Box, Button, Flex, Grid, GridItem, Input } from "@chakra-ui/react";
import { useState } from "react";

const AddCard = ({ addCard }: { addCard: (x: string) => void }) => {
  const [title, setTitle] = useState("");
  function _submit(e: any) {
    e.preventDefault();

    addCard(title);
  }

  function onInputChange({ currentTarget: input }: any) {
    setTitle(input.value);
  }
  return (
    <form onSubmit={_submit}>
      <Grid templateColumns={"285px 1fr"}>
        <GridItem>
          <Input name={"title"} onChange={onInputChange} borderRadius={"0"} />
        </GridItem>
        <GridItem>
          <Button
            type="submit"
            bgColor={"green.400"}
            color={"white"}
            borderRadius={0}
          >
            Add card
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};

export default AddCard;
