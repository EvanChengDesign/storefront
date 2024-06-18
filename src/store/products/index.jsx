import tvImage from '../../assets/TV.jpg';
import laptopImage from '../../assets/laptop.jpg';
import spaghettiImage from '../../assets/spaghetti.jpg';
import pizzaImage from '../../assets/pizza.jpg';
import shoesImage from '../../assets/shoes.jpg';
import pantsImage from '../../assets/pants.jpg';


let tv = {
  title: 'INSIGNIA 32-inch TV',
  description: 'INSIGNIA 32-inch Class F20 Series Smart Full HD 1080p Fire TV with Alexa Voice Remote',
  image: tvImage,
  category: 'electronics',
  price: '$800'
};

let laptop = {
  title: 'Lenovo Newest 15.6" Laptop',
  description: 'Lenovo Newest 15.6"" Laptop, 16GB RAM, 1TB SSD Storage, 15.6"" FHD (1920 x 1080) Display, Ethernet Port, HDMI, USB-C, WiFi & Bluetooth, Intel Dual-core Processor, Windows 11 Home, Black',
  image: laptopImage,
  category: 'electronics',
  price: '$2400'
};

let spaghetti = {
  title: 'Campbell\'s Canned Spaghetti',
  description: 'Campbell\'s Canned Spaghetti, Snacks for Kids and Adults,15.8 OZ Can',
  image: spaghettiImage,
  category: 'food',
  price: '$0.99'
};

let pizza = {
  title: 'Red Baron Frozen Pizza',
  description: 'Red Baron Frozen Pepperoni Pizza, 6-Ounce Pizzas (Pack of 12)',
  image: pizzaImage,
  category: 'food',
  price: '$18'
};

let shoes = {
  title: 'Nike Air Max Shoes',
  description: 'Nike Air Max 270 Shoes, Lightweight, Comfortable, Breathable Sneakers for Running and Casual Wear',
  image: shoesImage,
  category: 'clothing',
  price: '$150'
};

let pants = {
  title: 'Levi\'s 501 Original Fit Jeans',
  description: 'Levi\'s 501 Original Fit Jeans, Durable, Comfortable Denim for Men and Women',
  image: pantsImage,
  category: 'clothing',
  price: '$60'
};

let initialState = {
  products: [tv, laptop, spaghetti, pizza, shoes, pants],
  displayedProducts: [tv, laptop]
};


const filterProducts = (state, category) => {
  const filteredProducts = state.products.filter((product) => product.category === category);
  return filteredProducts;
}

const productsReducer = (state = initialState, action) => {

  let {type, payload } = action;
  let filteredProducts = null;

  switch(type) {
    case 'CHANGE_CATEGORY':
      filteredProducts = filterProducts(state, payload);
      return { ...state, displayedProducts: filteredProducts}
    default:
      return state;
  }

}

export default productsReducer;

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category
  }
}