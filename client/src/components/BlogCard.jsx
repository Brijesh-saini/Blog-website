import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { FaCalendarAlt } from "react-icons/fa";
import usericon from "@/assets/images/user.png";
import moment from "moment";
import { Link } from "react-router-dom";
import { RouteBlogDetails } from "@/helpers/RouteName";

const BlogCard = ({ props }) => {
  // const user = useSelector((state) => state.user)

  return (
    <Link to={RouteBlogDetails(props.category?.slug, props.slug)}>
      {/* Added h-full to the Card to ensure it expands within the grid item */}
      <Card className="pt-5 h-full transition-shadow duration-300 hover:shadow-lg">
        {/* Added flex-col and h-full to CardContent to enable consistent vertical layout */}
        <CardContent className="h-full flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex justify-between  items-center gap-2 ">
              <Avatar>
                <AvatarImage src={props.author?.avatar || usericon} />
              </Avatar>
              <span>{props.author?.name}</span>
            </div>
            {props.author?.role === "admin" && (
              <Badge variant="outline" className="bg-violet-600">
                Admin
              </Badge>
            )}
          </div>
          {/* REQUIRED COMMENT: Fixed image height and applied object-cover for consistent aspect ratio and professional look. */}
          <div className="my-3 h-48 overflow-hidden rounded">
            <img 
              src={props.featuredImage} 
              className="w-full h-full object-cover" 
              alt={props.title} 
            />
          </div>
          {/* flex-grow ensures this content section fills remaining space, keeping card titles aligned */}
          <div className="flex-grow">
            <p className="flex items-center gap-2 mb-2 text-sm text-gray-500">
              <FaCalendarAlt />
              <span>{moment(props.createdAt).format("DD-MM-YYYY")}</span>
            </p>
            {/* Reduced text size slightly for better fit, ensured line clamping */}
            <h2 className="text-xl font-bold line-clamp-2">{props.title}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
