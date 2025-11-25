// import Comment from "@/components/Comment";
// import Loading from "@/components/Loading";
// import { AvatarImage } from "@/components/ui/avatar";
// import getEnv from "@/helpers/getEnv";
// import { useFetch } from "@/hooks/useFetch";
// import { Avatar } from "@radix-ui/react-avatar";
// import { decode } from "entities";
// import moment from "moment";
// import React from "react";
// import { useParams } from "react-router-dom";
// import { BsCalendar2DateFill } from "react-icons/bs";
// import CommentCount from "@/components/CommentCount";
// import LikeCount from "@/components/LikeCount";
// import RelatedBlog from "@/components/RelatedBlog";

// const SingleBlogDetails = () => {
//   const { blog, category } = useParams();
//   const { data, loading, error } = useFetch(
//     `${getEnv("VITE_API_BASE_URL")}/blog/get-blog/${blog}`,
//     {
//       method: "get",
//       credentials: "include",
      
//     },[blog, category]
//   );
//   if (loading) return <Loading />;

//   return (
//     <div className="md:flex-nowrap flex-wrap flex justify-between gap-20 ">
//       {data && data.blog && (
//         <>
//           <div className="border rounded md:w-[70%] w-full p-5">
//             <h1 className="text-2xl font-bold mb-5">{data.blog.title}</h1>

//             <div className="flex justify-between items-center">
//               <div className="flex justify-between items-center gap-5">
//                 <Avatar className="w-6 rounded">
//                   <AvatarImage src={data.blog.author?.avatar} />
//                 </Avatar>
//                 <div>
//                     <p className="font-bold">{data.blog.author?.name}</p>
//                     <p>Date:{moment(data.blog.createdAt).format('DD-MM-YYYY')}</p>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center gap-5">
//                 <LikeCount props={{blogid: data.blog._id }}/>
//                 <CommentCount props={{blogid: data.blog._id}}/>
//               </div>

//             </div>
//             <div className="my-5 w-xl">
//               <img src={data.blog.featuredImage} className="rounded" />
//             </div>
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: decode(data.blog.blogContent) || "",
//               }}
//             ></div>
//             <div className="border-t mt-5 pt-5">
//               <Comment props={{ blogid: data.blog._id }} />
//             </div>
           
//           </div>
//         </>
//       )}
//       <div className="border rounded md:w-[30%] w-full p-5">
//         <RelatedBlog props={{category: category, currentBlog: blog}}/>
//       </div>
//     </div>
//   );
// };

// export default SingleBlogDetails;


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
import RelatedBlog from "@/components/RelatedBlog";

const SingleBlogDetails = () => {
  const { blog, category } = useParams();
  const { data, loading, error } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog/get-blog/${blog}`,
    {
      method: "get",
      credentials: "include",
      
    },[blog, category]
  );
  if (loading) return <Loading />;

  return (
    <div className="md:flex-nowrap flex-wrap flex justify-between gap-10 lg:gap-20"> {/* Adjusted gap for aesthetic */}
      {data && data.blog && (
        <>
          {/* Main Content Area */}
          <div className="border rounded-lg md:w-[70%] w-full p-6 shadow-md"> {/* Added rounded-lg, shadow-md, and p-6 for better aesthetics and padding */}
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-6">{data.blog.title}</h1> {/* Increased title size and weight */}

            {/* Author & Meta Section */}
            <div className="flex justify-between items-center pb-4 border-b mb-6">
              {/* Author Details */}
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={data.blog.author?.avatar} className="rounded-full" />
                </Avatar>
                <div>
                    <p className="font-semibold text-lg">{data.blog.author?.name}</p>
                    {/* REQUIRED COMMENT: Improved date formatting and added icon for better visual presentation. */}
                    <p className="text-sm flex items-center gap-2 text-gray-500">
                        <BsCalendar2DateFill className="inline-block text-violet-600"/>
                        <span>{moment(data.blog.createdAt).format('MMMM DD, YYYY')}</span>
                    </p>
                </div>
              </div>

              {/* Like/Comment Counts */}
              <div className="flex items-center gap-4">
                <LikeCount props={{blogid: data.blog._id }}/>
                <CommentCount props={{blogid: data.blog._id}}/>
              </div>
            </div>
            
            {/* Featured Image - FIXED HEIGHT/RATIO FOR CLEANER UI */}
            {/* REQUIRED COMMENT: Added a fixed height container (h-96) and object-cover to ensure the featured image is displayed neatly with a consistent aspect ratio, preventing layout shifts. */}
            <div className="mb-6 w-full h-96 overflow-hidden rounded-lg shadow-inner">
              <img 
                src={data.blog.featuredImage} 
                className="w-full h-full object-cover" 
                alt={data.blog.title}
              />
            </div>

            {/* Blog Content - Added modern typography utility classes */}
            <div
              className="prose max-w-none prose-lg text-gray-800" 
              dangerouslySetInnerHTML={{
                __html: decode(data.blog.blogContent) || "",
              }}
            ></div>
            
            {/* Comment Section Separator */}
            <div className="border-t mt-8 pt-6">
              <Comment props={{ blogid: data.blog._id }} />
            </div>
           
          </div>
        </>
      )}
      {/* Related Blog Section (Sidebar) */}
      {/* REQUIRED COMMENT: Made the sidebar sticky on desktop and ensured its height fits the content (h-fit) so it scrolls with a margin from the top navigation. */}
      <div className="border rounded-lg md:w-[30%] w-full p-6 shadow-md h-fit md:sticky md:top-20">
        <RelatedBlog props={{category: category, currentBlog: blog}}/>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
