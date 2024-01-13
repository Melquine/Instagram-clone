import React, { useState } from 'react'
import { Box, Button, Image, Input, VStack, Flex, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import Login from './Login'
import Signup from './Signup'

function AuthForm() {
    const [isLogin, setIslogin] = useState(true)

  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />

                { isLogin ? <Login /> : <Signup /> }
                {/* ---- or ---- */}

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                    <Text mx={1} color={"white"}>
                        OR
                    </Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                </Flex>

                <GoogleAuth prefix={isLogin ? 'Log in' : 'Sign up'} />
            </VStack>
        </Box>

        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Don't have an account?" : "Already have an account"}
                </Box>
                <Box onClick={() => setIslogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                    {isLogin ? "Sing up" : "Log in"}
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default AuthForm