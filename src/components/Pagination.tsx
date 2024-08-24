import { useAppDispatch, useAppSelector } from "../hooks";
import { pokemonActions } from "../redux/slices";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const { next, previous } = useAppSelector(state => state.pokemon);

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-800 px-4 py-3 sm:px-6 fixed bottom-0 w-full">
            <div className="flex flex-1 justify-between">
                <button
                    disabled={!previous}
                    onClick={() => dispatch(pokemonActions.getPokemones({ url: previous }))}
                    className="relative inline-flex items-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                    Previous
                </button>
                <button
                    disabled={!next}
                    onClick={() => dispatch(pokemonActions.getPokemones({ url: next }))}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export { Pagination };
