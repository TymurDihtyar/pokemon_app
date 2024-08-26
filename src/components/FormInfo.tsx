import {useAppSelector} from "../hooks";

const FormInfo = () => {
    const {savedForm} = useAppSelector(state => state.form);
    const {sprites, name, types} = savedForm || {};

    return (
        <>
            {savedForm ? (
                <div className="pt-6">
                    <div
                        className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                alt={sprites.front_default}
                                src={sprites.front_default}
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg flex justify-center">
                                <img
                                    alt={sprites.back_default}
                                    src={sprites.back_default}
                                    className="h-40 w-40 object-contain object-center "
                                />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg flex justify-center">
                                <img
                                    alt={sprites.front_shiny}
                                    src={sprites.front_shiny}
                                    className="h-40 w-40 object-contain object-center"
                                />
                            </div>
                        </div>
                        <div
                            className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                alt={sprites.back_shiny}
                                src={sprites.back_shiny}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div
                        className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-2 lg:pt-2">
                        <div className="lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name.toUpperCase()}</h1>
                        </div>
                        <div
                            className="flex justify-around py-10 lg:col-span-2 lg:col-start-1 lg:pb-8 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Types</h3>
                                    <div className="mt-2">
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                                            {types.map((item, index) => (
                                                <li key={index} className="text-gray-400">
                                                    <span className="text-white">{item.type.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export {FormInfo};
