import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function AppBar() {
  const location = useLocation();

  // Simple SVG Icons
  const HomeIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const ClipboardIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  );

  const CreditCardIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );

  const TruckIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const PlusIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );

  const ListIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );

  const SettingsIcon = () => (
    <svg
      className="w-5 min-w-5 min-h-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
  const sidebarItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/dashboard" },
    { name: "Orders", icon: ClipboardIcon, path: "/orders" },
    { name: "Customers", icon: UsersIcon, path: "/customers" },
    { name: "Transaction", icon: CreditCardIcon, path: "/transactions" },
    { name: "Shipments", icon: TruckIcon, path: "/shipments" },
    { name: "Add", icon: PlusIcon, path: "/add-products" },
    { name: "Products", icon: ListIcon, path: "/products" },
  ];

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/" || location.pathname === "/dashboard";
    }
    return location.pathname === path;
  };

  const [sliderInstanceRef, sliderInstance] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 8,
        },
      },
    },
    loop: true,
  });

  const next = () => {
    if (sliderInstance && sliderInstance.current) {
      sliderInstance.current.moveToIdx(
        sliderInstance.current.track.details.rel + 1
      );
    }
  };

  return (
    <nav className="absolute flex  w-full bottom-0 z-50 left-0 lg:hidden items-center h-20 bg-white/50 backdrop-blur-md ">
      <div ref={sliderInstanceRef} className="keen-slider px-2 ">
        {sidebarItems.map((item, index) => (
          <SidebarLink key={index} item={item} isActive={isActive(item.path)} />
        ))}
      </div>
      <div
        onClick={() => next()}
        className="px-2 cursor-pointer text-blue-700 flex items-center justify-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </nav>
  );
}

const SidebarLink = ({ item, isActive }) => (
  <Link
    to={item.path}
    className={`w-fit whitespace-nowrap justify-center keen-slider__slide flex items-center px-2 py-3 text-sm font-medium rounded-lg   transition-colors ${
      isActive
        ? " bg-blue-600 text-white "
        : "text-gray-600 hover:bg-blue-50 hover:text-gray-900"
    }`}
  >
    <item.icon />
    <span className="ml-1">{item.name}</span>
  </Link>
);

export default AppBar;
