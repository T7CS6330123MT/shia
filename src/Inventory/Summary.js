import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { ReactComponent as SummaryIcon} from "../Assets/SummaryIcon.svg";
import { ReactComponent as NotificationsIcon} from "../Assets/NotificationsIcon.svg";

export default function Summary() {

  return (
    <Row xs={3} md={3} lg={4} className="g-4" style={{width: "65%", margin: "0 auto auto 0", padding:"0"}}>
      <Col>
        <Card>
          <Card.Header className={"text-center"}>Inventory Summary</Card.Header>
          <Row style={{margin: "0", padding:"0"}}>
            <SummaryIcon style={{width:"64px", height:"64px", margin:"auto"}}/>
          </Row>
          <Card.Body>
            <Card.Title className={"text-center"}>868</Card.Title>
            <Card.Text className={"text-center"}>
              The overall total number of items in the inventory.
            </Card.Text>
          </Card.Body>
          <Card.Footer className={"text-center"}>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header className={"text-center"}>Notifications Summary</Card.Header>
          <Row style={{margin: "0", padding:"0"}}>
            <NotificationsIcon style={{width:"64px", height:"64px", margin:"auto"}}/>
          </Row>
          <Card.Body>
            <Card.Title className={"text-center"}>2</Card.Title>
            <Card.Text className={"text-center"}>
              The overall total number of notifications.
            </Card.Text>
          </Card.Body>
          <Card.Footer className={"text-center"}>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}