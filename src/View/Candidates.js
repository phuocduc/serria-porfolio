import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Candidates() {
  const selector = useSelector(state => state);
  const [candidates, setCandidates] = useState([]);
  console.log("candidata", candidates);
  useEffect(() => {
    const getCandidates = async () => {
      const res = await fetch(`http://localhost:3001/candidates`);
      const data = await res.json();
      setCandidates(data);
    };
    getCandidates();
  }, []);

  const onDeleteHandle = async (id) =>{
    const config = {
      method: "DELETE",
      headers: {'content-type': 'application/json'},
     
    }
    fetch(`http://localhost:3001/candidates/` + id,config)
    const newData = candidates.filter(candidate=>candidate.id!==id)
    setCandidates(newData)
  }
  return (
    <Container>
      Welcom {selector && selector.email}
      <Row>
        {candidates &&
          candidates.map(
            ({
              gender,
              country,
              id,
              email,
              company,
              job_title,
              first_name,
              last_name,
              photo_url
            }) => {
              return (
                <Card className="each-card" key={id}>
                  <Card.Img
                    className="img_card"
                    variant="top"
                    src={photo_url}
                  />
                  <Card.Body>
                    <Card.Title>{first_name + " " + last_name}</Card.Title>

                    <Card.Text>{id}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{gender}</ListGroupItem>
                    <ListGroupItem>{country}</ListGroupItem>
                    <ListGroupItem>{email}</ListGroupItem>
                    <ListGroupItem>{company}</ListGroupItem>
                    <ListGroupItem>{job_title}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={`/candidates/${id}/edit`}>Edit</Card.Link>

                    <Card.Link href={`/candidates/${id}`} onClick={()=>onDeleteHandle(id)}>Delete</Card.Link>
                  </Card.Body>
                </Card>
              );
            }
          )}
      </Row>
    </Container>
  );
}
