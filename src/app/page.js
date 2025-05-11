import { Grid, GridItem, Badge, Box, Card, HStack, Image, Flex, Table, Heading, Highlight} from '@chakra-ui/react';

export default function Home() {
  return (
  <Flex direction="column" align="center" minH="auto" px={4} py={{ base: 4, md: 8 }}>
    <Box className="animate__animated animate__fadeInDown animate__delay-2s">
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={2} alignItems="center">
        <GridItem rowSpan={2} colSpan={3}>
          <Card.Root flexDirection="row" overflow="hidden" maxH="xl" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">The perfect latte</Card.Title>
                <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Hot</Badge>
                  <Badge>Caffeine</Badge>
                </HStack>
              </Card.Body>
            </Box>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={2}>
          <Card.Root flexDirection="row" overflow="hidden" maxH="xl" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">The perfect latte</Card.Title>
                <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Hot</Badge>
                  <Badge>Caffeine</Badge>
                </HStack>
              </Card.Body>
            </Box>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={2}>
          <Card.Root flexDirection="row" overflow="hidden" maxH="xl" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">The perfect latte</Card.Title>
                <Card.Description>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Hot</Badge>
                  <Badge>Caffeine</Badge>
                </HStack>
              </Card.Body>

            </Box>
          </Card.Root>
        </GridItem>
      </Grid>
    </Box>
    <Box mt="150px" className="animate__animated animate__fadeInDown animate__delay-2s">
      <Heading size="6xl" fontWeight="bold" colorPalette={{ color: "#FFFFFF" }} fontSize="125px">
      <Highlight query="47" styles={{ color: "#38A169" }}>
        and 47 Challengers
      </Highlight>
      </Heading>
    </Box>
    <Box mt="100px" width="1000px" className="animate__animated animate__fadeInDown animate__delay-2s">
      <Table.Root interactive variant="outline" fontSize="lg">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Rank</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Steam Score</Table.ColumnHeader>
            <Table.ColumnHeader>GRH Score</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>Counter Strike</Table.Cell>
              <Table.Cell>Overwhelming positives</Table.Cell>
              <Table.Cell>Postive</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>Dota 2</Table.Cell>
              <Table.Cell>Overwhelming positives</Table.Cell>
              <Table.Cell>Never Played</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>6</Table.Cell>
              <Table.Cell>Counter Strike</Table.Cell>
              <Table.Cell>Overwhelming positives</Table.Cell>
              <Table.Cell>Postive</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Box>
  </Flex>
  );
}
