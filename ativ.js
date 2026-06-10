// Refatorado com Clean Code
const DISCOUNT_RATE = 0.9;
const MIN_PRICE = 50;
const MAX_PRICE = 200;

function applyDiscountToEligibleProducts(products) {
    return products
        .filter(product => isEligibleForDiscount(product))
        .map(product => createDiscountedProduct(product));
}
    
function isEligibleForDiscount(product) {
    return product.price > MIN_PRICE && product.price < MAX_PRICE && product.stock > 0;
}

function createDiscountedProduct(product) {
    const newPrice = product.price * DISCOUNT_RATE;
    const discount = product.price - newPrice;
    
    return {
        name: product.name,
        originalPrice: product.price,
        newPrice: newPrice,
        discount: discount
    };
}

const productData = [
    { name: "Camiseta", price: 79.9, stock: 10 },
    { name: "Meias", price: 19.9, stock: 50 },
    { name: "Jaqueta", price: 299.9, stock: 0 },
    { name: "Calça", price: 149.9, stock: 5 },
    { name: "Boné", price: 59.9, stock: 20 }
];

console.log(applyDiscountToEligibleProducts(productData));