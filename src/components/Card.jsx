import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ header, title, icon, bgColor = "bg-primary" }) => {
  return (
    <div
      className={`card text-white ${bgColor} mb-3`}
      style={{
        height: "100%",
        maxWidth: "20rem",
        minWidth: "15rem",
        width: "100%",
      }}
    >
      <h1 className="card-header text-center">{header}</h1>
      <div className="card-body d-flex justify-content-between align-items-center">
        <h4 className="card-title mb-0">{title}</h4>
        <FontAwesomeIcon icon={icon} style={{ fontSize: "2.5rem" }} />
      </div>
    </div>
  );
};

export default Card;
