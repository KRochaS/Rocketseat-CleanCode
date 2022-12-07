// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductsList() {
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([])

  function searchProduto(search: string) {
    const productFiltered = productList.filter(product => product.title.includes(search))

    setProductsFiltered(productFiltered)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduto(e.target.value)} />

      {productsFiltered.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


