import axios from 'axios'

// 공통 설정에 대해서 인스턴스화
const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

// products
function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}
function fetchProductsByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

// carts
function fetchCartItems() {
  return instance.get('/carts')
}
function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

export {
  fetchProductById,
  fetchProductsByKeyword,
  fetchCartItems,
  createCartItem,
}
