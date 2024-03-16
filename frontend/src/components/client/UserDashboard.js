import * as React from "react";
import Sidebar, { SidebarItem } from "./components/SideBar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function UserDashboard() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert  onClick={()=>{navigate('/')}}/>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active onClick={()=>{navigate('/user-dashboard')}} />
          <SidebarItem icon={<StickyNote size={20} />} text="Investments" alert onClick={()=>{navigate('/user-investments')} }/>
          <SidebarItem icon={<Calendar size={20} />} text="Assets" onClick={()=>{navigate('/user-assets')}}/>
          <SidebarItem icon={<Layers size={20} />} text="Tools" onClick={()=>{navigate('/user-tools')}} />
          <SidebarItem icon={<Flag size={20} />} text="Help Center"  onClick={() => {navigate('/contact')}}/>
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  );
}
