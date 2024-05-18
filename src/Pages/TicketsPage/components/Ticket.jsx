import "./Ticket.css";

function Ticket({ name, price, quantity, updateQuantity, max }) {
  return (
    <div className="ticket">
      <div className="ticket-name">{name}</div>
      <div className="ticket-price">{price}₪</div>
      <div className="quantity">
        <div
          className="plus-minus-button"
          style={{ background: quantity === 0 ? "#454c5c" : "" }}
          onClick={() => {
            if (quantity > 0) {
              updateQuantity(name, quantity - 1);
            }
          }}
        >
          -
        </div>
        <div>{quantity}</div>
        <div
          className="plus-minus-button"
          style={{ background: quantity >= max ? "#454c5c" : "" }}
          onClick={() => {
            if (quantity < max) {
              updateQuantity(name, quantity + 1);
            }
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Ticket;
