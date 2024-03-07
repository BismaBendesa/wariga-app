import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoWariga from "../../webp-img/LogoWariga.webp";

const navigation = [
    { name: "Ramalan", href: "/dashboard", current: false },
    { name: "Konsultasi", href: "/konsultasi", current: false },
    { name: "Tentang Wariga", href: "/tentang-wariga", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavigasiBar() {
    return (
        <Disclosure as="nav" className="bg-[#100D20]">
            {({ open }) => (
                <>
                    <div className="px-4 sm:px-6 sm:py-2 lg:px-16 relative h-[84px] flex items-center justify-between">
                        {/* <div className=""> */}
                        <div className="flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 sm:flex-none items-center justify-center sm:items-stretch sm:justify-start">
                            {/* Logo Wariga */}
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src={LogoWariga}
                                    alt="Logo Wariga"
                                />
                            </div>
                            {/* Navigasi List Item */}
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:ml-6 sm:block pr-6">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "text-[#E2A000]"
                                                    : "text-gray-300 hover:text-[#E2A000] ",
                                                "rounded-md px-3 py-2 text-sm font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <a
                                className="outline outline-offset-2 outline-1 outline-[#FFB400] text-[#FFB400] px-2 md:px-4 py-1 md:py-2 md:px-5 rounded-md font-bold text-sm md:text-base"
                                href="/Register"
                            >
                                Register
                            </a>
                        </div>
                        {/* </div> */}
                    </div>
                    {/* Section Detail Dropdown */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
