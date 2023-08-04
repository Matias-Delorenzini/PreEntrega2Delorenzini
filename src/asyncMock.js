const products = [
    {
        "id": 1,
        "name": "Camiseta Manchester City Titular 23/24",
        "price": 45,
        "category": "premier",
        "img": "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
        "stock": 15
    },
    {
        "id": 2,
        "name": "Camiseta Manchester United Titular 22/23",
        "price": 42,
        "category": "premier",
        "img": "https://www.innovasport.com/medias/jersey-adidas-manchester-united-local-2223-is-H13881-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2hjZi8xMTAzMzU2OTc1NTE2Ni5qcGd8YWVmMzkzYWI1MzdjOTUzZTMzZWUwMmE1ZjEwNDQ0NTE3NjYyYjEzMjRmM2I0YzNmOGExNWQ1ZjkxNDYyOTA0NQ",
        "stock": 12
    },
    {
        "id": 3,
        "name": "Camiseta Arsenal Titular 23/24",
        "price": 38,
        "category": "premier",
        "img": "https://i1.adis.ws/i/ArsenalDirect/mje8028_f?$810x810$&.jpg",
        "stock": 18
    },
    {
        "id": 4,
        "name": "Camiseta AC Milan Titular 23/24",
        "price": 39,
        "category": "seriea",
        "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/770383/01/fnd/THA/fmt/png/AC-Milan-23/24-Home-Jersey",
        "stock": 14
    },
    {
        "id": 5,
        "name": "Camiseta Inter de Milan Titular 22/23",
        "price": 41,
        "category": "seriea",
        "img": "https://store.inter.it/on/demandware.static/-/Sites-inter-master-catalog/default/dw2fccf503/images/large/22N001M0502_01.jpg",
        "stock": 11
    },
    {
        "id": 6,
        "name": "Camiseta AS Roma Titular 22/23",
        "price": 37,
        "category": "seriea",
        "img": "https://store.asroma.com/media/catalog/product/m/a/maglia_home_elite_spqr_uomo_2022_23.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1000&width=1250&canvas=1250:1000",
        "stock": 20
    },
    {
        "id": 7,
        "name": "Camiseta Bayern Munich Titular 23/2",
        "price": 47,
        "category": "bundesliga",
        "img": "https://img.fcbayern.com/image/upload/f_auto,q_auto,w_384/eCommerce/produkte/31701",
        "stock": 17
    },
    {
        "id": 8,
        "name": "Camiseta Borussia Dortmund Titular 23/2",
        "price": 43,
        "category": "bundesliga",
        "img": "https://www.bvbonlineshop.com/media/image/2b/ca/be/76390-645dfca2b3df3_200x200.jpg",
        "stock": 13
    },
    {
        "id": 9,
        "name": "Camiseta Real Madrid Titular Manga Larga 23/24",
        "price": 46,
        "category": "laliga",
        "img": "https://us.shop.realmadrid.com/cdn/shop/products/RMCFMZ0128_08_c4faf998-43da-4ba2-97c1-4a09d86dfe8c_500x480.jpg?v=1686746719",
        "stock": 10
    },
    {
        "id": 10,
        "name": "Camiseta Barcelona Titular 23/24",
        "price": 50,
        "category": "laliga",
        "img": "https://www.soccerlord.se/wp-content/uploads/2018/06/Barcelona-Home-Kids-Football-Kit-23-24.jpg",
        "stock": 10
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}