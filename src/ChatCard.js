'use client'

import {Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Icon, Text} from "@chakra-ui/react";
import {FaUserAlt} from "react-icons/fa";

export default function ChatCard() {
    return (
        <Card boxShadow='md'>
            <CardHeader pb={0}>
                <Heading size='md'> Zase deprese.. :(</Heading>
            </CardHeader>

            <CardBody pt={3} pb={5}>
                <Box mb={2}>
                    <Badge colorScheme='green' mr={2}>Deprese</Badge>
                    <Badge colorScheme='green' mr={2}>Úzkost</Badge>
                </Box>

                <Text mb={2}>
                    <Icon boxSize={3} as={FaUserAlt}/> 1/3
                </Text>

                <Text>Má taky někdo depresi? Pojďte si pokecat. Taky mam úzkost a jsem sama, už fakt nevím jak dál :(</Text>
            </CardBody>

            <CardFooter pt={0}>
                <Button
                    as={'a'}
                    justify={'flex-end'}
                    fontWeight={600}
                    color={'white'}
                    bg={'green.400'}
                    href={'#'}
                    _hover={{
                        bg: 'green.300',
                    }}
                >
                    Vstoupit
                </Button>
            </CardFooter>
        </Card>
    );
}