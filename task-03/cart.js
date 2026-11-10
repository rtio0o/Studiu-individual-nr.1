export const addProduct = (cart, product) => {
    const existingProduct = cart.find(({ id }) => id === product.id);

    if (existingProduct) {
        return cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item,
        );
    }

    return [...cart, { ...product }];
};

export const removeProduct = (cart, productId) => {
    const product = cart.find(({ id }) => id === productId);

    if (!product) {
        throw new Error(`Produsul cu ID-ul ${productId} nu există în coș.`);
    }

    return cart.filter(({ id }) => id !== productId);
};

export const updateQuantity = (cart, productId, newQuantity) => {
    if (newQuantity < 1) {
        throw new Error("Cantitatea trebuie să fie cel puțin 1.");
    }

    const product = cart.find(({ id }) => id === productId);

    if (!product) {
        throw new Error(`Produsul cu ID-ul ${productId} nu există în coș.`);
    }

    return cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
    );
};

export const calculateTotal = (cart) =>
    cart.reduce((total, { price, quantity }) => total + price * quantity, 0);

export const printCart = (cart) => {
    cart.forEach(({ name, price, quantity }) => {
        console.log(`${name}: ${quantity} x ${price.toFixed(2)} lei`);
    });
    console.log(`Total: ${calculateTotal(cart).toFixed(2)} lei`);
};
