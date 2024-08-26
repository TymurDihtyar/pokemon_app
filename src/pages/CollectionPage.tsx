import {OnePokemon} from "../components/PokemonsContainer/OnePokemon";

const CollectionPage = () => {
    const myCollection = JSON.parse(localStorage.getItem("myCollection")) || [];
    return (
        <div className="bg-gradient-to-bl from-indigo-300 via-blue-300 to-purple-300 min-h-screen pt-10">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                    {myCollection.map((item: { name: string; id: string }) => (
                        <OnePokemon key={item.name} name={item.name} id={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export {CollectionPage};