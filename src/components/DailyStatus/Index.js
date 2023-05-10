import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Chart from "react-apexcharts";
import image from "../../assets/Star 1.png";
import image2 from "../../assets/Frame 16.png";
import image3 from "../../assets/Frame 17.png";
import image4 from "../../assets/Frame 15.png";
import image5 from "../../assets/Frame 18.png";
import polygon from "../../assets/Polygon 1.png";
import elipsis from "../../assets/Ellipse 20.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./dailystatus.css";

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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 30px",
        }}
      >
        <div className="left">
          <div className="inner-left">
            <h4>Daily Status</h4>
          </div>
          <div className="inner-right">
            <Button className="button" size="lg">
              Daily Task
            </Button>
            <Button className="button" size="lg">
              Filter
            </Button>
          </div>
        </div>

        <div className="right">
          <div className="inner-left">
            <h4>My Teams</h4>
          </div>
          <div className="inner-right">
            <Button className="button" size="lg">
              View All
            </Button>
          </div>
        </div>
      </div>
      <div className="calender-container">
        <div className="calender">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="700"
            height={370}
          />
        </div>
        <div className="card-container">
          <CardGroup>
            <Card style={{ width: "700px", height: "400px" }}>
              <div className="upper">
                <img src={image} alt="" className="star-image" />
                <div className="image-container">
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                </div>
              </div>
              <Card.Body>
                <Card.Title>SportsZar Fantasy </Card.Title>
                <Card.Text style={{ marginBottom: "10px" }}>
                  <div className="image-div">
                    <img src={image3} alt="" />
                    <p>Ashley Robbinns</p>
                  </div>
                  <div className="image-div">
                    <img src={image2} alt="" />
                    <p>Katie Roger</p>
                  </div>
                </Card.Text>
                <button type="button" class="btn btn-light">
                  Website
                </button>
                <button type="button" class="btn btn-light">
                  Marketing
                </button>
              </Card.Body>
              <Card.Footer>
                <div className="button-div">
                  <button type="button" class="btn btn-light">
                    Manage
                  </button>
                  <button type="button" class="button">
                    Go To Team
                  </button>
                </div>
              </Card.Footer>
            </Card>
            <Card style={{ width: "700px", height: "400px" }}>
              <div className="upper">
                <img src={elipsis} alt="" className="star-image" />
                <div className="image-container">
                  <img src={image4} alt="" />
                  <img src={image5} alt="" />
                </div>
              </div>
              <Card.Body>
                <Card.Title>One Plus Technologies</Card.Title>
                <Card.Text style={{ marginBottom: "10px" }}>
                  <div className="image-div">
                    <img src={image5} alt="" />
                    <p>Omar Abdullah</p>
                  </div>
                  <div className="image-div">
                    <img src={image4} alt="" />
                    <p>Joshua Martinez</p>
                  </div>
                </Card.Text>
                <button type="button" class="btn btn-light">
                  App
                </button>
                <button type="button" class="btn btn-light">
                  Development
                </button>
              </Card.Body>
              <Card.Footer>
                <div className="button-div">
                  <button type="button" class="btn btn-light">
                    Manage
                  </button>
                  <button type="button" class="button">
                    Go To Team
                  </button>
                </div>
              </Card.Footer>
            </Card>
            <Card style={{ width: "700px", height: "400px" }}>
              <div className="upper">
                <img src={polygon} alt="" className="star-image" />
                <div className="image-container">
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                </div>
              </div>
              <Card.Body>
                <Card.Title>Blaze Marketing</Card.Title>
                <Card.Text style={{ marginBottom: "10px" }}>
                  <div className="image-div">
                    <img src={image3} alt="" />
                    <p>Ashley Robbinns</p>
                  </div>
                  <div className="image-div">
                    <img src={image2} alt="" />
                    <p>Katie Roger</p>
                  </div>
                </Card.Text>
                <button type="button" class="btn btn-light">
                  Website
                </button>
                <button type="button" class="btn btn-light">
                  Marketing
                </button>
              </Card.Body>
              <Card.Footer>
                <div className="button-div">
                  <button type="button" class="btn btn-light">
                    Manage
                  </button>
                  <button type="button" class="button">
                    Go To Team
                  </button>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default Index;
