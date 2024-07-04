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
        <h4>Infografis</h4>
        <hr className="titleHrCardComp" />
      </div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/card/cardComp1.jpeg")}
          />
          <Card.Body>
            <Card.Title><a className="linkCardComp" href="#">JADWAL PPDB JENJANG SMK TAHUN 2022</a></Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">30 Mei 2022</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/card/cardComp2.jpeg")}
          />
          <Card.Body>
            <Card.Title><a className="linkCardComp" href="#">JADWAL PPDB JENJANG SMA TAHUN 2022</a></Card.Title>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">30 Mei 2022</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/card/cardComp3.jpeg")}
          />
          <Card.Body>
            <Card.Title><a className="linkCardComp" href="#">JADWAL PPDB JENJANG SMP TAHUN 2022</a></Card.Title>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">30 Mei 2022</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/card/cardComp4.jpeg")}
          />
          <Card.Body>
            <Card.Title><a className="linkCardComp" href="#">JADWAL PPDB JENJANG SD TAHUN 2022</a></Card.Title>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">30 Mei 2022</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardComp;
