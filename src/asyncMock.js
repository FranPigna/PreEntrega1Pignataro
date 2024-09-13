const products = [
    {
        id: '1',
        name: 'Fija',
        price: 1050,
        img:'https://i.ibb.co/dmVYQrB/fija.png',
        stock: 9,
        description: 'Suspensiones a medida a gusto del cliente',
        category: 'suspension',
    },
    {
        id: '2',
        name: 'Regulable',
        price: 1299,
        img:'https://i.ibb.co/1mnYKxZ/regulable.png',
        stock: 13,
        description: 'Suspensiones con la capacidad de regular 10cm de altura',
        category: 'suspension'
    },
    {
        id: '3',
        name: 'AirRide Black 8mm',
        price: 4049,
        img:'https://i.ibb.co/vhGgtMW/8mm2.png',
        stock: 5,
        description: 'La mejor suspension del mercado, con posibilidad de regular la altura instantaneamente',
        category: 'suspension'
    },
    {
        id: '4',
        name: 'AirRide Black 10mm',
        price: 4799,
        img:'https://i.ibb.co/5597xzP/8mm.png',
        stock: 4,
        description: 'La mejor suspension del mercado, con posibilidad de regular la altura instantaneamente',
        category: 'suspension'
    },
    {
        id: '5',
        name: 'AirRide Black 12mm',
        price: 8230,
        img:'https://i.ibb.co/XZ2gNgz/12mm.png',
        stock: 6,
        description: 'La mejor suspension del mercado, con posibilidad de regular la altura instantaneamente',
        category: 'suspension'
    },
    {
        id: '6',
        name: 'Compresor 160psi',
        price: 799,
        img:'https://i.ibb.co/PN8SM0M/compresor.png',
        stock: 22,
        description: 'Compresor Suspension Neumatica de 160psi',
        category: 'accesorios'
    },
    {
        id: '7',
        name: 'Tanque de aluminio 11L',
        price: 960,
        img:'https://i.ibb.co/3NfBS9x/tanque.png',
        stock: 33,
        description: 'Tanque de aluminio para tu Suspension Neumatica, con capacidad de 11L',
        category: 'accesorios'
    },

    {
        id: '8',
        name: 'Bolsa de aire 6.0',
        price: 310,
        img:'https://i.ibb.co/7YX7K06/bolsa.png',
        stock: 30,
        description: 'Bolsa de aire para tu Suspension Neumatica, de la mejor calidad!',
        category: 'accesorios'
    },
    {
        id: '9',
        name: 'Control Castor AirRide',
        price: 195,
        img:'https://i.ibb.co/wSkPd3N/control.png',
        stock: 110,
        description: 'Control para tu suspension neumatica, compatible con todos los modulos',
        category: 'accesorios'
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

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}