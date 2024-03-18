import { BookOpenCheck,LayoutPanelLeft, MessageCircleMore, Stethoscope, User, UserPlus } from "lucide-react";





export const SIDEBAR_LINKS=[

{
  key:"home",
  label:"Home",
  path:"/adminhome",
  icon:<LayoutPanelLeft />,

},
{
    key:"DocList",
    label:"All Doctors",
    path:"allDoctors",
    icon:<Stethoscope />,
    
  },
  {
    key:"addDoc",
    label:"Add Doctor",
    path:"addDoctors",
    icon:<UserPlus/>,
    
  },
  {
    key:"userslist",
    label:"Users",
    path:"UserList",
    icon:<User />,
    
  },
  {
    key:"appointed",
    label:"Booked Users",
    path:"bookedUsers",
    icon: <BookOpenCheck />
    
    
  },
  {
    key:"reviews",
    label:"feedbacks",
    path:"review",
    icon: <MessageCircleMore/>
    
    
  },
  



]