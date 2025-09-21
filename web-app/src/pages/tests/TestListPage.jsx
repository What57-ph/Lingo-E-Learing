import { Button, Card, Col, Input, Pagination, Row, Select, Space, Tabs, Tag, Typography } from "antd"
import RightSider from "../../components/tests/RightSider"
import { CaretRightOutlined, ClockCircleFilled, ClockCircleOutlined, DownOutlined, PlayCircleOutlined, QuestionCircleFilled, QuestionCircleOutlined, SearchOutlined, StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons';
import FilterTab from "../../components/tests/ListPage/FilterTab";
import ExamCate from "../../components/tests/ListPage/ExamCate";
import TestItem from "../../components/tests/ListPage/TestItem";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPageSize, setSearch, setSort } from "../../slice/testListSlice";


const TestListPage = () => {
  const { Option } = Select;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { sort, search, page, pageSize } = useSelector(state => state.list);

  const handleNavigate = (para, value) => {
    const currentParams = new URLSearchParams(location.search);
    currentParams.set(para, value);
    navigate({
      pathname: location.pathname,
      search: `${createSearchParams(currentParams)}`
    })
  };

  function handleChangeSelect(value) {
    dispatch(setSort(value));
    handleNavigate("sort", value);
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
    handleNavigate("search", e.target.value);
  }


  const onShowSizeChange = (current, pageSize) => {
    dispatch(setPage(current));
    dispatch(setPageSize(pageSize));
  };

  return (
    <div className="bg-gray-50 pt-10 ">
      {/* main  */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-7 ">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Danh sách bài thi</h1>
              <p className="text-gray-600">Chọn bài thi phù hợp với trình độ và mục tiêu của bạn</p>
            </div>

            {/* <Category /> */}
            <ExamCate handleNavigate={handleNavigate} />

            {/* search */}

            <Card className="!shadow-md !mb-7 ">
              <div className="!flex !flex-row space-x-6">
                <Input
                  placeholder="Tìm kiếm bài thi theo tên, mã số"
                  size="large"
                  prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
                  allowClear
                  onPressEnter={handleSearch}
                />

                <Select size="large" placeholder="Sắp xếp" style={{ width: 150 }} onChange={handleChangeSelect}>
                  <Option value="jack">Lượt làm bài</Option>
                  <Option value="lucy">Lượt bình luận</Option>
                  <Option value="Yiminghe">Điểm đánh giá</Option>
                </Select>
              </div>

              <FilterTab handleNavigate={handleNavigate} />


            </Card>

            {/* items */}

            <TestItem />

            <div className="mt-4">
              <Pagination align="center"
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={1}
                total={500}
              />
            </div>

          </div>

          <div className="lg:col-span-3 space-y-6">
            <RightSider />
          </div>

        </div>
      </div>
    </div>
  )
}
export default TestListPage