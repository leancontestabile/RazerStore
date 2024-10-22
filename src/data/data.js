const products = [
    {
        id: "rm01",
        name: "Razer Viper V3 Pro",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae numquam asperiores nam minus deserunt in itaque, soluta consequatur autem error odit quae porro. Doloremque id laudantium, iste sed quidem enim!",
        stock: "10",
        price: "160",
        image: "/img/Razer Viper V3 Pro.png",
        category: "mouse"
    },
    {
        id: "rm02",
        name: "Razer DeathAdder V3 Pro",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae numquam asperiores nam minus deserunt in itaque, soluta consequatur autem error odit quae porro. Doloremque id laudantium, iste sed quidem enim!",
        stock: "15",
        price: "150",
        image: "/img/Razer Deathadder V3 Pro.png",
        category: "mouse"
    },
    {
        id: "rk01",
        name: "Razer Huntsman V3 Pro",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae numquam asperiores nam minus deserunt in itaque, soluta consequatur autem error odit quae porro. Doloremque id laudantium, iste sed quidem enim!",
        stock: "10",
        price: "250",
        image: "/img/Razer Blackwidow V3 Pro.jpg",
        category: "keyboard"
    },
    {
        id: "rk02",
        name: "Razer Huntsman Mini",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae numquam asperiores nam minus deserunt in itaque, soluta consequatur autem error odit quae porro. Doloremque id laudantium, iste sed quidem enim!",
        stock: "5",
        price: "120",
        image: "/img/Razer Huntsman Mini.webp",
        category: "keyboard"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export { getProducts }