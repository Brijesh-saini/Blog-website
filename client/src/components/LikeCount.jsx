import getEnv from '@/helpers/getEnv';
import { showToast } from '@/helpers/showToast';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";

const LikeCount = ({props}) => {
    const [likeCount, setLikeCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false)
    const user = useSelector(state => state.user)

    // Fetch like data from server
    useEffect(() => {
        const fetchLikeData = async () => {
            try {
                // Safely get userid, default to empty string if not logged in
                const userid = (user && user.isLoggedIn && user.user?._id) || ''
                const response = await fetch(
                    `${getEnv("VITE_API_BASE_URL")}/blog-like/get-like/${props.blogid}/${userid}`,
                    {
                        method: "get",
                        credentials: "include",
                    }
                )
                
                if (response.ok) {
                    const data = await response.json()
                    setLikeCount(data.likecount || 0)
                    setHasLiked(data.isUserliked || false)
                }
            } catch (error) {
                console.error('Error fetching likes:', error)
            }
        }
        
        fetchLikeData()
    }, [props.blogid, user])

    const handleLike = async() => {
        try{
            if(!user.isLoggedIn){
                return showToast('error', 'Please login into your account.')
            }
            
            const response = await fetch(`${getEnv("VITE_API_BASE_URL")}/blog-like/do-like`,{
                method: 'post',
                credentials: 'include',
                headers: {'Content-type': "application/json"},
                body: JSON.stringify({userid: user.user._id, blogid: props.blogid})
            })

            if(!response.ok){
                showToast('error', 'Failed to like/unlike post')
                return
            }
            
            const responseData = await response.json()
            if(responseData.likecount !== undefined){
                setLikeCount(responseData.likecount)
                setHasLiked(!hasLiked)
                showToast('success', hasLiked ? 'Unliked successfully' : 'Liked successfully')
            }

        }catch (error){
            showToast('error', error.message)
        }
    }

  return (
        <button onClick={handleLike} type='button' className='flex justify-between items-center gap-1'>
            {!hasLiked? 
                <FaRegHeart/>
                :
                <FaHeart color='red'/>
            }
            {likeCount}
           
        </button>
  )
}

export default LikeCount