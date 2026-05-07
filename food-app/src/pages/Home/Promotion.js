import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

export default function Promotion() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Gather your friends and family around a delicious meal. Our priority 
                is serving you freshly cooked, high-quality, and flavorful food that 
                leaves everyone at the table completely satisfied and eager for more.
              </p>
              <ul>
                <li>
                  <p>
                    A delicious blend of fresh vegetables, melted cheese, and 
                    perfectly seasoned patties that melt right in your mouth.
                  </p>
                </li>
                <li>
                  <p>Fresh ingredients sourced daily from local trusted farms.</p>
                </li>
                <li>
                  <p>
                    Packed with rich flavors and generous portions to satisfy 
                    even the biggest of appetites at any time of the day.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
