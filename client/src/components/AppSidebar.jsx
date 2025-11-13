import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-white.png";
import { IoIosHome } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { FaBlog } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommentDetails, RouteIndex, RouteUser } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import getEnv from "@/helpers/getEnv";
import { useSelector } from "react-redux";

const AppSidebar = () => {
    const user = useSelector(state=> state.user)
  const { data: categoryData } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/category/all-category`,
    {
      method: "get",
      credentials: "include",
    }
  );

  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} width={120} />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarMenu>
            {/* Home */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <IoIosHome />
                <Link to={RouteIndex}>Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Categories */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <TbCategory />
                <Link to={RouteCategoryDetails}>Categories</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Blog */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaBlog />
                <Link to={RouteBlog}>Blogs</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Comments */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaComments />
                <Link to={RouteCommentDetails}>Comments</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Users */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaUserShield />
                <Link to={RouteUser}>Users</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
            {/* Categories */}
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            {categoryData &&
              categoryData.category.length > 0 &&
              categoryData.category.map(category => (
                <SidebarMenuItem key={category._id}>
                  <SidebarMenuButton>
                    <FaRegCircleDot />
                    <Link to={RouteBlogByCategory(category.slug)}>{category.name}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
