const products = [
    {
        id: "rm01",
        name: "Razer Viper V3 Pro",
        description: "",
        stock: "",
        price: "160",
        image: "",
        category: "Mouse"
    },
    {
        id: "rm02",
        name: "Razer DeathAdder V3 Pro",
        description: "",
        stock: "",
        price: "150",
        image: "",
        category: "Mouse"
    },
    {
        id: "rk01",
        name: "Razer Huntsman V3 Pro",
        description: "",
        stock: "",
        price: "250",
        image: "",
        category: "Keyboard"
    },
    {
        id: "rk02",
        name: "Razer Huntsman Mini",
        description: "",
        stock: "",
        price: "120",
        image: "",
        category: "Keyboard"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export { getProducts }