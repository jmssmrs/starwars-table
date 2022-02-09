import React from "react";
import { useCharacterPlanet } from "../hooks/useCharacterPlanet";

function TableItem({ character }) {
    const planetUrl = character?.homeworld;

    const { data: planetDetails } = useCharacterPlanet(planetUrl);

    const planetName = planetDetails?.data.name;

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr key={character.url}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                            {character.name}
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{character.height}cm</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{character.mass}kg</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {new Date(character.created).toLocaleDateString()}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {new Date(character.edited).toLocaleDateString()}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{planetName}</div>
                </td>
            </tr>
        </tbody>
    );
}

export default TableItem;
