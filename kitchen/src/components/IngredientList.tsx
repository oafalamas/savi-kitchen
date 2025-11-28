import type {Ingredient} from "../types";

type Props = {
    items: Ingredient[];
    onRemove: (id: string) => void;
};

export default function IngredientList({ items, onRemove }: Props) {
    if (items.length === 0) {
        return <p className="text-sm text-gray-600">No ingredients yet. Add your first above.</p>;
    }

    return (
        <div className="border rounded">
            <table className="w-full text-sm">
                <thead className="bg-gray-50">
                <tr>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Unit</th>
                    <th className="text-left p-2">Price/unit</th>
                    <th className="p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {items.map((i) => (
                    <tr key={i.id} className="border-t">
                        <td className="p-2">{i.name}</td>
                        <td className="p-2">{i.unit}</td>
                        <td className="p-2">{i.pricePerUnit}</td>
                        <td className="p-2 text-right">
                            <button
                                className="text-red-600 hover:underline"
                                onClick={() => onRemove(i.id)}
                            >
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
