export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Беспроводные наушники',
    description: 'Качественный звук с активным шумоподавлением',
    price: 4999,
    image: 'https://picsum.photos/seed/1/300/300',
  },
  {
    id: '2',
    name: 'Умные часы',
    description: 'Отслеживание активности и уведомлений',
    price: 8999,
    image: 'https://picsum.photos/seed/2/300/300',
  },
  {
    id: '3',
    name: 'Портативная колонка',
    description: 'Мощный звук в компактном корпусе',
    price: 3499,
    image: 'https://picsum.photos/seed/3/300/300',
  },
  {
    id: '4',
    name: 'Пауэрбанк',
    description: 'Быстрая зарядка для ваших устройств',
    price: 2199,
    image: 'https://picsum.photos/seed/4/300/300',
  },
  {
    id: '5',
    name: 'Фитнес-браслет',
    description: 'Мониторинг здоровья 24/7',
    price: 1999,
    image: 'https://picsum.photos/seed/5/300/300',
  },
  {
    id: '6',
    name: 'Беспроводная зарядка',
    description: 'Удобная зарядка без проводов',
    price: 1599,
    image: 'https://picsum.photos/seed/6/300/300',
  },
]

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id)
