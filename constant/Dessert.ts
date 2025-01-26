
interface MenuItem {
    name: string
    description: string
    calories: number
    price: number
    highlight?: boolean
  }
  
  export const menuItems: MenuItem[] = [
    {
      name: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Creamy mascarpone cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true
    },
    {
      name: "Pastry, blueberries, lemon juice",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Pain au chocolat",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
  ]