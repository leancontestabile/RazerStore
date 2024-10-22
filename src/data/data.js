const products = [
    {
        id: "rm01",
        name: "Razer Viper V3 Pro",
        description: "El Razer Viper V3 Pro es un ratón gaming inalámbrico que destaca por su ligereza y precisión. Con un diseño ergonómico, está diseñado para largas sesiones de juego. Utiliza el sensor óptico Razer Focus Pro, que ofrece una sensibilidad de hasta 30,000 DPI, garantizando un seguimiento excepcional. Su conectividad de 2.4 GHz proporciona un rendimiento sin latencia, mientras que la duración de la batería puede alcanzar hasta 80 horas. Con botones programables y retroiluminación RGB, el Viper V3 Pro es una opción excelente para gamers que buscan velocidad y personalización.",
        stock: "10",
        price: "160",
        image: "/img/Razer Viper V3 Pro.png",
        category: "mouse"
    },
    {
        id: "rm02",
        name: "Razer DeathAdder V3 Pro",
        description: "El Razer DeathAdder V3 Pro es un ratón gaming inalámbrico que combina un diseño icónico con tecnología de alto rendimiento. Con un sensor óptico Razer Focus Pro de hasta 30,000 DPI, ofrece una precisión y velocidad excepcionales. Su diseño ergonómico se adapta cómodamente a la mano, ideal para largas sesiones de juego. La conectividad de 2.4 GHz garantiza un rendimiento sin latencia, y su batería ofrece hasta 90 horas de uso. Además, cuenta con botones programables y retroiluminación RGB, lo que lo convierte en una opción popular para gamers que buscan comodidad y personalización.",
        stock: "15",
        price: "150",
        image: "/img/Razer Deathadder V3 Pro.png",
        category: "mouse"
    },
    {
        id: "rk01",
        name: "Razer Huntsman V3 Pro",
        description: "El Razer Huntsman V3 Pro es un teclado mecánico que destaca por su rapidez y precisión. Utiliza los switches ópticos Razer, que ofrecen un tiempo de respuesta excepcional y una durabilidad de hasta 100 millones de pulsaciones. Su diseño cuenta con retroiluminación RGB personalizable y un chasis resistente, ideal para gamers. Además, incluye teclas multimedia y una almohadilla de reposamanos ergonómica para mayor comodidad durante largas sesiones. En resumen, es una excelente opción para quienes buscan un teclado de alto rendimiento en el gaming.",
        stock: "10",
        price: "250",
        image: "/img/Razer Blackwidow V3 Pro.jpg",
        category: "keyboard"
    },
    {
        id: "rk02",
        name: "Razer Huntsman Mini",
        description: "El Razer Huntsman Mini es un teclado mecánico compacto de 60% que combina un diseño minimalista con un rendimiento excepcional. Equipado con switches ópticos Razer, ofrece una respuesta rápida y precisa, ideal para juegos. Su retroiluminación RGB personalizable permite una gran variedad de efectos visuales. A pesar de su tamaño reducido, cuenta con funciones completas y un chasis robusto, lo que lo convierte en una opción perfecta para quienes buscan portabilidad sin sacrificar calidad. Es ideal tanto para gamers como para quienes desean un teclado eficiente y elegante.",
        stock: "5",
        price: "120",
        image: "/img/Razer Huntsman Mini.webp",
        category: "keyboard"
    },
    {
        id: "rh01",
        name: "Razer BlackShark V2 Pro",
        description: "Los Razer BlackShark V2 Pro son auriculares gaming inalámbricos que destacan por su excelente calidad de sonido y comodidad. Equipados con drivers de 50 mm Razer TriForce, ofrecen un audio claro y detallado. Su diseño incluye almohadillas de espuma viscoelástica para largas sesiones de juego y un micrófono cardioide retráctil que captura la voz con claridad. Con conexión inalámbrica de 2.4 GHz y hasta 24 horas de duración de batería, son ideales para gamers serios que buscan un rendimiento superior.",
        stock: "15",
        price: "200",
        image: "/img/Razer BlackShark V2 Pro.jpg",
        category: "headset"
    },
    {
        id: "rh02",
        name: "Razer Kraken V4",
        description: "Los Razer Kraken V4 son auriculares gaming que combinan comodidad y rendimiento de audio. Cuentan con drivers de 50 mm que proporcionan un sonido envolvente, ideal para juegos. Su diseño incluye almohadillas de gel frío y una diadema ajustable, lo que los hace cómodos para largas sesiones. Además, vienen con un micrófono retráctil y controles integrados para facilitar el uso. Son una opción sólida para jugadores que buscan calidad y confort en su experiencia de juego.",
        stock: "20",
        price: "180",
        image: "/img/Razer Kraken V4.webp",
        category: "headset"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export { getProducts }