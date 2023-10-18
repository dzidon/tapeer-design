import './App.css';
import './Navbar.js';
import Navbar from "./Navbar";
import {
    Box, Button,
    Flex, FormControl,
    Input, SimpleGrid,
    Spacer, Text,
    useColorModeValue
} from "@chakra-ui/react";

import {Select} from 'chakra-react-select';

import FilterButton from "./FilterButton";
import ChatCard from "./ChatCard";

export default function App() {
    const filterTags = [
        {value: 'Deprese', label: 'Deprese'},
        {value: 'Úzkost', label: 'Úzkost'},
        {value: 'Sebevražda', label: 'Sebevražda'},
        {value: 'Závislost', label: 'Závislost'},
    ];

    return (
        <div>
            <Navbar/>

            <Box
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                mx="auto"
                alignItems="center"
                py={{base: 2}}
                px={{base: 4}}
                maxWidth={{base: 960}}
            >
                <Box mt={6}>
                    <Box mb={3}>
                        <Text fontSize='3xl' as='b'>Chatovací místnosti</Text>

                        <FormControl mt={2}>
                            <Input type='text' placeholder='Hledat...'/>
                        </FormControl>
                    </Box>

                    <Box mb={3}>
                        <Select isMulti={true}
                                options={filterTags}
                                placeholder={'Tagy...'}
                        />
                    </Box>

                    <Box mb={8}>
                        <Box>
                            <FilterButton text={"Pro 2 účastníky"} active={true}/>
                            <FilterButton text={"Pro 3 účastníky"} active={false}/>
                        </Box>
                    </Box>
                </Box>

                <Box mt={6}>
                    <Flex
                        mb={3}
                        direction={{
                            base: 'column',
                            md: 'row'
                        }}
                        alignItems={{
                            base: 'flex-start',
                            md: 'justify'
                        }}
                    >
                        <Text fontSize='2xl' as='b'>Nalezeno 141918 místností</Text>

                        <Spacer/>

                        <Button
                            as={'a'}
                            justify={'flex-end'}
                            fontWeight={600}
                            color={'white'}
                            bg={'green.400'}
                            href={'#'}
                            display={{
                                base: 'flex',
                                md: 'inline-flex'
                            }}
                            width={{
                                base: '100%', md: 'initial'
                            }}
                            mt={{
                                base: 1
                            }}
                            _hover={{
                                bg: 'green.300',
                            }}
                        >
                            Založit novou místnost
                        </Button>
                    </Flex>

                    <Box>
                        <SimpleGrid
                            spacing={6}
                            columns={{
                                sm: 1,
                                md: 2
                            }}
                        >
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
