// Badu, Aotian 10 de octubre de 2019 https://github.com/AJLoveChina/birthday
var configuración = {
    // La longitud de la oración puede ser arbitraria, puedes escribir diez oraciones, veinte oraciones están bien
    // Trate de no exceder los 15 caracteres por oración, de lo contrario, el efecto de visualización puede no ser muy bueno
    textos: [
        "Give it to me", //¡Aquí, la última coma al final de cada oración debe estar en inglés! ¡¡Muy importante!!
        "Querida monada", // ídem...
        "Hoy es tu cumpleanos",
        "Esto es lo que somos juntos",
        "Es mi tercer cumpleaños",
        "Cumpleaños del año pasado",
        "Todavía recuerdo haber comido brochetas en Wangpo",
        "Quiero comer bien este año",
        "Quiero alimentar a mis lindos cerditos",
        "y llevar",
        "YAMI~~",
    ],
    /**
     * Las imágenes se pueden dejar en blanco, pero si desea completar, debe seguir el formato a continuación
     * "Correspondiente al texto anterior, debe ser exactamente igual": "La dirección de la imagen, puede poner la imagen en la carpeta imgs"
     * Por ejemplo
     * "Pequeña monada amada": "./imgs/xiaokeai.jpg"
     *
     * Si no desea imágenes, simplemente escriba dos comentarios de barra al comienzo de cada línea, por ejemplo, la imagen "Hoy es su cumpleaños" a continuación no se mostrará :)
     * Consejo: es mejor usar un cuadrado o cerca de un cuadrado para la imagen, se ve mejor
     */
    imágenes: {
        "Querida monada": "./imgs/xiaokeai.png",
        // "Hoy es tu cumpleaños": "./imgs/cumpleaños.jpg",
    },
    // descripción del texto del botón, el siguiente es el texto del botón predeterminado, en inglés, puede cambiarlo a su texto favorito
    descripción: {
        turn_on: "Iniciar",
        play: "música",
        banner_coming: "Colorear",
        balloons_flying: "Parece que falta algo",
        cake_fadein: "¿Pastel?",
        light_candle: "¿Vela?",
        wish_message: "Feliz cumpleaños",
        historia: "UN MENSAJE PARA TI",
    }
};