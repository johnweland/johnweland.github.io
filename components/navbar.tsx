import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import ThemeSelector from "components/themeSelector";
import {
  Bars2Icon,
  DocumentTextIcon,
  XMarkIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";

const navItems = [
  {
    name: "Home",
    description: "Welcome to DCS",
    href: "/",
    disabled: false,
  },
  {
    name: "Blog",
    description: "Get to know us!",
    href: "/blog",
    disabled: false,
  },
  {
    name: "Portfolio",
    description: "A catalog of our games",
    href: "/portfolio",
    disabled: false,
  },
];

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Popover className="relative bg-white dark:bg-neutral-900 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-neutral-100 dark:border-neutral-800 py-6 md:justify-start md:space-x-10">
          <div
            className="flex justify-start lg:flex-1 p-1.5 rounded-full ring-2 ring-emerald-600 max-w-[36px]
          "
          >
            <Link href="/">
              <a>
                <span className="sr-only">Damned Cat Studio</span>
                {/* <Image
                  className="rounded-full"
                  width={52}
                  height={50}
                  src={"/images/damnedcatstudio.jpg"}
                  alt="Damned Cat Damned Logo"
                /> */}
                <GlobeAmericasIcon className="flex-shrink-0 h-6 w-6 text-emerald-500 dark:text-white" />
              </a>
            </Link>
          </div>
          <div className="mr-2 ml-[auto] md:hidden">
            <ThemeSelector className="relative z-10" />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
              <span className="sr-only">Open menu</span>
              <Bars2Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              if (!item.disabled) {
                return (
                  <Link href={item.href} key={item.name}>
                    <a
                      title={item.description}
                      className="text-base font-medium text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-100"
                    >
                      {item.name}
                    </a>
                  </Link>
                );
              } else {
                return (
                  <p
                    key={item.name}
                    title={item.description}
                    className="text-base font-medium text-gray-300 dark:text-gray-700"
                  >
                    {item.name}
                  </p>
                );
              }
            })}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-emerald-700 rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-400 to-emerald-700 hover:bg-emerald-800 mr-2">
                <DocumentTextIcon
                  className="flex-shrink-0 h-6 w-6 text-white"
                  aria-hidden="true"
                />
                Resume
              </a>
            </Link>
            <ThemeSelector className="relative z-10" />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div
                  className="flex justify-start lg:flex-1 p-1.5 rounded-full ring-2 ring-emerald-600 max-w-[36px]
          "
                >
                  <Link href="/">
                    <a>
                      <span className="sr-only">Damned Cat Studio</span>
                      {/* <Image
                  className="rounded-full"
                  width={52}
                  height={50}
                  src={"/images/damnedcatstudio.jpg"}
                  alt="Damned Cat Damned Logo"
                /> */}
                      <GlobeAmericasIcon className="flex-shrink-0 h-6 w-6 text-emerald-500 dark:text-white" />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => {
                    if (!item.disabled) {
                      return (
                        <Link href={item.href} key={item.name}>
                          <a
                            title={item.description}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                              {item.name}
                            </span>
                          </a>
                        </Link>
                      );
                    } else {
                      return (
                        <p
                          key={item.name}
                          title={item.description}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <span className="ml-3 text-base font-medium text-gray-300 dark:text-gray-500">
                            {item.name}
                          </span>
                        </p>
                      );
                    }
                  })}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="/resume">
                  <a className="w-full flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-400 to-emerald-700 hover:bg-emerald-800">
                    <DocumentTextIcon
                      className="flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
