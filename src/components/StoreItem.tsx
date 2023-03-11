import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { ItemQuantityButtons } from "./ItemQuantityButtons";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  images: string;
};

export const StoreItem = ({ id, title, price, images }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const cartQuantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={images[1]}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {cartQuantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              {" "}
              + add to cart{" "}
            </Button>
          ) : (
            <ItemQuantityButtons
              quantity={cartQuantity}
              onPlusClick={() => increaseCartQuantity(id)}
              onMinusClick={() => decreaseCartQuantity(id)}
              onRemoveClick={() => removeFromCart(id)}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
