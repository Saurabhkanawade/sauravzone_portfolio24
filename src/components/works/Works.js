/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import API from "../../assets/recentprojects/lacalle.png";
import Concurrency from "../../assets/recentprojects/lofo.png";
import Microservices from "../../assets/recentprojects/startup.png";
import Testing from "../../assets/recentprojects/veritru.png";
import Database from "../../assets/recentprojects/lacalle.png";


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "API Development",
      description: `Developed RESTful APIs for handling user authentication, CRUD operations, and data processing.
Implemented pagination and filtering to efficiently manage large datasets in API responses`,
      alter: "API Development",
      image: `${API}`,
    },
    {
      id: 2,
      title: "Microservices",
      description: `Developed microservices using Go, following best practices like Domain-Driven Design (DDD) and Clean Architecture.
Implemented communication between microservices using gRPC and message queues like Kafka..`,
      alter: "Microservices",
      image: `${Microservices}`,
    },
    {
      id: 3,
      title: "Concurrency",
      description: `Built a concurrent data processing system using Goroutines and Channels to handle large-scale data efficiently.
Designed a pipeline for processing real-time data streams, ensuring high performance and low latency.`,
      alter: "Concurrency",
      image: `${Concurrency}`,
    },
    {
      id: 4,
      title: "Database Integration",
      description: `Integrated SQL databases with Go applications using SQLBoiler for ORM functionality.
Developed complex queries for data retrieval, including joins, filtering, and aggregation..`,
      alter: "Database Integration",
      image: `${Database}`,
    },
    {
      id: 5,
      title: "Testing and Mocking",
      description: `Wrote extensive unit and integration tests for Go applications, achieving high code coverage.
Utilized mocking libraries to isolate and test components independently, including database interactions and external API calls..`,
      alter: "Testing and Mocking",
      image: `${Testing}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
