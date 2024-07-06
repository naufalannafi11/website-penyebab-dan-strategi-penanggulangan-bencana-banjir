import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardComp() {
  return (
    <div className="cardComp">
      <div className="hrCardComp">
        <hr />
      </div>
      <div className="titleCardComp">
        <h4>Infografik</h4>
        <hr className="titleHrCardComp" />
      </div>
      <CardGroup>
        <Card>
          <Card.Img
            className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp1.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#">
                Kolaborasi Penanganan Banjir Di Jakarta
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">24 September 2021</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
          className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp2.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#">
                Pantau Banjir Melalui JAKI
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">20 Oktober 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
          className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp3.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#">
                Fitur JakPantau Di JAKI
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">20 Oktober 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
          className="card-img-custom"
            variant="top"
            src={require("../assets/img/card/cardComp4.jpeg")}
          />
          <Card.Body>
            <Card.Title>
              <a className="linkCardComp" href="#">
                3 Kanal Informasi Banjir
              </a>
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">20 Oktober 2020</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardComp;
