import React, { useState, useEffect } from 'react'
import { Grid, Skeleton, VStack, Box, useDisclosure, Flex, Text } from '@chakra-ui/react'
import ProfilePost from './ProfilePost'
import useGetUserPost from '../../hooks/useGetUserPost'

const ProfilePosts = () => {
    const {isLoading, posts} = useGetUserPost()
    const noPostsFound = !isLoading && posts.length === 0
    if(noPostsFound) return <NoPostsFound />

  return (
    <Grid
        templateColumns={{
            sm:"repeat(1, 1fr)",
            md:"repeat(3, 1fr)",
        }}
        gap={1}
        columnGap={1}
    >
        {isLoading && [0,1,2].map((_,index) => (
            <VStack key={index}>
                <Skeleton w={"full"}>
                    <Box h='300px'>Contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}

        {!isLoading && (
            <>
                {posts.map((post, index) => (
                    <ProfilePost post={post} key={post.id} />
                ))}
            </>
        )}     
    </Grid>
  )
}

export default ProfilePosts

const NoPostsFound = () => {
    return(
        <Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
            <Text fontSize={"2xl"}>No Posts Found ❌</Text>
        </Flex>
    )
}