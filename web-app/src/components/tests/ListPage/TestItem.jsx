import { Button, Card, Col, Row, Space, Typography } from "antd"
import {
  CaretRightOutlined, ClockCircleFilled,
  QuestionCircleFilled,
  StarFilled, UserOutlined
} from '@ant-design/icons';

const TestItem = () => {
  const { Text } = Typography;


  const TestItem = () => {
    return (
      <Col xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
      >
        <Card
          className="shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ padding: 18, display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">TOEIC</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Listening</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 hover:text-blue-600 ">
            TOEIC Listening Comprehensive Test
          </h3>

          <Row gutter={[16, 16]} className="mb-6 text-gray-600" style={{ flex: "0 0 auto" }}>
            <Col span={12}>
              <Space>
                <ClockCircleFilled className="!text-blue-500" />
                <Text>45 phút</Text>
              </Space>
            </Col>
            <Col span={12}>
              <Space>
                <QuestionCircleFilled className="!text-green-500" />
                <Text>100 câu</Text>
              </Space>
            </Col>
            <Col span={12}>
              <Space>
                <UserOutlined className="!text-orange-500" />
                <Text>1,823 lượt</Text>
              </Space>
            </Col>
            <Col span={12}>
              <Space>
                <StarFilled className="!text-yellow-500" />
                <Text>4.6 (89)</Text>
              </Space>
            </Col>
          </Row>

          <div style={{ marginTop: "auto" }}>
            <Button
              color="primary" variant="outlined"
              block
              size="large"
              icon={<CaretRightOutlined />}
            >
              Vào thi
            </Button>
          </div>
        </Card>
      </Col>
    )
  }

  return (
    <Row gutter={[16, 16]}>
      {
        [...Array(10)].map((item, index) => {
          return (
            <TestItem key={index} />
          )
        })
      }
    </Row>
  )
}
export default TestItem