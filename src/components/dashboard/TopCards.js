import { Card, CardBody } from "reactstrap";

const TopCards = (props) => {
  const { earning, subtitle, bg, backgroundColor, imgSrc } = props;

  return (
    <Card style={{ backgroundColor: backgroundColor }}>
      <CardBody>
        <div className="d-flex align-items-center">
          {imgSrc ? (
            <div className={`circle-box lg-box d-inline-block ${bg}`}>
              <img
                src={imgSrc}
                alt="top-card-img"
                style={{
                  width: "40px", // Adjust size as needed
                  height: "40px", // Adjust size as needed
                  objectFit: "cover", // Ensures image covers the area without distortion
                  borderRadius: "50%", // Makes the image circular
                }}
              />
            </div>
          ) : (
            <div className={`circle-box lg-box d-inline-block ${bg}`}>
              <i className={props.icon}></i>
            </div>
          )}
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{earning}</h3>
            <small className="text-muted">{subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCards;
