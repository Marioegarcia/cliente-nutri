import React, { useState, useEffect } from "react";
import { Card, Avatar, Tabs, Modal as ModalAntd, Row, Col } from "antd";
import { AntDesignOutlined,SettingOutlined } from '@ant-design/icons';

import Modal from "../../../components/Modal";
import { getUserApi, updateUserApi } from "../../../api/user";
import Dieta from "../../../components/Admin/Dieta";
import Pruebas from "../../../components/Admin/Pruebas";
import Info from "../../../components/Admin/Info";
import Mediciones from "../Mediciones/Mediciones";
import Historia from "../../../components/Admin/Historia";
import EditPaciente from "./EditPaciente";


const { TabPane } = Tabs;

const { Meta } = Card;
const { confirm } = ModalAntd;

export default function Paciente(props) {
  const data = props.match.params.id;
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({});
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    getUserApi(data).then((response) => {
      setUser(response.pacienteDB);
    });
  }, []);

  const onFinish = async () => {
    const result = await updateUserApi(user);
  };

  const editar = (user) => {
    setVisible(true);
    setModalContent(
      <EditPaciente user={user} data={data} setVisible={setVisible} />
    );
  };
  let imc = user.peso / user.altura / user.altura * 10000 ; 
  console.log(imc);
  return (
    <div>
      <Card
        
        
        extra={<SettingOutlined key="setting" onClick={() => editar(user)} />}
        
        title={ 
        <> 
        <Row> 

            <Col xs={8} sm={4} md={6} lg={8} xl={10}>
            <Avatar 
            size={{ xs:64, sm: 64, md: 64, lg: 64, xl: 64, xxl: 64 }}
            icon={<AntDesignOutlined />}
            />
            
             
            </Col>
            <Col xs={16} sm={4} md={6} lg={8} xl={10} style={{paddingTop: 14 }}>
            
            <h3 style={{margin: 0 }} >{user.nombre}  {user.lastname}</h3>
            
            </Col>
        </Row>
        
        </>
        }
      >
          
        

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card>
              <Meta title={`Edad: ${user.age}  `} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card>
              <Meta title={`Estatura: ${user.altura} `} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6} >
            <Card>
              <Meta title={`Peso: ${user.peso} `} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6} >
            <Card>
              <Meta title={`IMC: ${imc.toFixed(2)} `} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={6} >
            <Card>
              <Meta title={`Email: ${user.email} `} />
            </Card>
          </Col>
        </Row>
      </Card>
      

      <Tabs tabPosition="top">
        <TabPane tab="Historia Clinica" key="1">
          {/* <Dieta data={data} /> */}
          <Historia/>
        </TabPane>
        <TabPane tab="Consultas" key="2">
          <Info data={user} />
        </TabPane>
        <TabPane tab="Historia Clinica" key="3">
          <Pruebas data={user} />
        </TabPane>
        <TabPane tab="Mediciones" key="4">
          <Mediciones user={user}/>
        </TabPane>
      </Tabs>

      <Modal
        centered
        title={`Editar ${user.nombre} ${user.lastname}`}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        setVisible={setVisible}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
