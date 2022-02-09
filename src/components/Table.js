import React, { useState } from "react";
import { useCharacterDetails } from "../hooks/useCharacterDetails";
import TableItem from "./TableItem";
function Table() {
    const { status, data, error } = useCharacterDetails();

    const [characterSearch, setCharacterSearch] = useState("");

    console.log(data);

    return (
        <div className=" px-8 py-4">
            <div className="flex justify-between h-1/2 mb-4 items-center border-b-2 pb-1">
                <h1 className=" text-2xl md:text-3xl font-extrabold">swapi.dev</h1>
                <input
                    placeholder="Character Name"
                    className="border-gray-200 border-2 rounded-md w-1/4 px-1"
                    type="text"
                    onChange={(e) => setCharacterSearch(e.target.value)}
                ></input>
            </div>

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {status === "loading" ? (
                                "Loading..."
                            ) : status === "error" ? (
                                <div>Error: {error.message}</div>
                            ) : (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Height
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Mass
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Edited
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Planet
                                            </th>
                                        </tr>
                                    </thead>

                                    {
                                        data.data.results
                                            ?.filter((character) => {
                                                if (characterSearch === "") {
                                                    return character;
                                                } else if (
                                                    character.name
                                                        .toLowerCase()
                                                        .includes(characterSearch.toLowerCase())
                                                ) {
                                                    return character;
                                                }
                                                return false;
                                            })
                                            .map((character) => (
                                                <TableItem key={character.url} character={character} />
                                            ))
                                    }
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
