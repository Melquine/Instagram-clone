import React, { useState } from 'react'
import { Flex, Avatar, Box, Button, VStack } from '@chakra-ui/react'
import useAuthStore from '../../store/authStore'
import useFollowUser from '../../hooks/useFollowUser'
import { Link } from 'react-router-dom'

const SuggestedUser = ({user}) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid)
  const authUser = useAuthStore(state => state.user)
  const { setUser } = useAuthStore()

  const onFollowUser = async () => {
    await handleFollowUser()
    setUser({
      ...user,
      followers: isFollowing 
        ? user.followers.filter(follower => follower.uid !== authUser.uid)
        : [...user.followers, authUser]
    })
    
  }

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} name={user.fullname} size={"md"} />
        </Link>
        <VStack spacing={2} alignItems={"flex-start"}>
        <Link to={`/${user.username}`}>
          <Box fontSize={12} fontWeight={"bold"}>
            {user.fullname}
          </Box>
          </Link>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
              <Button
              fontSize={13}
              bg={"transparent"}
              p={0}
              h={"max-content"}
              fontWeight={"medium"}
              color={"blue.500"}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              onClick={onFollowUser}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
      )}

    </Flex>
  )
}

export default SuggestedUser