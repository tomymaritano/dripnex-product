import React from 'react';
import { Heading, Text, Box, Button, Image, VStack } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box
      maxW="700px"
      mx="auto"
      p={8}
    >
      {/* Sección del encabezado principal */}
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Unicoin
      </Heading>
      <Text fontSize="lg" mb={6}>
        Your gateway to the future of decentralized finance.
      </Text>

      {/* Imagen central */}
      <Image
        src="https://images.unsplash.com/photo-1725203574073-79922f64110a?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cryptocurrency"
        borderRadius="lg"
        mb={8}
        boxShadow="lg"
      />

      {/* Botón de acción */}
      <Button colorScheme="blue" size="lg" mb={8}>
        Get Started
      </Button>

      {/* Sección de información adicional */}
      <VStack spacing={6} alignItems="center">
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Why Choose Unicoin?
          </Heading>
          <Text maxW="600px">
            Unicoin offers a secure, decentralized platform for managing your investments.
            Explore the world of cryptocurrency with confidence and start building your future today.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Features
          </Heading>
          <Text maxW="600px">
            - Decentralized finance made simple<br />
            - Low transaction fees<br />
            - Secure, scalable, and fast
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
