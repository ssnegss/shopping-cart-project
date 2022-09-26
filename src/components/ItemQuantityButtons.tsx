import { Button } from "react-bootstrap";

interface quantityButtonsProps {
  quantity: number;
}

export const ItemQuantityButtons = (props: quantityButtonsProps) => {
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{ gap: ".5rem" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ gap: ".5rem" }}
      >
        <Button>-</Button>
        <div>
          <span className="fs-3">{props.quantity}</span>
          in cart
        </div>
        <Button>+</Button>
      </div>
      <Button variant="danger" size="sm">
        remove
      </Button>
    </div>
  );
};
