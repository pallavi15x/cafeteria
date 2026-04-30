// Import local generated images for signature items
import espressoImg from '../assets/images/espresso.png';
import latteImg from '../assets/images/latte.png';
import cappuccinoImg from '../assets/images/cappuccino.png';
import mochaImg from '../assets/images/mocha.png';

export const categories = [
  "All",
  "Espresso",
  "Cappuccino",
  "Latte",
  "Cold Coffee",
  "Iced Drinks",
  "Desserts & Snacks"
];

export const menuData = [
  // Espresso
  {
    id: 'esp-1',
    name: 'Velvet Espresso',
    category: 'Espresso',
    description: 'A bold, rich shot of our signature dark roast.',
    price: 3.50,
    image: espressoImg
  },
  {
    id: 'esp-2',
    name: 'Double Espresso (Doppio)',
    category: 'Espresso',
    description: 'Two shots of our premium espresso for an extra kick.',
    price: 4.50,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'esp-3',
    name: 'Espresso Macchiato',
    category: 'Espresso',
    description: 'A shot of espresso "marked" with a dollop of milk foam.',
    price: 3.75,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

  // Cappuccino
  {
    id: 'cap-1',
    name: 'Classic Cappuccino',
    category: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and rich froth.',
    price: 4.00,
    image: cappuccinoImg
  },
  {
    id: 'cap-2',
    name: 'Caramel Cappuccino',
    category: 'Cappuccino',
    description: 'Our classic cappuccino infused with smooth caramel syrup.',
    price: 4.75,
    image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

  // Latte
  {
    id: 'lat-1',
    name: 'Vanilla Latte',
    category: 'Latte',
    description: 'Smooth espresso with steamed milk and vanilla.',
    price: 4.50,
    image: latteImg
  },
  {
    id: 'lat-2',
    name: 'Dark Mocha',
    category: 'Latte',
    description: 'Espresso blended with rich chocolate and milk.',
    price: 5.00,
    image: mochaImg
  },
  {
    id: 'lat-3',
    name: 'Hazelnut Latte',
    category: 'Latte',
    description: 'A comforting blend of espresso, steamed milk, and roasted hazelnut.',
    price: 4.75,
    image: 'https://images.pexels.com/photos/3491211/pexels-photo-3491211.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

  // Cold Coffee
  {
    id: 'cld-1',
    name: 'Signature Cold Brew',
    category: 'Cold Coffee',
    description: 'Slow-steeped for 18 hours for a remarkably smooth, sweet finish.',
    price: 4.50,
    image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'cld-2',
    name: 'Iced Vanilla Latte',
    category: 'Cold Coffee',
    description: 'Our classic vanilla latte, served over ice.',
    price: 5.00,
    image: 'https://th.bing.com/th/id/OIP.p7uMhJI1p3BEWwVYtjFd2QHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
  },
  {
    id: 'cld-3',
    name: 'Nitro Cold Brew',
    category: 'Cold Coffee',
    description: 'Cold brew infused with nitrogen for a creamy, stout-like effect.',
    price: 5.50,
    image: 'https://tse1.mm.bing.net/th/id/OIP.wfrt-Qp9IXTSsmv59ss50wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
  },

  // Iced Drinks
  {
    id: 'ice-1',
    name: 'Iced Matcha Latte',
    category: 'Iced Drinks',
    description: 'Premium matcha green tea blended with milk and ice.',
    price: 5.25,
    image: 'https://th.bing.com/th/id/OIP.hCkncRBQbkrU6EGAz552TAHaJM?w=186&h=231&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
  },
  {
    id: 'ice-2',
    name: 'Peach Iced Tea',
    category: 'Iced Drinks',
    description: 'Refreshing black tea naturally flavored with sweet peach.',
    price: 3.50,
    image: 'https://th.bing.com/th/id/OIP.uxLpuHtyG5Zi2pWc5vZy3AHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
  },

  // Desserts & Snacks
  {
    id: 'dsrt-1',
    name: 'Butter Croissant',
    category: 'Desserts & Snacks',
    description: 'Flaky, buttery, and baked fresh every morning.',
    price: 3.00,
    image: 'https://th.bing.com/th/id/OIP.JmVp6gzB3tck21efZezJBQHaEK?w=331&h=186&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
  },
  {
    id: 'dsrt-2',
    name: 'Classic Tiramisu',
    category: 'Desserts & Snacks',
    description: 'Espresso-soaked ladyfingers layered with mascarpone cream.',
    price: 6.50,
    image: 'https://tse3.mm.bing.net/th/id/OIP.88_fZigkVYr9ArTXbz6G_QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 'dsrt-3',
    name: 'Blueberry Muffin',
    category: 'Desserts & Snacks',
    description: 'Moist muffin bursting with fresh, wild blueberries.',
    price: 3.50,
    image: 'https://th.bing.com/th/id/OIP.lIXz-ADjbC-jOIqnMTYjlQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
  }
];
