export interface FoodItem {
    name: string;
    examples: string;
    description: string;
    iconSrc: string;
    clickMessage?: string;
}

export interface FoodData {
    headers: string[];
    items: FoodItem[];
}
