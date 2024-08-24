import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import femaleAvatar from "../../assets/images/users/user1.jpg"; // Replace with actual path
import maleAvatar from "../../assets/images/users/user2.jpg"; // Replace with actual path

const userDetailsData = [
  { name: "Alice Johnson", avatar: femaleAvatar, height: "160 cm", weight: "50 kg", chest: "85 cm", cupSize: "B", waist: "70 cm", bodyShapeIndex: 3 },
  { name: "Bob Smith", avatar: maleAvatar, height: "175 cm", weight: "70 kg", chest: "95 cm", cupSize: "N/A", waist: "80 cm", bodyShapeIndex: 4 },
  { name: "Claire Davis", avatar: femaleAvatar, height: "165 cm", weight: "55 kg", chest: "90 cm", cupSize: "C", waist: "72 cm", bodyShapeIndex: 3 },
  { name: "David Wilson", avatar: maleAvatar, height: "180 cm", weight: "80 kg", chest: "100 cm", cupSize: "N/A", waist: "85 cm", bodyShapeIndex: 5 },
  { name: "Emma Brown", avatar: femaleAvatar, height: "170 cm", weight: "60 kg", chest: "95 cm", cupSize: "D", waist: "75 cm", bodyShapeIndex: 4 },
  { name: "Frank Miller", avatar: maleAvatar, height: "185 cm", weight: "90 kg", chest: "105 cm", cupSize: "N/A", waist: "90 cm", bodyShapeIndex: 6 },
  { name: "Grace Lee", avatar: femaleAvatar, height: "155 cm", weight: "50 kg", chest: "80 cm", cupSize: "A", waist: "68 cm", bodyShapeIndex: 2 },
  { name: "Harry Martinez", avatar: maleAvatar, height: "170 cm", weight: "65 kg", chest: "90 cm", cupSize: "N/A", waist: "78 cm", bodyShapeIndex: 4 },
  { name: "Ivy Wilson", avatar: femaleAvatar, height: "175 cm", weight: "65 kg", chest: "92 cm", cupSize: "C", waist: "74 cm", bodyShapeIndex: 4 },
  { name: "Jack Taylor", avatar: maleAvatar, height: "160 cm", weight: "60 kg", chest: "85 cm", cupSize: "N/A", waist: "76 cm", bodyShapeIndex: 3 },
  { name: "Kara Anderson", avatar: femaleAvatar, height: "180 cm", weight: "70 kg", chest: "98 cm", cupSize: "D", waist: "80 cm", bodyShapeIndex: 5 },
  { name: "Liam Thomas", avatar: maleAvatar, height: "175 cm", weight: "75 kg", chest: "95 cm", cupSize: "N/A", waist: "82 cm", bodyShapeIndex: 4 },
  { name: "Mia Clark", avatar: femaleAvatar, height: "165 cm", weight: "60 kg", chest: "90 cm", cupSize: "B", waist: "72 cm", bodyShapeIndex: 4 },
  { name: "Noah Lewis", avatar: maleAvatar, height: "185 cm", weight: "85 kg", chest: "100 cm", cupSize: "N/A", waist: "88 cm", bodyShapeIndex: 5 },
  { name: "Olivia Walker", avatar: femaleAvatar, height: "160 cm", weight: "55 kg", chest: "85 cm", cupSize: "C", waist: "70 cm", bodyShapeIndex: 3 },
];

const UserDetailsTable = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">User Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of user details based on measurements
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Chest</th>
                <th>Cup Size</th>
                <th>Waist</th>
                <th>Body Shape Index</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userDetailsData.map((user, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={user.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.height}</td>
                  <td>{user.weight}</td>
                  <td>{user.chest}</td>
                  <td>{user.cupSize}</td>
                  <td>{user.waist}</td>
                  <td>{user.bodyShapeIndex}</td>
                  <td>
                    <Button color="danger" size="sm">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserDetailsTable;
