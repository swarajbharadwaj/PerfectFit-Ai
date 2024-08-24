import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./AddNewItemForm.css"; // Import the CSS file for custom styling

const AddNewItemForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Row className="justify-content-center">
      <Col md="6" lg="4">
        <Card className="bg-form"> {/* Add custom class for background color */}
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 text-center">
            <i className="bi bi-bag-plus me-2"></i>
            Add New Item
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input
                  id="productName"
                  name="productName"
                  placeholder="Enter product name"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter product description"
                  type="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input
                  id="gender"
                  name="gender"
                  type="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="productImage">Product Image</Label>
                <Input
                  id="productImage"
                  name="productImage"
                  type="file"
                  onChange={handleImageChange}
                />
              </FormGroup>
              <Button color="primary" className="w-100 mt-2">
                Add Item
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddNewItemForm;
