import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { StoreItems } from "../data/StoreItems"

export const Store = () => {
  const storeItems = StoreItems()

  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
