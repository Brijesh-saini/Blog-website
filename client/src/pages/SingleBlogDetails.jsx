import Comment from "@/components/Comment";
import Loading from "@/components/Loading";
import { AvatarImage } from "@/components/ui/avatar";
import getEnv from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import { Avatar } from "@radix-ui/react-avatar";
import { decode } from "entities";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import { BsCalendar2DateFill } from "react-icons/bs";
import CommentCount from "@/components/CommentCount";
import LikeCount from "@/components/LikeCount";

const SingleBlogDetails = () => {
  const { blog } = useParams();
  const { data, loading, error } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog/get-blog/${blog}`,
    {
      method: "get",
      credentials: "include",
      
    }
  );
  if (loading) return <Loading />;

  return (
    <div className="flex justify-between gap-20 ">
      {data && data.blog && (
        <>
          <div className="border rounded w-[70%] p-5">
            <h1 className="text-2xl font-bold mb-5">{data.blog.title}</h1>

            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <Avatar className="w-6 rounded">
                  <AvatarImage src={data.blog.author.avatar} />
                </Avatar>
                <div>
                    <p className="font-bold">{data.blog.author.name}</p>
                    <p>Date:{moment(data.blog.createdAt).format('DD-MM-YYYY')}</p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-5">
                <LikeCount props={{blogid: data.blog._id }}/>
                <CommentCount props={{blogid: data.blog._id}}/>
              </div>

            </div>
            <div className="my-5 w-xl">
              <img src={data.blog.featuredImage} className="rounded" />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: decode(data.blog.blogContent) || "",
              }}
            ></div>
            <div className="border-t mt-5 pt-5">
              <Comment props={{ blogid: data.blog._id }} />
            </div>
           
          </div>
        </>
      )}
      <div className="border rounded w-[30%]"></div>
    </div>
  );
};

export default SingleBlogDetails;
