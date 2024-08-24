import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";

const navigation = [
    { name: 'Pokemon', link: 'pokemons'},
    { name: 'My Collection', link: 'my-collection'},
    { name: 'Search', link: 'search'},
]

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800 absolute top-0 w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-center">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Logo"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8bf49eb-f01d-4851-810a-6aa6fc317107/defoec0-d0c0a40d-139d-482a-a043-6da7178296dd.png/v1/fill/w_1145,h_698/pokemon_logo_update_2021_by_obsolete00_defoec0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTc1IiwicGF0aCI6IlwvZlwvZDhiZjQ5ZWItZjAxZC00ODUxLTgxMGEtNmFhNmZjMzE3MTA3XC9kZWZvZWMwLWQwYzBhNDBkLTEzOWQtNDgyYS1hMDQzLTZkYTcxNzgyOTZkZC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.q5xiGiCiW5rIaSkzLpngofi4bsdFnlMMGEGIC14R5Ic"
                                className="h-16 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center justify-center space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.link}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="flex flex-col">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.link}
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export { Navbar };
