import { useState } from "react";
import type {Ingredient, RecipeItem} from "../types";

type Props = {
    ingredients: Ingredient[];
    onChange: (items: RecipeItem[]) => void;
};

export default function RecipeForm({ ingredients, onChange }: Props) {
    const [selectedId, setSelectedId] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [items, setItems] = useState<RecipeItem[]>([]);

    const addItem = () => {
        const ing = ingredients.find((i) => i.id === selectedId);
        const qty = parseFloat(quantity);
        if (!ing || isNaN(qty) || qty <= 0) return;

        const newItem: RecipeItem = {
            ingredientId: ing.id,
            ingredientName: ing.name,
            unit: ing.unit,
            quantity: qty,
            pricePerUnit: ing.pricePerUnit,
        };

        const updated = [...items, newItem];
        setItems(updated);
        onChange(updated);
        setSelectedId("");
        setQuantity("");
    };

    const removeItem = (idx: number) => {
        const updated = items.filter((_, i) => i !== idx);
        setItems(updated);
        onChange(updated);
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
                <select
                    className="border rounded p-2"
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                >
                    <option value="">Select ingredient</option>
                    {ingredients.map((i) => (
                        <option key={i.id} value={i.id}>
                            {i.name} ({i.unit}) @ {i.pricePerUnit}
                        </option>
                    ))}
                </select>
                <input
                    className="border rounded p-2"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    inputMode="decimal"
                />
                <button className="bg-blue-600 text-white rounded px-4" onClick={addItem}>
                    Add to recipe
                </button>
            </div>

            <div className="border rounded">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left p-2">Ingredient</th>
                        <th className="text-left p-2">Unit</th>
                        <th className="text-left p-2">Qty</th>
                        <th className="text-left p-2">Price/unit</th>
                        <th className="p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((i, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="p-2">{i.ingredientName}</td>
                            <td className="p-2">{i.unit}</td>
                            <td className="p-2">{i.quantity}</td>
                            <td className="p-2">{i.pricePerUnit}</td>
                            <td className="p-2 text-right">
                                <button className="text-red-600 hover:underline" onClick={() => removeItem(idx)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
