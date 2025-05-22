import { Provider } from "@/components/ui/provider";
import { Heading, Highlight, Flex, Box, Image} from "@chakra-ui/react";
import 'animate.css';

export const metadata = {
  title: "GRH",
  description: "Game rate hub where we only care about rates",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/grhicon.png" type="image/png" />
      </head>
      <body>
      <Provider>
        <Flex direction="column" align="center" minH="auto" py={{ base: 12, md: 24 }}>
          <Box className="animate__animated animate__fadeInDown">
            <Heading size="6xl" fontWeight="bold" colorPalette={{ color: "#FFFFFF" }} fontSize="150px">
              <Highlight query="Kings…" styles={{ color: "#38A169" }}>
                The Top 3 Kings…
              </Highlight>
            </Heading>
            <Image
            position="absolute"
            top="4%"  
            left="88%" 
            transform="translate(-50%, -50%) rotate(0deg)"
            src="/crown.svg"
            maxW="70px"  
          />
          </Box>
        </Flex>
          {children}
        </Provider>
      </body>
    </html>
  );
}
