import p1_img from "./image/iphone15promax.jpeg";
import p2_img from "./image/ipadwifi.png";
import p3_img from "./image/iphone11.jpg";
import p4_img from "./image/iphone13.jpg";
import p5_img from "./image/iphone14pm.jpg";
import p6_img from "./image/macbookairm2.jpg";
import p7_img from "./image/macbookprom3pro.jpg";
import p8_img from "./image/macbookairm3.jpg";
import p9_img from "./image/macbookair15inchm3.jpg";
import p10_img from "./image/ipadprom2.jpg";
let all_product = [
  {
    id: 1, 
    name: "iPhone 15 Promax 256gb",
    category: "iphones",
    image: p1_img,
    new_price: 29390000,
    old_price: 34990000,
    chip: "Apple A17 Pro 6 nhân",
    color: "Titan xanh",
  },
  {
    id: 2, 
    name: "iPad Wifi 10.2 inch 64gb",
    category: "ipads",
    image: p2_img,
    new_price: 7190000,
    old_price: 9990000,
    chip: "Apple A13 Bionic",
    color: "Xám"
  },
  {
    id: 3, 
    name: "iPhone 11",
    category: "iphones",
    image: p3_img,
    new_price: 7999,
    old_price: 8999,
    chip: "Apple A13 Bionic",
    color: "Trắng",
    
  },
  {
    id: 4, 
    name: "iPhone 13",
    category: "iphones",
    image: p4_img,
    new_price: 13790000,
    old_price: 17790000,
    chip: "Apple A15 Bionic",
    color: "Đen",
  },
  {
    id: 5, 
    name: "iPhone 14 Pro Max 128gb",
    category: "iphones",
    image: p5_img,
    new_price: 27390000,
    old_price: 29490000,
    chip: "Apple A16 Bionic",
    color: "Đen",
  },
  {
    id: 6, 
    name: "MacBook Air 15 inch M2",
    category: "macs",
    image: p6_img,
    new_price: 35990000,
    old_price: 37990000,
    cpu: "Apple M2, 100GB/s",
    color: "Xanh đen",
    ram: "16gb",
    memory: "256gb"
  },
  {
    id: 7,
    name: "MacBook Pro 14 inch M3 Pro",
    category: "macs",
    image: p7_img,
    new_price: 49490000,
    old_price: 49990000,
    cpu: "Apple M3 Pro, 150 GB/s memory bandwidth",
    color: "Đen",
    ram: "18gb",
    memory: "512gb"
  },
  {
    id: 8,
    name: "MacBook Air 13 inch M3",
    category: "macs",
    image: p8_img,
    new_price: 37990000,
    cpu: "Apple M3, 100GB/s",
    color: "Xám",
    ram: "16gb",
    memory: "512gb"
  },
  {
    id: 9,
    name: "MacBook Air 15 inch M3",
    category: "macs",
    image: p9_img,
    new_price: 42990000,
    cpu: "Apple M3, 100GB/s",
    color: "Xám",
    ram: "16gb",
    memory: "512gb"
  },
  {
    id: 10, 
    name: "iPad Pro M2 12.9 inch WiFi",
    category: "ipads",
    image: p10_img,
    new_price: 28590000,
    old_price: 29190000,
    chip: "Apple M2 8 nhân",
    color: "Bạc",
    ram: "8gb",
    memory: "128gb"
  }
];

export default all_product;