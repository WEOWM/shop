import React from "react";
import { useCart } from "../CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  // calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #000" }}>
                <th style={{ textAlign: "left", padding: "10px" }}>Image</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Product</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Price</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Quantity</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ccc" }}>
                  <td style={{ padding: "10px" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px" }}>{item.title}</td>
                  <td style={{ textAlign: "center", padding: "10px" }}>
                    ${item.price}
                  </td>
                  <td style={{ textAlign: "center", padding: "10px" }}>
                    {item.quantity}
                  </td>
                  <td style={{ textAlign: "center", padding: "10px" }}>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={styles.removeBtn}
                    >
                      -
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      style={styles.addBtn}
                    >
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total section */}
          <div
            style={{
              marginTop: "20px",
              textAlign: "right",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

// Button styles
const styles = {
  addBtn: {
    padding: "6px 12px",
    border: "1px solid #28a745",
    background: "#28a745",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
    marginLeft: "5px",
    transition: "all 0.3s ease",
  },
  removeBtn: {
    padding: "6px 12px",
    border: "1px solid #dc3545",
    background: "#dc3545",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
    marginRight: "5px",
    transition: "all 0.3s ease",
  },
};

// Add hover effect via inline CSS
Object.assign(styles.addBtn, {
  ":hover": {
    background: "#218838",
  },
});
Object.assign(styles.removeBtn, {
  ":hover": {
    background: "#c82333",
  },
});

export default Cart;
