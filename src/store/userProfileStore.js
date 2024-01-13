import { create } from 'zustand'

const useUserProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({userProfile}),
    // used to update the number of post in the profile page
    addPost: (post) => set(state => ({
        userProfile: {...state.userProfile, post: [post.id, ...state.userProfile.posts]}
    })),
    deletePost: (postId) => set(state =>({
        ...userProfile,
        posts: state.userProfile.posts.filter(id => id !== postId)
    }))
}))

export default useUserProfileStore