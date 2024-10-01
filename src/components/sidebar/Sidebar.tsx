import React from 'react';
import { VStack, Box, Image, Divider } from '@chakra-ui/react';
import { FaHome, FaUsers, FaCog, FaChartBar, FaMoneyBill } from 'react-icons/fa';
import CustomLink from '../customlink/CustomLink';
import logo from '../../assets/logo-unicoin.png'

const Sidebar: React.FC = () => {
  return (
    <Box
      as="aside"
      bg="#080A0C"
      color="white"
      w="450px"
      minH="100vh"
      p={4}
    >
      {/* Logo en la parte superior */}
      <Box mb={8} textAlign="center">
        <Image
          src={logo} // Reemplaza esto con la ruta de tu logo
          alt="Unicoin Logo"
          mb={4}
        />

      </Box>
    <Divider w={'90%'} m={4} />
      <VStack align="start" spacing={4}>
        <CustomLink to="/dashboard" icon={FaHome} label="Dashboard" />
        <CustomLink to="/users" icon={FaUsers} label="Users" />
        <Divider w={'90%'} m={4} />
        <CustomLink to="/settings" icon={FaCog} label="Settings" />
        <CustomLink to="/reports" icon={FaChartBar} label="Reports" />
        <CustomLink to="/transactions" icon={FaMoneyBill} label="Transactions" />
      </VStack>
    </Box>
  );
};

export default Sidebar;
