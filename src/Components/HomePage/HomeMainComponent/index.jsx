import React from "react";
import { Layout, Menu, Dropdown, Card, Typography, Row, Col } from "antd";
import {
  DownOutlined,
  BellOutlined,
  HomeOutlined,
  ShopOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const sevaMenu = (
  <Menu>
    <Menu.Item key="1">E-Seva</Menu.Item>
    <Menu.Item key="2">Vastra Seva</Menu.Item>
    <Menu.Item key="3">Darshan Booking</Menu.Item>
    <Menu.Item key="4">Cottage Booking</Menu.Item>
  </Menu>
);

const Dashboard = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff" }}>
        <Dropdown overlay={sevaMenu}>
          <a onClick={(e) => e.preventDefault()} style={{ fontSize: 16 }}>
            Select Seva <DownOutlined />
          </a>
        </Dropdown>
        <Title level={4} style={{ color: "red", margin: 0 }}>
          श्री गोस्वामी... जन्मदिन 14-02-2025
        </Title>
        <BellOutlined style={{ fontSize: 20 }} />
      </Header>
      <Content style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title={<><CalendarOutlined /> Daily Darshan Time</>}>
              <Text>Magla: 5:45 AM - 6:30 AM</Text><br />
              <Text>Shringar: 7:15 AM - 7:45 AM</Text><br />
              <Text>Rajbhog: 11:15 AM - 12:15 PM</Text><br />
              <Text>Bhog-Arti: 4:30 PM - 5:55 PM</Text><br />
            </Card>
          </Col>
          <Col span={16}>
            <Card title={<><ShopOutlined /> Tippani</>}>
              <Text>16 Feb 25 (Sunday) Choth, Krishna Paksh Phalgun</Text><br />
              <Text>17 Feb 25 (Monday) Pancham...</Text><br />
              <Text>18 Feb 25 (Tuesday) Chhath...</Text><br />
              <Text>20 Feb 25 (Thursday) Satam...</Text><br />
            </Card>
            <Card title={<><HomeOutlined /> Shringar Pranalika</>} style={{ marginTop: 16 }}>
              <Text strong>श्रृंगार - फाल्गुन कृष्ण पक्ष चतुर्थी</Text>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;