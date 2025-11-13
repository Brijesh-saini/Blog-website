import getEnv from '@/helpers/getEnv';
import { useFetch } from '@/hooks/useFetch';
import React, { useEffect, useState } from 'react'
import { FaRegCommentDots } from "react-icons/fa";

const CommentCount = ({props}) => {
  const { data, loading, error } = useFetch(`${getEnv("VITE_API_BASE_URL")}/comment/get-count/${props.blogid}`,{
    method: "get",
    credentials: "include",
  });

  const [count, setCount] = useState(0)

  // Initialize local count when fetch returns
  useEffect(() => {
    if(data && typeof data.commentCount !== 'undefined'){
      setCount(data.commentCount)
    }
  }, [data])

  // Listen to commentAdded events and update count immediately
  useEffect(() => {
    const handler = (e) => {
      try{
        const { blogid } = e.detail || {}
        if(blogid && blogid === props.blogid){
          setCount(prev => prev + 1)
        }
      }catch(err){
        // ignore malformed events
      }
    }

    window.addEventListener('commentAdded', handler)
    return () => window.removeEventListener('commentAdded', handler)
  }, [props.blogid])

  return (
  <button type='button' className='flex justify-between items-center gap-1'>
    <FaRegCommentDots/>
    {count}
  </button>
  )
}

export default CommentCount