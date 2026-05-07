import React from "react";
import { Offcanvas, Button, ListGroup, Image } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CartOffcanvas = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  const handleClose = () => setIsCartOpen(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Offcanvas show={isCartOpen} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ListGroup variant="flush" className="mb-3">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center px-0"
                >
                  <div className="d-flex align-items-center">
                    <Image
                      src={item.image}
                      rounded
                      style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
                    />
                    <div>
                      <h6 className="mb-0">{item.title}</h6>
                      <small className="text-muted">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </small>
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Total:</h5>
              <h5>${totalPrice.toFixed(2)}</h5>
            </div>
            <div className="d-grid">
              <Button variant="danger" size="lg">
                Checkout
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
