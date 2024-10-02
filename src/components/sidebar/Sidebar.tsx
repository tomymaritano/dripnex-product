import React from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import { FaHome, FaUsers, FaCog, FaChartBar, FaMoneyBill } from 'react-icons/fa';
import CustomMenu from '../custommenu/CustomMenu';
import Logo from '../../assets/logo-unicoin.png';

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      icon: FaHome,
      label: "Home",
      items: [{ label: "Overview", to: "/" }, { label: "Stats", to: "/dashboard/stats" }]
    },
    {
      icon: FaCog,
      label: "Contact",
      items: [{ label: "Email", to: "/settings/email" }, { label: "Phone", to: "/settings/phone" }]
    },
    {
      icon: FaChartBar,
      label: "Departments",
      items: [{ label: "Sales", to: "/reports/sales" }, { label: "HR", to: "/reports/hr" }]
    },
    {
      icon: FaMoneyBill,
      label: "Social Media",
      items: [{ label: "Twitter", to: "/transactions/twitter" }, { label: "Facebook", to: "/transactions/facebook" }]
    }
  ];

  return (
    <Box
      as="aside"
      bg="gray.900"
      color="white"
      w="350px"
      minH="100vh"
      p={4}
      position="fixed"
    >
      <Box pb={10}>
        <Image src={Logo} alt="Unicoin Logo" />
      </Box>

      <Flex gap={1} direction={'column'}>
        {menuItems.map((menu, index) => (
          <CustomMenu key={index} icon={menu.icon} label={menu.label} items={menu.items} />
        ))}

        <CustomMenu
          icon={FaUsers}
          label="Users"
          items={[
            { label: "Admins", to: "/users/admins" },
            { label: "Editors", to: "/users/editors" },
            { label: "Viewers", to: "/users/viewers" }
          ]}
        />
      </Flex>
    </Box>
  );
};

export default Sidebar;
