'use client'

import {Button} from "@chakra-ui/react";

export default function FilterButton({text, active}) {
    return (
        <Button color={active ? "white" : "black"}
                bg={active ? "green.400" : "gray.200"}
                _hover={active ? {bg: "green.300"} : {bg: "gray.100"}}
                mr={3} mb={3}
        >
            {text}
        </Button>
    );
}