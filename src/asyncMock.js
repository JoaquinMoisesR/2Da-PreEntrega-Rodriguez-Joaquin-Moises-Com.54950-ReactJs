const products = [
    {
        id:'1',
        name: 'SOJA',
        price: 95000,
        img: 'https://media.ambito.com/p/0a48630e52c33b80e76864b5ee4d6453/adjuntos/239/imagenes/039/919/0039919848/sojajpg.jpg',
        stock: 10,
        category: 'ExpellerSoja',
        description: 'Soja de primera cosecha, area pampa humeda, precio en USD por tonelada, Cordoba, Argentina'
    },
    {
        id:'2',
        name: 'EXPELLER EXTRUSADO DE SOJA',
        price: 550000,
        img: 'https://asagro.com.ar/wp-content/uploads/2018/04/asagro.com_.ar-productos-expeller-soja.jpg',
        stock: 10,
        category: 'ExpellerSoja',
        description: 'Expeller extrusado de soja, precio en USD por tonelada, area norte de Santa Fe, Argentina'
    },
    {
        id:'3',
        name: 'MAIZ',
        price: 89000,
        img: 'http://www.muchostrucos.com/wp-content/uploads/2016/08/barba_maiz.jpg',
        stock: 10,
        category: 'ExpellerMaiz',
        description: 'Maiz, primera coseacha, precio en USD por tonelada, area pampa humeda, Cordoba, Argentina'
    },
    {
        id:'4',
        name: 'EXPELLER EXTRUSADO DE MAIZ',
        price: 145000,
        img: 'https://nafosa.es/wp-content/uploads/2021/01/007pellet-paja-nafosa.jpg',
        stock: 10,
        category: 'ExpellerMaiz',
        description: 'Extrusado de maiz, precio en Pesos argentinos por tonelada, directo para consumo avicola, bovino, porcino. Zona sur de Cordoba, Argentina'
    },
    {
        id:'5',
        name: 'ACEITE DE SOJA CRUDO',
        price: 6500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_709352-MLM25730597428_072017-W.jpg',
        stock: 10,
        category: 'aceiteBiodiesel',
        description: 'Aceite de soja crudo, remanente de extrusion, precio por recipiente de 20 litros, para industria del biodiesel'
    },
    {
        id:'6',
        name: 'ACEITE DE MAIZ CRUDO',
        price: 5300,
        img: 'https://evaporadoresindustriales.grupovento.com/wp-content/uploads/2017/09/biodi%C3%A9sel.jpg',
        stock: 10,
        category: 'aceiteBiodiesel',
        description: 'Aceite de maiz crudo o desgomado, remanente de extrusion, precio por recipiente de 20 litro, para industria del biodiesel'
    },
]
export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
};