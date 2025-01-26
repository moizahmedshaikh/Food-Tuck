
interface MenuItem {
    name: string
    description: string
    calories: number
    price: number
    highlight?: boolean
  }
  
  export const MainCoursItem: MenuItem[] = [
    {
      name: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Cashew Chicken With Stir-Fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true
    },
    {
      name: " Vegetables & Green Salad",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
  ]