//const precioOriginal = 120;
//const descuento = 18;

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});
*/

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const coupons = ['1','2','3'];

function onClickButtonPriceCouponDiscount() {
    const inputPrecio = document.getElementById("InputPrecio");
    const priceValue = inputPrecio.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
    } else if (couponValue === "1") {
        descuento = 15;
    } else if (couponValue === "2") {
        descuento = 30;
    } else if (couponValue === "3") {
        descuento = 25;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("priceWithCoupon");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}

