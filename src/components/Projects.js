import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/belief.png";
import projImg2 from "../assets/img/burger-app.png";
import projImg3 from "../assets/img/dice.png";
import projImg4 from "../assets/img/finance.png";
import projImg5 from "../assets/img/small tasks.png";
import projImg6 from "../assets/img/QA test.png";
import projImg7 from "../assets/img/TAB2 pro1.png";
import projImg8 from "../assets/img/QA UI.png";
import projImg9 from "../assets/img/QA API.png";
import projImg10 from "../assets/img/robots.png";
import projImg11 from "../assets/img/Emerson APP.png";
import projImg12 from "../assets/img/UHO.png";
import projImg13 from "../assets/img/math4jem.png";
import projImg14 from "../assets/img/Flash-card.png";
import projImg15 from "../assets/img/mike.png";
// import projImg16 from "../assets/img/mike.png";
// import projImg17 from "../assets/img/mike.png";
// import projImg18 from "../assets/img/mike.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description: "Math tutorial MERN, GCP, Netlify",
      imgUrl: projImg13,
      viewLink: "https://iridescent-zuccutto-f1c5a6.netlify.app/",
    },
    {
      description: "React mastering project for learning",
      imgUrl: projImg2,
      viewLink: "https://test-3d6a9.firebaseapp.com",
    },
    {
      description: "Vanilla JavaSript game project",
      imgUrl: projImg3,
      viewLink: "https://dorjoo911.github.io/diceGame/",
    },
    {
      description: "ES5 vs ES6 JS finance project",
      imgUrl: projImg4,
      viewLink: "https://dorjoo911.github.io/familyBudgetCalculator/",
    },
    {
      description: "Math Flash cards",
      imgUrl: projImg14,
      viewLink: "https://effervescent-pastelito-bd717d.netlify.app/",
    },
    {
      description: "QA automation frameworks",
      imgUrl: projImg6,
      viewLink: "https://dorjoo911.github.io/myWebPage/",
    },
  ];
  const projectsTab2 = [
    {
      description: "Public add WebSite Irlee.info",
      imgUrl: projImg7,
      viewLink: "https://irlee.info/",
    },
    {
      description: "QA automation, Selemium Java Test framework for UI",
      imgUrl: projImg8,
      viewLink: "https://www.youtube.com/watch?v=4CrEnwZJ6vA&t=2s",
    },
    {
      description: "QA automation, Rest API test framework TestNG",
      imgUrl: projImg9,
      viewLink: "https://www.youtube.com/watch?v=JW_t9Xf0L6A",
    },
    {
      description: "A Church site project",
      imgUrl: projImg1,
      viewLink: "https://wmc-web.vercel.app/",
      //
    },
    {
      description: "Emeron weather API task",
      imgUrl: projImg11,
      viewLink:
        "https://emerson-current-weather-by-city-zip-coord.s3.amazonaws.com/index.html",
    },
    {
      description: "UHO Task",
      imgUrl: projImg12,
      viewLink: "https://relaxed-frangipane-fbb37d.netlify.app/",
    },
  ];
  const projectsTab3 = [
    {
      description: "Web dev fundmental learning tasks",
      imgUrl: projImg5,
      viewLink: "https://dorjoo911.github.io/webDevCS315/",
    },
    {
      description: "Basic React development",
      imgUrl: projImg10,
      viewLink: "https://codesandbox.io/s/github/dorjoo911/searchRobots",
    },

    {
      description: "Project sample will be here ...",
      imgUrl: projImg15, // Add the image URL for the new project
      viewLink: "https://relaxed-frangipane-fbb37d.netlify.app/", // Add the view link for the new project
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I'm excited to showcase some of my ongoing web projects,
                    course assignments, and sample developments to the public.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                viewLink={project.viewLink}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                viewLink={project.viewLink}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="imgag"
      ></img>
    </section>
  );
};
