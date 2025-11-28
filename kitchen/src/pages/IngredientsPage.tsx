import { useEffect, useState } from "react";
import type {Ingredient} from "../types";
import IngredientForm from "../components/IngredientForm";
import IngredientList from "../components/IngredientList";

const STORAGE_KEY = "ingredients";

export default function IngredientsPage() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setIngredients(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
    }, [ingredients]);

    const addIngredient = (ingredient: Ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
    };

    const removeIngredient = (id: string) => {
        setIngredients((prev) => prev.filter((i) => i.id !== id));
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Ingredients</h1>
            <IngredientForm onAdd={addIngredient} />
            <IngredientList items={ingredients} onRemove={removeIngredient} />
        </div>
    );
}
