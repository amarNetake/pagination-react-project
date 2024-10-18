import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import PageNav from "./components/PageNav";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductsPage = () => {
  const { page } = useParams<{ page: string }>(); // Get page from URL parameters
  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const currentPage = parseInt(page || "1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProductsResponse>("https://dummyjson.com/products?limit=100");
        response?.data && setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setProducts(null); // Handle error by resetting products
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  function setPageHandler(page: number) {
    // Use routing (handled via Link/NavLink in PageNav)
    navigate(`/${page}`);
  }

  if (!products) return <h1>Loading...</h1>;

  return (
    <>
      {products && (
        <div className="products w-full h-fit flex flex-wrap justify-center gap-3 px-3">
          {products.products.slice((currentPage - 1) * 10, currentPage * 10).map((product: Product) => {
            return (
              <Card
                key={product.id}
                productId={product.id}
                productImage={product.images.length > 0 ? product.images[0] : undefined}
                productTitle={product.title}
                productPrice={product.price}
                productRating={product.rating}
              />
            );
          })}
        </div>
      )}
      <div className="relative">
      {products && products.products.length > 0 && (
        <PageNav totalPages={Math.ceil(products.products.length / 10)} currentPage={currentPage} />
      )}
      </div>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/:page" element={<ProductsPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
