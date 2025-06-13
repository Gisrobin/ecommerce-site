import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";

// Add at least 20 TV and Phone products to your local products array
const products = [
  // TVs
  {
    id: "tv-1",
    name: "Samsung 55\" 4K Smart TV",
    category: "TV",
    price: 799.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/ua55au7000uxzn/gallery/levant-uhd-au7000-ua55au7000uxzn-530384282?$650_519_PNG$"
  },
  {
    id: "tv-2",
    name: "LG 65\" OLED TV",
    category: "TV",
    price: 1499.99,
    image: "https://www.lg.com/us/images/tvs/md07501379/gallery/desktop-01.jpg"
  },
  {
    id: "tv-3",
    name: "Sony Bravia 75\" 4K",
    category: "TV",
    price: 1999.99,
    image: "https://www.sony.com/image/sonyview1.jpg"
  },
  {
    id: "tv-4",
    name: "TCL 50\" Roku TV",
    category: "TV",
    price: 399.99,
    image: "https://www.tcl.com/usca/content/dam/tcl/product/tv/4-series/50s435/50s435-1.png"
  },
  {
    id: "tv-5",
    name: "Vizio 70\" 4K UHD",
    category: "TV",
    price: 899.99,
    image: "https://www.vizio.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/v/i/vizio-70-inch-4k-tv.jpg"
  },
  {
    id: "tv-6",
    name: "Hisense 58\" UHD TV",
    category: "TV",
    price: 499.99,
    image: "https://www.hisense-usa.com/sites/default/files/2021-03/58R6E3_Front.png"
  },
  {
    id: "tv-7",
    name: "Philips 43\" LED TV",
    category: "TV",
    price: 299.99,
    image: "https://images.philips.com/is/image/PhilipsConsumer/43PFL5703_F7-IMS-en_US?$jpglarge$&wid=1250"
  },
  {
    id: "tv-8",
    name: "Sharp 60\" 4K TV",
    category: "TV",
    price: 699.99,
    image: "https://www.sharpusa.com/portals/0/Images/Products/LC-60LE660U/LC-60LE660U_front.png"
  },
  {
    id: "tv-9",
    name: "Panasonic 50\" 4K",
    category: "TV",
    price: 599.99,
    image: "https://www.panasonic.com/content/dam/pim/au/en/TH/TH-50HX700A/TH-50HX700A-variation-1.png"
  },
  {
    id: "tv-10",
    name: "Insignia 32\" Fire TV",
    category: "TV",
    price: 179.99,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407160_sd.jpg"
  },
  {
    id: "tv-11",
    name: "Samsung 85\" QLED",
    category: "TV",
    price: 2999.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/qn85q60aauxzn/gallery/levant-qled-q60a-qn85q60aauxzn-530384282?$650_519_PNG$"
  },
  {
    id: "tv-12",
    name: "LG 77\" NanoCell",
    category: "TV",
    price: 2499.99,
    image: "https://www.lg.com/us/images/tvs/md07501379/gallery/desktop-02.jpg"
  },
  {
    id: "tv-13",
    name: "Sony 65\" X900H",
    category: "TV",
    price: 1399.99,
    image: "https://www.sony.com/image/sonyview2.jpg"
  },
  {
    id: "tv-14",
    name: "TCL 75\" QLED",
    category: "TV",
    price: 1199.99,
    image: "https://www.tcl.com/usca/content/dam/tcl/product/tv/6-series/75r635/75r635-1.png"
  },
  {
    id: "tv-15",
    name: "Vizio 55\" OLED",
    category: "TV",
    price: 1299.99,
    image: "https://www.vizio.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/v/i/vizio-55-inch-oled-tv.jpg"
  },
  {
    id: "tv-16",
    name: "Hisense 70\" 4K",
    category: "TV",
    price: 899.99,
    image: "https://www.hisense-usa.com/sites/default/files/2021-03/70A6G_Front.png"
  },
  {
    id: "tv-17",
    name: "Philips 65\" Ambilight",
    category: "TV",
    price: 1599.99,
    image: "https://images.philips.com/is/image/PhilipsConsumer/65OLED803_12-IMS-en_GB?$jpglarge$&wid=1250"
  },
  {
    id: "tv-18",
    name: "Sharp 50\" LED",
    category: "TV",
    price: 399.99,
    image: "https://www.sharpusa.com/portals/0/Images/Products/LC-50LBU591U/LC-50LBU591U_front.png"
  },
  {
    id: "tv-19",
    name: "Panasonic 65\" OLED",
    category: "TV",
    price: 2099.99,
    image: "https://www.panasonic.com/content/dam/pim/au/en/TH/TH-65HZ1000U/TH-65HZ1000U-variation-1.png"
  },
  {
    id: "tv-20",
    name: "Insignia 43\" 4K",
    category: "TV",
    price: 249.99,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407161_sd.jpg"
  },

  // Phones
  {
    id: "phone-1",
    name: "iPhone 14 Pro",
    category: "Phone",
    price: 1099.99,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946"
  },
  {
    id: "phone-2",
    name: "Samsung Galaxy S23 Ultra",
    category: "Phone",
    price: 1199.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-ultra-s918-sm-s918bzkgmea-thumb-534881883?$344_344_PNG$"
  },
  {
    id: "phone-3",
    name: "Google Pixel 7 Pro",
    category: "Phone",
    price: 899.99,
    image: "https://store.google.com/product/images/phone_pixel_7_pro.png"
  },
  {
    id: "phone-4",
    name: "OnePlus 11",
    category: "Phone",
    price: 799.99,
    image: "https://image01.oneplus.net/ebp/202302/03/1-m00-3c-6e-rb8bwmqkq2eabkqfaadwzv7v2xg276_840_840.png"
  },
  {
    id: "phone-5",
    name: "Xiaomi 13 Pro",
    category: "Phone",
    price: 749.99,
    image: "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-13-pro/specs01.png"
  },
  {
    id: "phone-6",
    name: "Sony Xperia 1 IV",
    category: "Phone",
    price: 999.99,
    image: "https://www.sony.com/image/sonyview3.jpg"
  },
  {
    id: "phone-7",
    name: "Motorola Edge 30 Ultra",
    category: "Phone",
    price: 699.99,
    image: "https://motorolaus.vtexassets.com/arquivos/ids/158982-800-auto?v=638104849273200000&width=800&height=auto&aspect=true"
  },
  {
    id: "phone-8",
    name: "Nokia X30 5G",
    category: "Phone",
    price: 599.99,
    image: "https://www.nokia.com/phones/sites/default/files/styles/scale_720_no_crop/public-nokia-x30-5g-hero.png"
  },
  {
    id: "phone-9",
    name: "Huawei P50 Pro",
    category: "Phone",
    price: 899.99,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/img/kv-phone.png"
  },
  {
    id: "phone-10",
    name: "Asus ROG Phone 6",
    category: "Phone",
    price: 1099.99,
    image: "https://dlcdnwebimgs.asus.com/gain/6e6e7e2c-7e4e-4b2a-8c3e-7e7e7e7e7e7e/"
  },
  {
    id: "phone-11",
    name: "Realme GT 2 Pro",
    category: "Phone",
    price: 649.99,
    image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt2-pro-1.jpg"
  },
  {
    id: "phone-12",
    name: "Oppo Find X5 Pro",
    category: "Phone",
    price: 899.99,
    image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x5-pro-1.jpg"
  },
  {
    id: "phone-13",
    name: "Vivo X80 Pro",
    category: "Phone",
    price: 799.99,
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x80-pro-1.jpg"
  },
  {
    id: "phone-14",
    name: "Apple iPhone SE (2022)",
    category: "Phone",
    price: 429.99,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-2022-select-202203?wid=940&hei=1112&fmt=png-alpha&.v=1646415838921"
  },
  {
    id: "phone-15",
    name: "Samsung Galaxy Z Fold4",
    category: "Phone",
    price: 1799.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/sm-f936bzadmea/gallery/levant-galaxy-z-fold4-f936-sm-f936bzadmea-thumb-533642964?$344_344_PNG$"
  },
  {
    id: "phone-16",
    name: "Google Pixel 6a",
    category: "Phone",
    price: 449.99,
    image: "https://store.google.com/product/images/phone_pixel_6a.png"
  },
  {
    id: "phone-17",
    name: "OnePlus Nord 2T",
    category: "Phone",
    price: 399.99,
    image: "https://image01.oneplus.net/ebp/202205/19/1-m00-3c-6e-rb8bwmqkq2eabkqfaadwzv7v2xg276_840_840.png"
  },
  {
    id: "phone-18",
    name: "Xiaomi Redmi Note 11",
    category: "Phone",
    price: 229.99,
    image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-11/specs01.png"
  },
  {
    id: "phone-19",
    name: "Sony Xperia 10 IV",
    category: "Phone",
    price: 499.99,
    image: "https://www.sony.com/image/sonyview4.jpg"
  },
  {
    id: "phone-20",
    name: "Motorola Moto G Power",
    category: "Phone",
    price: 199.99,
    image: "https://motorolaus.vtexassets.com/arquivos/ids/158983-800-auto?v=638104849273200000&width=800&height=auto&aspect=true"
  }
];

