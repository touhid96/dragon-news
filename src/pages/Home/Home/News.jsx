import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;

  return (
    <div>
      <h1>This is news part</h1>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">All News in this category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
