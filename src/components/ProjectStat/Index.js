import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./projectstat.css";
import { data } from "../../data";

const Index = () => {
    const [chartData, setChartData] = useState({
        // ...chart data
      });
  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 40px",
        }}
      >
        <div className="left">
          <h4>Project Statistics</h4>
        </div>
        <div className="right">
          <div className="btn-1">
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                Week
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="btn-2">
            <Button
              as="input"
              type="submit"
              value="Submit"
              className="btn-color"
            />
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="cards">
          <Row xs={1} md={2} className="g-2">
            {data.map((item, idx) => (
              <Col key={idx}>
                <Card className="w-10">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.count}</Card.Text>
                    <Card.Text>{item.category}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