function ProductCard({ product, addToCart }) {
  const cardStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    padding: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer"
  };

  const imageStyle = {
    height: "200px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "16px"
  };

  const buttonStyle = {
    background: "linear-gradient(to right, #3b82f6, #6366f1)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "12px",
    marginTop: "auto",
    border: "none"
  };

  return (
    <div style={cardStyle} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h2 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 8px 0", color: "#111827" }}>{product.name}</h2>
      <p style={{ fontSize: "16px", margin: "0 0 16px 0", color: "#6b7280" }}>{product.category}</p>
      <p style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 16px 0", color: "#2563eb" }}>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} style={buttonStyle}>
        <FaShoppingCart style={{ marginRight: "8px", verticalAlign: "middle" }} />
        Add to Cart
      </button>
    </div>
  );
}

function Home({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from DummyJSON API
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => {
        const mapped = data.products.map(item => ({
          id: `api-${item.id}`,
          name: item.title,
          category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
          price: item.price,
          image: Array.isArray(item.images) ? item.images[0] : item.thumbnail
        }));
        setApiProducts(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allProducts = [...apiProducts];
  const categories = ["All", ...new Set(allProducts.map(p => p.category))];
  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div style={{ background: "linear-gradient(to bottom, #f3f4f6, #ffffff)", minHeight: "100vh", padding: "24px", paddingTop: "120px" }}>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#0ea5e9",
          marginBottom: "32px",
          letterSpacing: "2px",
          textShadow: "2px 2px 8px #bae6fd, 0 4px 24px #38bdf8",
          fontFamily: "'Pacifico', cursive, 'Segoe UI', sans-serif"
        }}
      >
        <span style={{
          background: "linear-gradient(90deg, #0ea5e9, #6366f1, #f472b6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          padding: "0 16px",
          borderRadius: "16px",
          boxShadow: "0 2px 16px #bae6fd"
        }}>
          Welcome to <span style={{ color: "#f472b6", fontWeight: "900", letterSpacing: "4px", fontSize: "56px", textShadow: "0 2px 12px #f472b6" }}>Robin's Store</span>
        </span>
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 16px",
              borderRadius: "9999px",
              fontWeight: "500",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              border: selectedCategory === cat ? "none" : "1px solid #d1d5db",
              backgroundColor: selectedCategory === cat ? "#2563eb" : "white",
              color: selectedCategory === cat ? "white" : "#1f2937"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: "center", fontSize: "22px", color: "#6366f1" }}>Loading products...</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "32px" }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const isProductInCart = prevCart.find(item => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "0",
            background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
            boxShadow: "0 2px 16px rgba(56,189,248,0.10)",
            zIndex: 1000
          }}
        >
          <nav
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 32px",
              borderRadius: "0 0 24px 24px",
              boxShadow: "0 4px 24px #bae6fd"
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "2px",
                fontFamily: "'Pacifico', cursive, 'Segoe UI', sans-serif",
                textShadow: "0 2px 12px #38bdf8"
              }}
            >
              <span style={{
                background: "linear-gradient(90deg, #fff 30%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
                fontSize: "36px"
              }}>
                Robin's Store
              </span>
            </Link>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "18px",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.08)",
                  transition: "background 0.2s",
                  boxShadow: "0 2px 8px rgba(56,189,248,0.10)"
                }}
              >
                <FaHome style={{ verticalAlign: "middle" }} />
                Home
              </Link>
              <Link
                to="/cart"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "18px",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.08)",
                  transition: "background 0.2s",
                  boxShadow: "0 2px 8px rgba(56,189,248,0.10)"
                }}
              >
                <FaShoppingCart style={{ verticalAlign: "middle" }} />
                Cart <span style={{
                  background: "#f472b6",
                  color: "#fff",
                  borderRadius: "9999px",
                  padding: "2px 10px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginLeft: "2px"
                }}>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </Link>
            </div>
          </nav>
        </header>

        <main style={{ paddingTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function CartPage({ cart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [, setForceUpdate] = useState(0); // For forcing re-render after delete

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      cart.length = 0;
      setForceUpdate(n => n + 1); // Force re-render
    }, 2000);
  };

  // Delete function for cart
  const handleDelete = (id) => {
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) {
      cart.splice(idx, 1);
      setForceUpdate(n => n + 1); // Force re-render
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", backgroundColor: "white" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "24px", color: "#111827", textAlign: "center" }}>
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "18px", color: "#6b7280", padding: "48px 0" }}>
          Your cart is empty. Start adding some products!
        </div>
      ) : (
        <>
          <div style={{ marginBottom: "32px" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", borderBottom: "1px solid #e5e7eb" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={item.image} alt={item.name} style={{ width: "64px", height: "64px", objectFit: "cover", borderRadius: "8px", marginRight: "16px" }} />
                  <div>
                    <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 4px 0", color: "#111827" }}>{item.name}</h2>
                    <p style={{ fontSize: "16px", margin: "0", color: "#6b7280" }}>{item.category}</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 4px 0", color: "#2563eb" }}>${item.price.toFixed(2)}</p>
                  <p style={{ fontSize: "16px", margin: "0", color: "#6b7280" }}>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      marginTop: "8px",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background: "#f472b6",
                      color: "#fff",
                      border: "none",
                      fontWeight: "500",
                      cursor: "pointer",
                      fontSize: "14px"
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "500", margin: "0", color: "#111827" }}>
              Total Amount:{" "}
              <span style={{ color: "#2563eb", fontWeight: "600" }}>${totalAmount}</span>
            </h2>
            <button
              onClick={handlePlaceOrder}
              disabled={orderPlaced}
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                fontWeight: "500",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                cursor: orderPlaced ? "not-allowed" : "pointer",
                opacity: orderPlaced ? 0.7 : 1,
                transition: "background-color 0.2s",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}
            >
              {orderPlaced ? "Order Placed!" : "Place Order"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}