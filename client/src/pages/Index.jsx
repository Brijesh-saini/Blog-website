import BlogCard from "@/components/BlogCard";
import Loading from "@/components/Loading";
import getEnv from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Index = () => {
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`${getEnv("VITE_API_BASE_URL")}/blog/blogs`, {
    method: "get",
    credentials: "include",
  });

  if (loading) return <Loading />;
  
  return (
    // REQUIRED COMMENT: Grid layout ensures equal column widths and consistent spacing for blog cards on all devices.
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {blogData && blogData.blog.length > 0 ? (
        // Use a stable unique key (prefer _id or id). Avoid passing the whole object as key
        blogData.blog.map((blog) => (
          <BlogCard key={blog._id || blog.id} props={blog} />
        ))
      ) : (
        <div>Data Not found</div>
      )}
    </div>
  )
}

export default Index;