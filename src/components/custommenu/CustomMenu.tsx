import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface CustomMenuProps {
    icon: React.ElementType;
    label: string;
    items: Array<{ label: string, to: string }>;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ icon: Icon, label, items }) => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color={'white'}
                bg="transparent"
                _hover={{ bg: 'gray.700' }}
                _active={{ bg: 'gray.800' }}
            >
                <Box display="flex" alignItems="center">
                    <Icon />
                    <Box ml={2}>{label}</Box>
                </Box>
            </MenuButton>
            <MenuList>
                {items.map((item, index) => (
                    <MenuItem
                        color={'black'}
                        key={index}
                        as="a"
                        href={item.to}
                        bg="rgba(255, 255, 255, 0.6)"
                        backdropFilter="blur(20px)"
                        _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default CustomMenu;
