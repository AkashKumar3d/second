import { Box, Button, Heading, HStack, Input, Stack , Text, VStack} from '@chakra-ui/react'
import { AiOutlineSend, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"} >
        <Stack direction={["column" , "row"]}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
              <Heading size={"md"} textTransform={"uppercase"} textAlign={["center", "left"]}>
                 Subscribe to get update
              </Heading>
            
            <HStack borderBottom={"2px solid white"} p={"2"}>
                <Input placeholder='Enter your Gmail...' borderRadius={"none"}
                border={"none"} 
                outline={"none"}/>
                <Button
                p={"0"}
                color={"purple"}
                variant={"ghost"}
                borderRadius={"0 20 200 0"}
                focusBorderColor={"none"}
                >
                    <AiOutlineSend size={"20"}/>
                </Button>
            </HStack>
            </VStack>
            <VStack w={"full"} borderRight={["none", "1px solid white"]} borderLeft={["none", "1px solid white"]}>
                <Heading textTransform={"uppercase"} textAlign={"center"}>
                    Video Hub
                </Heading>
                <Text>All right recevied </Text>
            </VStack>
            <VStack w={"full"}>
            <Heading size={"md"} textAlign={"center"}>
                    Social media
                </Heading>
                <Button variant={"link"} colorScheme={"purple"}>
                    <a target={"_blank"} href="https://www.linkedin.com/feed/" ><AiFillLinkedin/>Linkdin</a>
                </Button>
                <Button variant={"link"} colorScheme={"purple"}>
                <a target={"_blank"} href="https://www.instagram.com/ak47.ft/" ><AiFillInstagram/>instagram</a>
                </Button>
                <Button variant={"link"} colorScheme={"purple"}>
                <a target={"_blank"} href="https://www.youtube.com/" ><AiFillYoutube/>youtube</a>
                </Button>
            </VStack>
            </Stack> 
       
    </Box>
  )
}

export default Footer