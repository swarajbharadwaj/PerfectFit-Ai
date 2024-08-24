import React, { useState } from "react";
import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Tables = () => {
  const purchaseHistoryData = [
    { id: 1, orderId: 'ORD12345', customerName: 'Jane Doe', product: 'Red Dress', quantity: 2, price: '$120.00', date: '2024-08-20', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/f/9/s-aa-00211-red-aayu-original-imagtujqftm3qmjp.jpeg?q=70', status: 'Successful' },
    { id: 2, orderId: 'ORD12346', customerName: 'John Smith', product: 'Blue Jeans', quantity: 1, price: '$80.00', date: '2024-08-21', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/r/v/32-phjn000003-highlander-original-imah3fwgsahtn3cg.jpeg?q=70', status: 'Failed' },
    { id: 3, orderId: 'ORD12347', customerName: 'Alice Johnson', product: 'Black Shoes', quantity: 3, price: '$180.00', date: '2024-08-22', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/r/j/-original-imagzjg25cg9wsrj.jpeg?q=70', status: 'Successful' },
    { id: 4, orderId: 'ORD12348', customerName: 'Emily Davis', product: 'Green Skirt', quantity: 1, price: '$65.00', date: '2024-08-23', avatar: 'https://rukminim2.flixcart.com/image/612/612/kvy58y80/skirt/h/s/m/free-wraparound-matkewalaz-original-imag8qmk8hbksbcg.jpeg?q=70', status: 'Failed' },
    { id: 5, orderId: 'ORD12349', customerName: 'Michael Brown', product: 'White Shirt', quantity: 2, price: '$50.00', date: '2024-08-24', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/k/w/l-c301-white-dennis-lingo-original-imah3mzaaha8eqzn.jpeg?q=70', status: 'Successful' },
    { id: 6, orderId: 'ORD12350', customerName: 'Sarah Wilson', product: 'Purple Hat', quantity: 1, price: '$30.00', date: '2024-08-25', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hat/5/t/e/cotton-bucket-hat-for-women-bucket-hat-for-men-beach-hat-for-original-imahfa54yghmgdhh.jpeg?q=70', status: 'Successful' },
    { id: 7, orderId: 'ORD12351', customerName: 'David Lee', product: 'Leather Jacket', quantity: 1, price: '$200.00', date: '2024-08-26', avatar: 'https://rukminim2.flixcart.com/image/612/612/jvtujrk0/jacket/z/m/e/m-5614974-roadster-original-imafgmrzdjezbtze.jpeg?q=70', status: 'Failed' },
    { id: 8, orderId: 'ORD12352', customerName: 'Laura Miller', product: 'Casual Shoes', quantity: 2, price: '$140.00', date: '2024-08-27', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/f/1/-original-imaggcb4pytgadpd.jpeg?q=70', status: 'Successful' },
    { id: 9, orderId: 'ORD12353', customerName: 'Chris Garcia', product: 'Sweater', quantity: 1, price: '$55.00', date: '2024-08-28', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/r/d/7/l-af-0077-grey-ayub-fashion-original-imagjragdcxfbbyr.jpeg?q=70', status: 'Successful' },
    { id: 10, orderId: 'ORD12354', customerName: 'Amanda Martinez', product: 'Running Shoes', quantity: 1, price: '$90.00', date: '2024-08-29', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/2/c/-original-imagz5bz9kbggbsb.jpeg?q=70', status: 'Failed' },
    { id: 11, orderId: 'ORD12355', customerName: 'James Anderson', product: 'Blazer', quantity: 1, price: '$120.00', date: '2024-08-30', avatar: 'https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/b/1/k/-original-imagy4tg7v3kfcpg.jpeg?q=70', status: 'Successful' },
    { id: 12, orderId: 'ORD12356', customerName: 'Olivia Robinson', product: 'Scarf', quantity: 2, price: '$40.00', date: '2024-08-31', avatar: 'https://via.placeholder.com/45', status: 'Failed' },
    { id: 13, orderId: 'ORD12357', customerName: 'Daniel Clark', product: 'Jeans Jacket', quantity: 1, price: '$85.00', date: '2024-09-01', avatar: 'https://via.placeholder.com/45', status: 'Successful' },
    { id: 14, orderId: 'ORD12358', customerName: 'Sophia Lewis', product: 'Tank Top', quantity: 3, price: '$75.00', date: '2024-09-02', avatar: 'https://via.placeholder.com/45', status: 'Failed' },
    { id: 15, orderId: 'ORD12359', customerName: 'William Walker', product: 'Shorts', quantity: 2, price: '$60.00', date: '2024-09-03', avatar: 'https://via.placeholder.com/45', status: 'Successful' },
];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = purchaseHistoryData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(purchaseHistoryData.length / rowsPerPage);

  return (
    <Row>
      <Col lg="12">
        <Card className="mb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 bg-light">
            <i className="bi bi-cart-check me-2"></i>
            Purchase History
          </CardTitle>
          <CardBody>
            <Form className="mb-4">
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="search">Search</Label>
                    <Input
                      id="search"
                      name="search"
                      placeholder="Search by Customer Name or Product"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" className="d-flex align-items-end">
                  <Button color="primary">Search</Button>
                </Col>
              </Row>
            </Form>
            <Table className="align-middle mb-0" responsive hover striped borderless>
              <thead className="bg-primary text-white">
                <tr>
                  <th>Avatar</th>
                  <th>Customer Name</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((entry) => (
                  <tr key={entry.id}>
                    <td>
                      <img src={entry.avatar} alt="avatar" className="rounded-circle" width="45" height="45" />
                    </td>
                    <td>{entry.customerName}</td>
                    <td>{entry.product}</td>
                    <td>{entry.quantity}</td>
                    <td>{entry.price}</td>
                    <td>{entry.date}</td>
                    <td>
                      <span className={`badge ${entry.status === 'Successful' ? 'bg-success' : 'bg-danger'}`}>
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink first onClick={() => handlePageChange(1)} />
              </PaginationItem>
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem active={i + 1 === currentPage} key={i}>
                  <PaginationLink onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
              </PaginationItem>
              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink last onClick={() => handlePageChange(totalPages)} />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;
