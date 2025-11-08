import type { FoodData } from './types';

export const healthyFoodData: FoodData = {
  headers: ["Grupo de alimentos", "Ejemplos", "Beneficios principales"],
  items: [
    { name: "Frutas y verduras", examples: "Manzana, zanahoria, espinaca, naranja", description: "Aportan vitaminas y fibra", iconSrc: "/icons/fruits-vegetables.svg", clickMessage: "¡Perfectas para empezar el día con energía!" },
    { name: "Cereales integrales", examples: "Avena, arroz integral, pan integral", description: "Brindan energía y mejoran la digestión", iconSrc: "/icons/whole-grains.svg", clickMessage: "¡El combustible secreto de los campeones!" },
    { name: "Legumbres", examples: "Lentejas, garbanzos, porotos", description: "Fuente de proteínas vegetales", iconSrc: "/icons/legumes.svg", clickMessage: "Pequeñas pero llenas de poder. ¡A comer!" },
    { name: "Lácteos", examples: "Yogur, leche, queso bajo en grasa", description: "Fortalecen huesos y dientes", iconSrc: "/icons/dairy.svg", clickMessage: "¡Acompáñalo con tu cereal favorito por la mañana!" },
    { name: "Grasas saludables", examples: "Palta, nueces, aceite de oliva", description: "Protegen el corazón", iconSrc: "/icons/healthy-fats.svg", clickMessage: "Un poquito en tu ensalada y ¡listo!" },
    { name: "Carnes Magras", examples: "Pollo, pavo, pescado", description: "Construyen músculos y nos dan fuerza", iconSrc: "/icons/lean-meats.svg", clickMessage: "¡Para que tus músculos crezcan fuertes como los de un león!" }
  ]
};

export const unhealthyFoodData: FoodData = {
  headers: ["Tipo de alimento", "Ejemplos", "Riesgos del consumo excesivo"],
  items: [
    { name: "Hamburguesas", examples: "Con queso, doble carne, con tocino", description: "Aumentan el colesterol y el sobrepeso", iconSrc: "/icons/burger.svg", clickMessage: "¡Deliciosa! Pero guárdala para una celebración especial." },
    { name: "Pizzas", examples: "Pepperoni, extra queso, bordes rellenos", description: "Contienen muchas grasas y carbohidratos", iconSrc: "/icons/pizza.svg", clickMessage: "¡Qué rico un pedacito! Ideal para compartir con amigos de vez en cuando." },
    { name: "Papas Fritas", examples: "De bolsa o de restaurante", description: "Tienen mucha sal y grasas no saludables", iconSrc: "/icons/fries.svg", clickMessage: "Unas poquitas están bien, ¡pero no te comas toda la bolsa!" },
    { name: "Dulces y snacks", examples: "Galletas, caramelos, papas fritas de bolsa", description: "Elevan el azúcar en sangre", iconSrc: "/icons/sweets-snacks.svg", clickMessage: "¡Un dulcecito después de comer es un premio! No todos los días." },
    { name: "Bebidas azucaradas", examples: "Gaseosas, jugos artificiales", description: "Causan obesidad y problemas dentales", iconSrc: "/icons/sugary-drinks.svg", clickMessage: "El agua es tu mejor amiga. ¡Estas bebidas son solo para fiestas!" },
    { name: "Embutidos", examples: "Salchichas, fiambres, tocino", description: "Contienen mucha grasa y sal", iconSrc: "/icons/processed-meats.svg", clickMessage: "Mejor elige otras carnes. ¡Estas son para de vez en cuando!" }
  ]
};
