import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Input, Row, Col } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    size: "S",
    height: "162 cm",
    weight: "55 kg",
    chest: "88 cm",
    cupSize: "B",
    waist: "72 cm",
    hips: "93 cm",
    bodyShapeIndex: 3,
    confidenceScore: "92%",
    gender: "Female",
    dressType: "Top",
  },
  {
    avatar: user2,
    size: "M",
    height: "168 cm",
    weight: "65 kg",
    chest: "92 cm",
    cupSize: "C",
    waist: "78 cm",
    hips: "98 cm",
    bodyShapeIndex: 4,
    confidenceScore: "89%",
    gender: "Male",
    dressType: "Bottom",
  },
  {
    avatar: user3,
    size: "L",
    height: "172 cm",
    weight: "75 kg",
    chest: "97 cm",
    cupSize: "D",
    waist: "83 cm",
    hips: "104 cm",
    bodyShapeIndex: 5,
    confidenceScore: "85%",
    gender: "Female",
    dressType: "Top",
  },
  {
    avatar: user4,
    size: "XL",
    height: "178 cm",
    weight: "85 kg",
    chest: "103 cm",
    cupSize: "E",
    waist: "88 cm",
    hips: "110 cm",
    bodyShapeIndex: 6,
    confidenceScore: "87%",
    gender: "Male",
    dressType: "Bottom",
  },
  {
    avatar: user5,
    size: "XXL",
    height: "183 cm",
    weight: "95 kg",
    chest: "108 cm",
    cupSize: "F",
    waist: "93 cm",
    hips: "115 cm",
    bodyShapeIndex: 7,
    confidenceScore: "90%",
    gender: "Female",
    dressType: "Top",
  },
];

const ProjectTables = () => {
  const [genderFilter, setGenderFilter] = useState("All");
  const [dressTypeFilter, setDressTypeFilter] = useState("All");

  const filteredData = tableData.filter((data) => {
    return (
      (genderFilter === "All" || data.gender === genderFilter) &&
      (dressTypeFilter === "All" || data.dressType === dressTypeFilter)
    );
  });

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Size Chart</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the size chart based on measurements
          </CardSubtitle>
          
          {/* Filter Options */}
          <Row className="mb-3">
            <Col md={4}>
              <Input
                type="select"
                name="gender"
                id="genderFilter"
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <option value="All">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Input>
            </Col>
            <Col md={4}>
              <Input
                type="select"
                name="dressType"
                id="dressTypeFilter"
                value={dressTypeFilter}
                onChange={(e) => setDressTypeFilter(e.target.value)}
              >
                <option value="All">All Dress Types</option>
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
              </Input>
            </Col>
          </Row>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Size</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Bust/Chest</th>
                <th>Cup Size</th>
                <th>Waist</th>
                <th>Hips</th>
                <th>Body Shape Index</th>
                <th>Confidence Score</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                    </div>
                  </td>
                  <td>{tdata.size}</td>
                  <td>{tdata.height}</td>
                  <td>{tdata.weight}</td>
                  <td>{tdata.chest}</td>
                  <td>{tdata.cupSize}</td>
                  <td>{tdata.waist}</td>
                  <td>{tdata.hips}</td>
                  <td>{tdata.bodyShapeIndex}</td>
                  <td>{tdata.confidenceScore}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
