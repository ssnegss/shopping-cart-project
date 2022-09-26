import { Button } from "react-bootstrap";

type quantityButtonsProps = {
  quantity: number;
  onPlusClick: React.MouseEventHandler;
  onMinusClick: React.MouseEventHandler;
  onRemoveClick: React.MouseEventHandler;
};

export const ItemQuantityButtons = ({
  quantity,
  onPlusClick,
  onMinusClick,
  onRemoveClick,
}: quantityButtonsProps) => {
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{ gap: ".5rem" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ gap: ".5rem" }}
      >
        <Button onClick={onMinusClick}>-</Button>
        <div>
          <span className="fs-3">{quantity}</span>
          in cart
        </div>
        <Button onClick={onPlusClick}>+</Button>
      </div>
      <Button onClick={onRemoveClick} variant="danger" size="sm">
        remove
      </Button>
    </div>
  );
};
