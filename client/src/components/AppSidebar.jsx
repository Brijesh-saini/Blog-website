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
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import logo from '@/assets/images/logo-white.png' 
import { IoIosHome } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { FaBlog } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { RouteBlog, RouteCategoryDetails } from "@/helpers/RouteName";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} width={120}/>
      </SidebarHeader>
      <SidebarContent className="bg-white">
            <SidebarGroup >
                <SidebarMenu>

                    {/* Home */}
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <IoIosHome />
                            <Link to="">Home</Link> 
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
                            <Link to="">Comments</Link> 
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    {/* Users */}
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <FaUserShield />
                            <Link to="">Users</Link> 
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup >
                <SidebarGroupLabel>
                    Categories
                </SidebarGroupLabel>
                <SidebarMenu>

                    {/* Categories */}
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <FaRegCircleDot  />
                            <Link to="">Category Item</Link> 
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                </SidebarMenu>
            </SidebarGroup>
      </SidebarContent>
      
    </Sidebar>
  )
}

export default AppSidebar