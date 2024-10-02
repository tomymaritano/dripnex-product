import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack, Text } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';  // Usamos el icono de Google
import { useNavigate } from 'react-router-dom';  // Para navegar entre páginas

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('Intentando iniciar sesión con Google');
    // Aquí iría la lógica para redirigir al usuario o autenticar más adelante
    navigate('/dashboard'); // Simulación de redirección
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        p={10}
        borderRadius="xl"
        w={{ base: '90%', md: '400px' }}
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login to Unicoin
        </Heading>

        <VStack spacing={4} mb={4}>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
        </VStack>

        <Button colorScheme="blue" width="full" mb={4}>
          Login
        </Button>

        {/* Botón de Google */}
        <Button
          leftIcon={<FaGoogle />}  // Icono de Google
          colorScheme="red"
          variant="outline"
          width="full"
          onClick={handleGoogleLogin}  // Evento simulado
        >
          Login with Google
        </Button>

        <Text mt={4} textAlign="center" fontSize="sm">
          Don't have an account? <Button variant="link" colorScheme="blue">Sign up</Button>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
