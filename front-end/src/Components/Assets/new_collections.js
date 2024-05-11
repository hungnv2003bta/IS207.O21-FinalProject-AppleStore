import p1_img from "./iphone15pro.jpeg";
import p2_img from "./ipadprom2.jpeg";
import p3_img from "./macbook_air_2024.jpeg";
import p4_img from "./macbookpro2024.jpeg"

let new_collections = [
  {
    id: 1, 
    name: "Iphone 15 Pro",
    category: "iphone",
    image: p1_img,
    new_price: 30000,
    old_price: 34000,
  },
  {
    id: 2,
    name: "Ipad Pro M2",
    category: "ipad",
    image: p2_img,
    new_price: 19999,
    old_price: 21999,
  },
  {
    id: 3,
    name: "Macbook Air 2024",
    category: "macbook",
    image: p3_img,
    new_price: 25000,
    old_price: 28000,
  },
  {
    id: 4,
    name: "Macbook Pro 2024",
    category: "macbook",
    image: p4_img,
    new_price: 30000,
    old_price: 32000,
  }
];

export default new_collections;