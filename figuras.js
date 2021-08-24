///////////////////////////////////// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

///////////////////////////////////// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

function perimetroIsosceles(lado1, lado2, base) {
    if (lado1 === lado2){
        return lado1 + lado2 + base;
    }
    else {
        return console.log('Los lados deben tener el mismo valor')
    }
}
//console.log('El perimetro del Triangulo Isosceles es: ' + perimetroIsosceles() + 'cm')
console.groupEnd();

//////////////////////////////////////// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


///////////////////////////// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

/////////////////////////////////////////////////////////////////////////
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const base = document.getElementById("InputBase2");
    const value = Number(base.value);
    const altura = document.getElementById("InputAltura");
    const value4 = Number(altura.value);

    const area = areaTriangulo(value, value4);
    alert(area);
}
function calcularPerimetroIsosceles() {
    const lado1 = document.getElementById("InputLadoA");
    const value1 = Number(lado1.value);
    const lado2 = document.getElementById("InputLadoB");
    const value2 = Number(lado2.value);
    const base = document.getElementById("InputBase1");
    const value3 = Number(base.value);

    const perimetro = perimetroIsosceles(value1, value2, value3);
    alert(perimetro);
}


/////////////////////////////////////////////////////////////////////////////
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
//////////////////////////////////////////
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
console.log(alturaTrianguloIsosceles())