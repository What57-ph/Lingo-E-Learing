// import { useState } from "react";
// import { Button, Card, Col, Row } from "antd";
// import { DownOutlined, UpOutlined } from "@ant-design/icons";
// import {
//   ReadOutlined,
//   CustomerServiceOutlined,
//   EditOutlined,
//   AudioOutlined,
//   FileDoneOutlined,
//   FileTextOutlined,
//   GlobalOutlined,
//   CalculatorOutlined,
//   BarsOutlined
// } from "@ant-design/icons";

// import { category } from "../../../data/FixedData";

// const Category = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedType, setSelectedType] = useState("Tất cả");

//   const iconMap = {
//     ReadOutlined,
//     CustomerServiceOutlined,
//     EditOutlined,
//     AudioOutlined,
//     FileDoneOutlined,
//     FileTextOutlined,
//     GlobalOutlined,
//     CalculatorOutlined,
//     BarsOutlined
//   };

//   const Type = ({ icon, type, number, color }) => {
//     const IconComp = iconMap[icon];
//     const isSelected = selectedType === type;
//     return (
//       <Card
//         size="small"
//         onClick={() => setSelectedType(type)}
//         className={`!flex !flex-col !items-center !justify-center text-center cursor-pointer
//           transition duration-300 ease-in-out hover:!bg-blue-50 hover:scale-105
//           ${isSelected ? "!bg-blue-600 !text-[#ffffff] hover:!bg-blue-600" : ""}`}
//       >
//         {IconComp && <IconComp style={{ color }} className={`text-2xl mb-2 ${isSelected ? "!text-[#ffffff]" : color} `} />}
//         <div className="font-medium">{type}</div>
//         <div className="text-sm opacity-90">{number} bài</div>
//       </Card>
//     );
//   };

//   const MainType = (children) => (
//     <Row gutter={[16, 16]}>
//       {children.map((child, i) => (
//         <Col key={i} span={6}>
//           <Type
//             icon={child.icon}
//             type={child.type}
//             number={child.count}
//             color={child.color}
//           />
//         </Col>
//       ))}
//     </Row>
//   );

//   return (
//     <Card className="!shadow-lg !mb-7">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-xl font-bold text-gray-900">Loại bài thi</h1>
//         <Button
//           iconPosition="end"
//           icon={showAll ? <UpOutlined /> : <DownOutlined />}
//           type="text"
//           color="primary"
//           className="!text-blue-600"
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? "Thu gọn" : "Xem tất cả"}
//         </Button>
//       </div>

//       {MainType(category[0].children)}

//       {showAll &&
//         category.slice(1).map((cat, idx) => (
//           <div key={idx} className="space-y-1 mt-6">
//             <h2 className="font-bold">{cat.type}</h2>
//             {MainType(cat.children)}
//           </div>
//         ))}
//     </Card>
//   );
// };

// export default Category;
