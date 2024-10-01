import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Sidebar from '../components/sidebar/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Grid
      templateColumns="full 1fr"
      templateRows="1fr"
      height="100vh"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <Box as="main" p="4" bg="gray.100" ml="450px" minW={'100%'}>
        {children}
      </Box>
    </Grid>
  );
};

export default DashboardLayout;
