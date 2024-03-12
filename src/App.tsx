import { Button, Card, Col, ConfigProvider, Divider, Flex, Layout, Menu, QRCode, Row, Slider, Space, Typography } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { MdOutlineDashboard } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { BiEdit, BiUser } from "react-icons/bi";
import { GrOrderedList } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { useState } from "react";
function App() {
  
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <Layout style={{height: '100vh'}}>
      <Header style={{background: 'white'}}>
        <div style={{display:'flex', alignItems:'center', gap: '20px'}}>
          <IoIosMenu style={{cursor:'pointer'}} onClick={()=>setCollapsed(!collapsed)} size={25}/>
          <div className="text-3xl">Ant demo</div>
        </div>

      </Header>
      <Layout>
        <Sider collapsed={collapsed} style={{background:'white'}}>
          <Menu
          mode="inline"
          theme="light"
          items={[
            {
              label: 'Dashboard',
              key: 'Dashboard',
              icon: <MdOutlineDashboard/>,
              children:[
                {
                  label: 'All user',
                  key: 'All_user',
                  icon: <BiUser/>
                },
                {
                  label: 'All orders',
                  key: 'All_orders',
                  icon: <GrOrderedList/>
                },
              ]
            },
            {
              label: 'About Us',
              key: 'About_Us',
              icon: <GoOrganization/>
            },
            
          ]}
          />
        </Sider>
        <Content style={{ padding: '24px', background: '#999'}}>
          <Flex justify="space-between" align="center">
            {[1,2,3,4].map(()=><Space direction="horizontal">
              <Card style={{width: '300px'}}>
                <Space>
                  <LiaMoneyBillWaveSolid/>
                  <small className="font-bold">Total money</small>
                </Space>
                <Typography.Title>{Number((100702)?.toFixed(1)).toLocaleString()}d</Typography.Title>
              </Card>
            </Space>)}
          </Flex>
          <Divider/>
          <Row gutter={20}>
            <Col span={6}>
              <Card >
                <Flex vertical align="center">
                  <Typography.Title>QR code</Typography.Title>
                  <QRCode value="https://ant.design/components/qr-code"></QRCode>
                </Flex>
              </Card>
            </Col>
            <Col span={18}><Card><Typography.Title>test col 18</Typography.Title></Card></Col>
          </Row>
        </Content>
      </Layout>
      {/* <Footer style={{background: 'black'}}>Test footer</Footer> */}
    </Layout> 


  )
}

export default App
