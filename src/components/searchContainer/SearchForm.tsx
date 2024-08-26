import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface SearchFormData {
    keyword: string;
    searchType: string;
}

const searchOptions = [
    { id: 1, name: 'Name' },
    { id: 2, name: 'Ability' },
    { id: 3, name: 'Type' },
];

const SearchForm = () => {
    const { handleSubmit, register, setValue } = useForm<SearchFormData>();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(searchOptions[0]);

    const search: SubmitHandler<SearchFormData> = (data) => {
        const { keyword, searchType } = data;
        navigate(`/search?keyword=${keyword.toLowerCase()}&searchType=${searchType.toLowerCase()}`);
    };

    return (
        <form onSubmit={handleSubmit(search)} className="flex">
            <input
                type="text"
                placeholder="Search by "
                {...register('keyword')}
                className="border rounded-l-md px-3 py-1 w-1/3 h-8 text-sm"
            />
            <input
                type="hidden"
                value={selected.name}
                {...register('searchType')}
            />
            <Listbox value={selected} onChange={(value) => {
                setSelected(value);
                setValue('searchType', value.name);
            }}>
                <div className="relative w-1/3">
                    <Listbox.Button
                        className="relative w-full cursor-default rounded-none bg-white py-1 px-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6 h-8">
                        <span className="flex items-center">
                            <span className="block truncate">{selected.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                        </span>
                    </Listbox.Button>
                    <Listbox.Options
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {searchOptions.map((item) => (
                            <Listbox.Option
                                key={item.id}
                                value={item}
                                className={({ active }) =>
                                    `group relative cursor-default select-none py-2 pl-3 pr-9 ${
                                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                    }`
                                }>
                                <div className="flex items-center">
                                    <span
                                        className={`block truncate ${
                                            selected.name === item.name ? 'font-semibold' : 'font-normal'
                                        }`}>
                                        {item.name}
                                    </span>
                                </div>
                                {selected.name === item.name ? (
                                    <span
                                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-500 group-active:text-white">
                                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                    </span>
                                ) : null}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
            <button type="submit" className="ml-[-1px] bg-blue-500 text-white px-4 py-1 rounded-r-md w-1/3 h-8 hover:bg-blue-700">Search</button>
        </form>
    );
};

export { SearchForm };
