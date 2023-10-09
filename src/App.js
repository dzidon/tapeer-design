import './App.css';
import './Navbar.js';
import Navbar from "./Navbar";
import {
    Box, Button,
    Flex,
    FormControl, Icon,
    Input,
    Link, SimpleGrid, Spacer,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

import FilterButton from "./FilterButton";
import ChatCard from "./ChatCard";
import {FaPlus} from "react-icons/fa";

export default function App() {
    return (
        <div>
            <Navbar/>

            <Box
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                maxWidth={{base: 960,}}
                mx="auto"
                alignItems="center"
            >
                <Box mt={6}>
                    <Box mb={3}>
                        <Text fontSize='3xl' as='b'>Chatovací místnosti</Text>

                        <FormControl mt={2}>
                            <Input type='text' placeholder='Hledat...' />
                        </FormControl>
                    </Box>

                    <Box mb={8}>
                        <Box>
                            <FilterButton text={"Samota"} active={false}/>
                            <FilterButton text={"Deprese"} active={true}/>
                            <FilterButton text={"ADHD"} active={false}/>
                            <FilterButton text={"Rozchod"} active={false}/>
                            <FilterButton text={"Závislost"} active={true}/>
                            <FilterButton text={"Úzkost"} active={false}/>
                            <FilterButton text={"Sebevražda"} active={false}/>
                            <FilterButton text={"Schizofrenie"} active={false}/>
                        </Box>

                        <strong>
                            <Link color='green.400' href='#'>
                                Zobrazit všechny tagy...
                            </Link>
                        </strong>
                    </Box>
                </Box>

                <Box mt={6}>
                    <Flex alignItems="center" mb={3}>
                        <Text fontSize='2xl' as='b'>Nalezeno 141918 místností</Text>

                        <Spacer/>

                        <Button
                            as={'a'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            justify={'flex-end'}
                            fontWeight={600}
                            color={'white'}
                            bg={'green.400'}
                            href={'#'}
                            _hover={{
                                bg: 'green.300',
                            }}
                        >
                            Nová místnost
                        </Button>

                        <Button
                            p={1}
                            as={'a'}
                            display={{ base: 'inline-flex', md: 'none' }}
                            justify={'flex-end'}
                            fontWeight={600}
                            color={'white'}
                            bg={'green.400'}
                            borderRadius={100}
                            href={'#'}
                            _hover={{
                                bg: 'green.300',
                            }}
                        >
                            <Icon as={FaPlus}/>
                        </Button>
                    </Flex>

                    <Box>
                        <SimpleGrid columns={{sm: 1, md: 2}} spacing={6}>
                            <ChatCard/>
                            <ChatCard/>
                            <ChatCard/>
                            <ChatCard/>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
