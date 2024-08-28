import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SearchFormData {
    keyword: string;
    searchType: string;
}

const searchOptions = [
    { id: 1, name: "Name" },
    { id: 2, name: "Ability" },
    { id: 3, name: "Type" },
];

const SearchForm = () => {
    const { handleSubmit, register, setValue } = useForm<SearchFormData>();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(searchOptions[0].name);

    const search: SubmitHandler<SearchFormData> = (data) => {
        const { keyword, searchType } = data;
        if (keyword) {
            navigate(`/search?keyword=${keyword.toLowerCase()}&searchType=${searchType.toLowerCase()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(search)} className="flex">
            <input
                type="text"
                placeholder="Search by"
                {...register("keyword")}
                className="border rounded-l-md px-3 py-1 w-1/3 h-8 text-sm"
            />
            <select
                {...register("searchType")}
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                    setValue("searchType", e.target.value);
                }}
                className="border-none bg-white py-1 px-3 text-gray-900 shadow-md focus:outline-none sm:text-sm rounded-none w-1/3 h-8"
            >
                {searchOptions.map((option) => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            <button
                type="submit"
                className="ml-[-1px] bg-blue-500 text-white px-4 py-1 rounded-r-md w-1/3 h-8 hover:bg-blue-700"
            >
                Search
            </button>
        </form>
    );
};

export { SearchForm };
