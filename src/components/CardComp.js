import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { ThemeContext } from "../context/ThemeContext";

function CardComp() {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#444",
    color: theme === "light" ? "#000" : "#fff",
  };

  const linkStyle = {
    color: theme === "light" ? "#000" : "#fff",
  };

  const footerTextStyle = {
    color: theme === "light" ? "#6c757d" : "#d3d3d3",
  };

  return (
    <div className="cardComp">
      <CardGroup>
        <Card style={cardStyle}>
          <Card.Img
            className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp1.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#" style={linkStyle}>
                Kolaborasi Penanganan Banjir Di Jakarta
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" style={footerTextStyle}>24 September 2021</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img
            className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp2.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#" style={linkStyle}>
                Pantau Banjir Melalui JAKI
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" style={footerTextStyle}>20 Oktober 2020</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img
            className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp3.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#" style={linkStyle}>
                Fitur JakPantau Di JAKI
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" style={footerTextStyle}>20 Oktober 2020</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img
            className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp4.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#" style={linkStyle}>
                3 Kanal Informasi Banjir
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" style={footerTextStyle}>20 Oktober 2020</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardComp;
