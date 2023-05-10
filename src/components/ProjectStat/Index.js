import React from "react";
import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./projectstat.css";

import { data } from "../../data";
import Chart from "react-apexcharts";

const Index = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["SUN", "MON", "TUE", "WED", "THUS", "FRI", "SAT"],
      },
      fill: {
        colors: ["#7a00f3fc", "#DF4EF7"],
      },
      title: {
        text: "Revenue($)",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
      {
        name: "series-2",
        data: [3, 50, 25, 55, 40, 65, 15],
      },
    ],
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
        <div className="rights">
          <div className="btn-1">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn btn-seconday">
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
            <Button value="Export" className="btn-color">
              Export
            </Button>
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
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="800"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
