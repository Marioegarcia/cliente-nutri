import React from "react";
import { Row, Col,Button,Layout } from "antd";

import "./MainBanner.scss";


const { Header, Footer, Sider, Content } = Layout;

export default function MainBanner() {
  return (
    <>
     
      <Layout id="home" className="main-banner">
      
        <Content >
          <Row>
          <Col lg={4} />
            <Col lg={16} md={24} >
            <div  className="main-banner__contenido">
              <h2>
              Alimentación Eficaz <br /> Protege tu Cuerpo.
              </h2>
              <h3>
                Nutre tu cuerpo de manera inteligente y alcanza tus objetivos con un plan de alimentación flexible. 
                  <br />
                  Atención nutricional desde el control de peso hasta enfermedades.
              </h3>
              <Button type="primary" >Registrate Aqui!</Button>
            </div>
            </Col>
            

          </Row>
          
          
           
        </Content>
        
      </Layout>
    </>
  );
}


 // // <div className="main-banner">
    //   {/* <div className="main-banner__dark" /> */}
     
    //   {/* <Row>
    //     <Col lg={4} />
    //     <Col lg={16} md={24}>
    //       <h2>
    //       Alimentación Eficaz <br /> Protege tu Cuerpo.
    //       </h2>
    //       <h3>
    //       Nutre tu cuerpo de manera inteligente y alcanza tus objetivos con un plan de alimentación flexible. 
    //         <br />
    //         Atención nutricional desde el control de peso hasta enfermedades.
    //       </h3>
          
    //       <Button type="primary" error>Registrate Aqui!</Button>
         
          
    //     </Col>
    //     <Col lg={4} />
    //   </Row> */}
    // // </div>