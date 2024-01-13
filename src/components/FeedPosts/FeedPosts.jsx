import { Container, Flex, Skeleton, SkeletonCircle, VStack, Box, Text } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPost'

const FeedPosts = () => {
  const {isLoading, posts} = useGetFeedPosts()

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
      [0,1,2].map((_,index) => (
        <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gpa='2'>
            <SkeletonCircle size='10' />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={'200px'} />
              <Skeleton height='10px' w={'200px'} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"400px"}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))

      }

{!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
{!isLoading && posts.length === 0 && (
  <>
    <Text fontSize={"md"} color={"red.400"}>
      Looks like you don't have any friends!
    </Text>
    
  </>
)}
    </Container>
  )
}

export default FeedPosts