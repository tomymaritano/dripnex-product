import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Text, Icon } from '@chakra-ui/react';

interface CustomLinkProps {
  to: string;
  icon: React.ElementType; // El tipo del componente de ícono
  label: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, icon, label }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      display="flex"
      alignItems="center"
      color={'white'}
      w={'full'}
      p={2}
      borderRadius="5px"
      _hover={{ bg: "rgba(255, 255, 255, 0.1)", color: '#fcd144' }}
      style={{ textDecoration: 'none' }} // Para evitar el subrayado en los links
    >
      <Icon as={icon} />
      <Text ml={2}>{label}</Text>
    </Link>
  );
};

export default CustomLink;
