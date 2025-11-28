export type Ingredient = {
    id: string;
    name: string;
    unit: string; // e.g., kg, g, L, ml, pcs
    pricePerUnit: number; // price per unit (same unit as 'unit')
};

export type RecipeItem = {
    ingredientId: string;
    ingredientName: string;
    unit: string;
    quantity: number; // quantity in the ingredient unit
    pricePerUnit: number;
};
