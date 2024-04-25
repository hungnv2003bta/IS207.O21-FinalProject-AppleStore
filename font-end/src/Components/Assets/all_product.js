import p1_img from "./iphone15promax.jpeg";
import p2_img from "./ipadwifi.png";
import p3_img from "./iphone11.jpg";

let all_product = [
  {
    id: 1, 
    name: "Iphone 15 Promax",
    category: "iphones",
    image: p1_img,
    new_price: 30000,
    old_price: 34000,
  },
  {
    id: 2, 
    name: "Ipad Wifi 10.2 inch 64gb",
    category: "ipads",
    image: p2_img,
    new_price: 7999,
    old_price: 8999,
  },
  {
    id: 3, 
    name: "iphone 11",
    category: "iphones",
    image: p3_img,
    new_price: 7999,
    old_price: 8999,
    chip: "A13 Bionic chip",
    color: "đen",
    
  },
];

export default all_product;