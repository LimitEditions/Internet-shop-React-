// products.js

import { v4 as uuidv4 } from 'uuid';

const products = [
    { id: uuidv4(), img: require("../img/card1.jpg"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'XS' },
    { id: uuidv4(), img: require("../img/card2.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'S' },
    { id: uuidv4(), img: require("../img/card3.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'M' },
    { id: uuidv4(), img: require("../img/card4.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'L' },
    { id: uuidv4(), img: require("../img/card5.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'XS' },
    { id: uuidv4(), img: require("../img/card6.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'S' },
    { id: uuidv4(), img: require("../img/card7.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'M' },
    { id: uuidv4(), img: require("../img/card8.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'XS' },
    { id: uuidv4(), img: require("../img/card9.png"), name: "ELLERY X M'O CAPSULE", desc: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: 52.00, size: 'L' }
];

export default products;
