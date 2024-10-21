const products = [
    {
        id: "rm01",
        name: "Razer Viper V3 Pro",
        description: "",
        stock: "",
        price: "160",
        image: "img/Razer Viper V3 Pro.png",
        category: "Mouse"
    },
    {
        id: "rm02",
        name: "Razer DeathAdder V3 Pro",
        description: "",
        stock: "",
        price: "150",
        image: "img/Razer Deathadder V3 Pro.png",
        category: "Mouse"
    },
    {
        id: "rk01",
        name: "Razer Huntsman V3 Pro",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae numquam asperiores nam minus deserunt in itaque, soluta consequatur autem error odit quae porro. Doloremque id laudantium, iste sed quidem enim!",
        stock: "",
        price: "250",
        image: "img/Razer Blackwidow V3 Pro.jpg",
        category: "Keyboard"
    },
    {
        id: "rk02",
        name: "Razer Huntsman Mini",
        description: "",
        stock: "",
        price: "120",
        image: "img/Razer Huntsman Mini.webp",
        category: "Keyboard"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export { getProducts }