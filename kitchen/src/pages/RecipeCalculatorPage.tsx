import { useEffect, useMemo, useState } from "react";
import type {Ingredient, RecipeItem} from "../types";
import RecipeForm from "../components/RecipeForm";
import CostSummary from "../components/CostSummary";

const STORAGE_KEY = "ingredients";

export default function RecipeCalculatorPage() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [items, setItems] = useState<RecipeItem[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setIngredients(JSON.parse(saved));
    }, []);

    const totalCost = useMemo(
        () => items.reduce((sum, i) => sum + i.quantity * i.pricePerUnit, 0),
        [items]
    );

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Recipe calculator</h1>
            <RecipeForm ingredients={ingredients} onChange={setItems} />
            <CostSummary items={items} total={totalCost} />
        </div>
    );
}
