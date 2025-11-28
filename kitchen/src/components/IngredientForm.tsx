import { useState } from "react";
import type {Ingredient} from "../types";

type Props = { onAdd: (i: Ingredient) => void };

export default function IngredientForm({ onAdd }: Props) {
    const [name, setName] = useState("");
    const [unit, setUnit] = useState("kg");
    const [pricePerUnit, setPricePerUnit] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const price = parseFloat(pricePerUnit);
        if (!name || !unit || isNaN(price)) return;

        const ingredient: Ingredient = {
            id: crypto.randomUUID(),
            name: name.trim(),
            unit,
            pricePerUnit: price,
        };
        onAdd(ingredient);
        setName("");
        setUnit("kg");
        setPricePerUnit("");
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 max-w-xl">
            <input
                className="border rounded p-2"
                placeholder="Ingredient name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select
                className="border rounded p-2"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
            >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="L">L</option>
                <option value="ml">ml</option>
                <option value="pcs">pcs</option>
            </select>
            <input
                className="border rounded p-2"
                placeholder="Price per unit"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
                inputMode="decimal"
            />
            <button type="submit" className="bg-green-600 text-white rounded px-4 py-2">
                Add ingredient
            </button>
        </form>
    );
}
