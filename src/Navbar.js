'use client'

import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <Box
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                maxWidth={{base: 960,}}
                mx="auto"
                alignItems="center"
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        fontSize='2xl'
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        Tapeer
                    </Text>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                >
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'green.400'}
                        href={'#'}
                        _hover={{
                            bg: 'green.300',
                        }}>
                        Chat
                    </Button>

                    <Button as={'a'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'}
                    >
                        User123
                    </Button>

                    <Button as={'a'}
                            display={{ base: 'inline-flex', md: 'none' }}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'}
                    >
                        <Icon as={FaUserAlt} />
                    </Button>
                </Stack>
            </Flex>
        </Box>
    )
}