import getEnv from '@/helpers/getEnv';
import { useFetch } from '@/hooks/useFetch';
import React from 'react'
import { BiSolidLike } from "react-icons/bi";

const LikeCount = ({props}) => {
    const { data: blogLikeCount, loading, error } = useFetch(`${getEnv("VITE_API_BASE_URL")}/blog-like/get-like/${props.blogid}`,{
            method: "get",
            credentials: "include",
        });
  return (
        <button type='button' className='flex justify-between items-center gap-1'>
            <BiSolidLike/>
            {blogLikeCount && blogLikeCount.likecount}
           
        </button>
  )
}

export default LikeCount