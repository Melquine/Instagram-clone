import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import { Flex, VStack, Text, Box, Link } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
    const {isLoading, suggestedUsers} = useGetSuggestedUsers()
    if(isLoading) return null
  return (
    <VStack py={8} px={4}>
        <SuggestedHeader />

        {suggestedUsers.length !== 0 && (
            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400"}} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>
        )}
//erorr en setUser al pasar el componente ******************
        {suggestedUsers.map(user => (
            <SuggestedUser user={user} key={user.id} />
        ))}

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            (C) 2023 Built By {""}
            <Link href='https://melquine.github.io/React-proyecto/' target='_blank' color='blue.500' fontSize={14}>
                Melqui Núñez
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers