import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, viewLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt={title}
          className="proj-img"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            {description} <a href={viewLink}>view</a>
          </span>
        </div>
      </div>
    </Col>
  );
};
