import { Col, Row } from "reactstrap";
import ReturnRatesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Most Prefered Size"
            earning="L"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEtk4KSdsKhIYneCV0DSE2EuKrKsBuX38Ig&s"
            backgroundColor="#f5fffa"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Most Sold Category"
            earning="Shirt"
            imgSrc="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/z/x/xl-formal-shirt-metronaut-original-imah2p9phdpje5gf.jpeg?q=70"
            backgroundColor="#e0f7fa"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Net Profit"
            earning="456"
            imgSrc="https://cdn-icons-png.flaticon.com/512/7314/7314637.png"
            backgroundColor="#fff0f5"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2AlaGw6How458LsnqIwZOQDAYypyN86YKg&s"
            backgroundColor="#f5fffa"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
      <Col sm="6" lg="6" xl="7" xxl="8">
          <ReturnRatesChart />
        </Col>
        <Col sm="6" lg="6" xl="7" xxl="4">
          <Feeds />
        </Col>
        </Row>
      {/***Table ***/}

      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
