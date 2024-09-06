const products = [
    {
        id: '1',
        name: '',
        price: 1000,
        img:'',
        stock: 10,
        descripcion: ''
    },
    {
        id: '2',
        name: '',
        price: 2000,
        img:'',
        stock: 10,
        descripcion: ''
    },
    {
        id: '3',
        name: '',
        price: 3000,
        img:'',
        stock: 10,
        descripcion: ''
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}