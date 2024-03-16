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
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

export default function UserDashboard() {
  
  const navigate = useNavigate();

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 8,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 18,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
  ];

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value.split(" ")[1]}
        </text>
      </g>
    );
  };

  return (
    <>
      <div className="fixed h-[100%] w-[100%] flex overflow-hidden bg-blue-950">
        <Sidebar>
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            alert
            onClick={() => {
              navigate("/");
            }}
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            onClick={() => {
              navigate("/user-dashboard");
            }}
          />
          <SidebarItem
            icon={<StickyNote size={20} />}
            text="Investments"
            alert
            onClick={() => {
              navigate("/user-investments");
            }}
          />
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Assets"
            onClick={() => {
              navigate("/user-assets");
            }}
          />
          <SidebarItem
            icon={<Layers size={20} />}
            text="Tools"
            onClick={() => {
              navigate("/user-tools");
            }}
          />
          <SidebarItem
            icon={<Flag size={20} />}
            text="Data Upload"
            onClick={() => {
              navigate("/user-data");
            }}
          />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help Center" />
        </Sidebar>

        <div className="flex-1 p-5">
          <div className="grid grid-cols-[60%,40%] gap-5">
            <div className="mt-10 rounded-lg w-[100%] bg-white shadow-md p-5">
              {" "}
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                    <LabelList dataKey="name" content={renderCustomizedLabel} />
                  </Bar>
                  <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-10  rounded-lg h-[90%] w-[95%] bg-white shadow-md p-5">
              <h1 className="text-2xl">My Card</h1>
              <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                <img
                  class="relative object-cover w-full h-full rounded-xl"
                  src="https://i.imgur.com/kGkSg1v.png"
                />

                <div class="w-full px-8 absolute top-8">
                  <div class="flex justify-between">
                    <div class="">
                      <p class="font-light">Name</p>
                      <p class="font-medium tracking-widest">Allen Febi</p>
                    </div>
                    <img
                      class="w-14 h-14"
                      src="https://i.imgur.com/bbPHJVe.png"
                    />
                  </div>
                  <div class="pt-1">
                    <p class="font-light">Card Number</p>
                    <p class="font-medium tracking-more-wider">
                      4642 3489 9867 7632
                    </p>
                  </div>
                  <div class="pt-6 pr-6">
                    <div class="flex justify-between">
                      <div class="">
                        <p class="font-light text-xs">Valid</p>
                        <p class="font-medium tracking-wider text-sm">11/15</p>
                      </div>
                      <div class="">
                        <p class="font-light text-xs text-xs">Expiry</p>
                        <p class="font-medium tracking-wider text-sm">03/25</p>
                      </div>

                      <div class="">
                        <p class="font-light text-xs">CVV</p>
                        <p class="font-bold tracking-more-wider text-sm">···</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h2>Amount Balance :<span className="text-3xl text-indigo-950"> Rs:4500 </span></h2>
            </div>
          </div>

          <div className="grid grid-cols-[60%,40%] gap-5">
            <div className="mt-10 rounded-lg h-[60%] w-[100%] bg-white shadow-md p-5 overflow-scroll">
              <ul
                role="list"
                className="divide-y divide-gray-100 overflow-hidden"
              >
                {people.map((person) => (
                  <li
                    key={person.email}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {person.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {person.email}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {person.role}
                      </p>
                      {person.lastSeen ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Last seen{" "}
                          <time dateTime={person.lastSeenDateTime}>
                            {person.lastSeen}
                          </time>
                        </p>
                      ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs leading-5 text-gray-500">
                            Online
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 h-[60%] rounded-lg w-[90%] bg-white shadow-md p-5">
               <h1 className="text-2xl">Activity</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
