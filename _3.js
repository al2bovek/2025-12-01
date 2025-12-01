// ## 3. Normalize and modify product names **1 point**

const products = [
    "  Super PHONE 3000 ",
    "mega-laptop",
    "WiFi ROUTER",
    "portable-charger ",
    "USB cable",
];

const cleanFormatted = (arr) => {
    return [...arr].map(el => {
        const temp = el.trim().replace('-', ' ').toLowerCase();
        return temp;
    })
}

console.log(cleanFormatted(products));
