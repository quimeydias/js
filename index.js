let respuesta
let respuesta1
let direccion
let nombre


function prompts(mensaje) {
    respuesta1 = prompt(mensaje)
    return respuesta1
}



nombre = prompts("Ingrese su nombre")


alert("Bienvenido a nuestro ecommerce " + nombre + ".")


const producto = prompts(nombre +", ¿Qué desea comprar? ingrese 1 si son remeras, ingrese 2 si son pantalones")


if (producto == 1 || producto == 2) {

    if (producto == 1) {
        respuesta = prompt(nombre +", usted eligió remeras. Su precio es de 200. Desea comprar este artículo? ingrese 1 para 'si' o 0 para 'no'")
    } else {
        respuesta = prompt(nombre +", usted eligió pantalones. Su precio es de 400. Desea comprar este artículo? ingrese 1 para 'si' o 0 para 'no'")
    }

    if (respuesta == 1) {

        for (let x = 0; x < 3; x++) {

            
            if (x == 0) {
                direccion = prompts(nombre +" Ingrese su dirección para poder realizar el envío del pedido")
            }
            if (x == 1) {
                alert("Su artículo será enviado a: " + direccion)
            }
            if (x == 2) {
                alert("Muchas gracias por su compra")
            } 

        }

    } else {
        alert("Muchas gracias por su visita")
    }

} else {

    alert("No ingreso un producto valido")

}
