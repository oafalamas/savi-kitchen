import type {RecipeItem} from "../types";

type Props = {
    items: RecipeItem[];
    total: number;
};

export default function CostSummary({ items, total }: Props) {
    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">Summary</h2>
            <ul className="text-sm space-y-1">
                {items.map((i, idx) => (
                    <li key={idx}>
                        {i.quantity} × {i.ingredientName} @ {i.pricePerUnit} = {(i.quantity * i.pricePerUnit).toFixed(2)}
                    </li>
                ))}
            </ul>
            <p className="font-bold">Total cost: {total.toFixed(2)}</p>
        </div>
    );
}
