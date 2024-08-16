export function calculateCheckOut (cartItems,discountPercentage,deliveryCharge) {
    const subtotal = cartItems.reduce((prev,item)=>prev+item.price*item.quantity,0);
    const discountedPrice = (subtotal*discountPercentage)/100;
    const total = subtotal - discountedPrice + deliveryCharge;

    return {
        subtotal:subtotal,
        discountedPrice:discountedPrice.toFixed(2),
        total:total.toFixed(2), //get only two digits after the decimal point in a number
    }
}