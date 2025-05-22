'use client';
import { Grid, GridItem, Badge, Box, Card, HStack, Image, Flex, Table, Heading, 
  Highlight, Stat, Stack, Separator, FormatNumber} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getThreeTopGamesSteam, getRemainGamesSteam } from '@/lib/getMostPlayedGames';

export default function Home() {
  const [games, setGames] = useState([]);
  const [remainGames, setRemainGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const threeTopGames = await getThreeTopGamesSteam();
      setGames(threeTopGames);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const remainGames = await getRemainGamesSteam();
      setRemainGames(remainGames);
    }
    fetchData();
  }, []);


  return (
  <Flex direction="column" align="center" minH="auto" px={4} py={{ base: 4, md: 8 }}>
    <Box className="animate__animated animate__fadeInDown animate__delay-2s">
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={2} alignItems="center">
        <GridItem rowSpan={2} colSpan={3} position="relative">
        <Image
          position="absolute"
          top="0px"
          left="0%"
          transform="translate(0, 0)"
          src="/first_place.svg"
          maxW="100px"
          zIndex="1"
        />
          <Card.Root flexDirection="row" overflow="hidden" maxW="900px" h="590px">
            <Image
              objectFit="cover"
              maxW="500px"
              src={`https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${games[0]?.appid}/capsule_616x353.jpg`} 
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">{games[0]?.name}</Card.Title>
                <Card.Description>
                  {games[0]?.description}
                </Card.Description>
                <Stack>
                <Separator />
                  <Stat.Root>
                    <Stat.Label>Peak Players</Stat.Label>
                    <Stat.ValueText>
                    <FormatNumber value={games[0]?.peak_in_game} />
                    </Stat.ValueText>
                  </Stat.Root>
                  <Separator />
                  <Stat.Root>
                    <Stat.Label>Release Date</Stat.Label>
                    <Stat.ValueText>
                      {games[0]?.release_date}
                    </Stat.ValueText>
                  </Stat.Root>
                  <Separator />
                  <Stat.Root>
                    <Stat.Label>Review Score and Opinions</Stat.Label>
                    <Stat.ValueText>
                      {games[0]?.rating}
                      <Separator orientation="vertical" height="9" size="lg" />
                      {games[0]?.score_label}
                    </Stat.ValueText>
                  </Stat.Root>
                </Stack>
              </Card.Body>
            </Box>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={2} position="relative">
        <Image
          position="absolute"
          top="0px"
          left="0%"
          transform="translate(0, 0)"
          src="/second_place.svg"
          maxW="45px"
          zIndex="1"
        />
          <Card.Root flexDirection="row" overflow="hidden" maxH="xl" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src={`https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${games[1]?.appid}/capsule_616x353.jpg`} 
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">{games[1]?.name}</Card.Title>
                <Card.Description>
                  {games[1]?.description}
                </Card.Description>
                <Stack>
                <Separator />
                  <Stat.Root>
                    <Stat.Label>Peak Players</Stat.Label>
                    <Stat.ValueText>
                    <FormatNumber value={games[1]?.peak_in_game} />
                    </Stat.ValueText>
                  </Stat.Root>
                  <Separator />
                  <Stat.Root>
                    <Stat.Label>Release Date</Stat.Label>
                    <Stat.ValueText>
                      {games[1]?.release_date}
                    </Stat.ValueText>
                  </Stat.Root>
                  <Separator />
                  <Stat.Root>
                    <Stat.Label>Review Score and Opinions</Stat.Label>
                    <Stat.ValueText>
                      {games[1]?.rating}
                      <Separator orientation="vertical" height="9" size="lg" />
                      {games[1]?.score_label}
                    </Stat.ValueText>
                  </Stat.Root>
                </Stack>
              </Card.Body>
            </Box>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={2} position="relative">
        <Image
          position="absolute"
          top="0px"
          left="0%"
          transform="translate(0, 0)"
          src="/third_place.svg"
          maxW="45px"
          zIndex="1"
        />
          <Card.Root flexDirection="row" overflow="hidden" maxH="xl" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src={`https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${games[2]?.appid}/capsule_616x353.jpg`} 

            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">{games[2]?.name}</Card.Title>
                <Card.Description>
                  {games[2]?.description}
                </Card.Description>
                <Stack>
                <Separator />
                  <Stat.Root>
                    <Stat.Label>Peak Players</Stat.Label>
                    <Stat.ValueText>
                    <FormatNumber value={games[2]?.peak_in_game} />
                    </Stat.ValueText>
                  </Stat.Root>
                  <Separator />
                  <Stat.Root>
                    <Stat.Label>Release Date</Stat.Label>
                    <Stat.ValueText>
                      {games[2]?.release_date}
                    </Stat.ValueText>
                  </Stat.Root>
                  <Separator />
                  <Stat.Root>
                    <Stat.Label>Review Score and Opinions</Stat.Label>
                    <Stat.ValueText>
                      {games[2]?.rating}
                      <Separator orientation="vertical" height="9" size="lg" />
                      {games[2]?.score_label}
                    </Stat.ValueText>
                  </Stat.Root>
                </Stack>
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
            <Table.ColumnHeader>Steam Rate</Table.ColumnHeader>
            <Table.ColumnHeader>Release Date</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {remainGames.map((remainGame) => (
            <Table.Row key={remainGame.appid}>
              <Table.Cell>{remainGame.rank}</Table.Cell>
              <Table.Cell>{remainGame.name}</Table.Cell>
              <Table.Cell>{remainGame.rating}</Table.Cell>
              <Table.Cell>{remainGame.release_date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  </Flex>
  );
}
