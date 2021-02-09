// // import React, { useEffect, useState } from "react";
// // import {
// //   Select,
// //   Form,
// //   Button,
// //   Input,
// //   Row,
// //   Col,
// //   DatePicker,
// //   Divider,

// // } from "antd";
// // import { crearProducto } from "../../../api/producto";
// // import { getUserApi } from "../../../api/user";
// // import "moment/locale/es";
// // import locale from "antd/es/date-picker/locale/es_ES";

// // import "./crearDieta.scss";

// // const {Option} = Select;
// // const { TextArea } = Input;

// // export default function CrearDieta(props) {
// //   const id = props.match.params.id;
// //   const [user, setUser] = useState([]);
// // const [data, setData] = useState({
// //   user: id,
// //   fecha: Date(),
// //   dia: "lunes",
// //   desayuno: "desayuno",
// //   colacionM: "colacion matutina",
// //   comida: "comida",
// //   colacionT: "colacion vespertina",
// //   cena:"cena"
// // });

// //   useEffect(() => {
// //     //console.log(id);
// //     getUserApi(id).then(function (response) {
// //       setUser(response.pacienteDB);
// //     });
// //   }, []);

// //   const handleChange = (e) => {

// //     setData({
// //       ...data,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const onChange = (value) =>{
// //     console.log(value);
// //     setData({
// //       dia: value
// //     })
// //   }

// //   const onFinish = async () => {

// //     const result = await crearProducto(data);

// //   };

// //   //hacer un useState paera guardar en una funcion el resultado del input: key.id : dia
// //   return (

// //       <Form onFinish={onFinish} onChange={handleChange} className="form-dieta">
// //         <Divider>

// //           <Form.Item>
// //             <h3>Crear Dieta</h3>
// //           </Form.Item>
// //         </Divider>
// //         <Row  justify="center">
// //           <Col span={21}>

// // <Form.Item>
// // <Select  onChange={onChange} defaultValue="lunes" name="dia">
// //    <Option value="lunes">lunes</Option>
// //    <Option value="martes">martes</Option>
// //    <Option value="miercoles">miercoles</Option>
// //    <Option value="jueves">jueves</Option>
// //    <Option value="viernes">viernes</Option>
// //    <Option value="sabado">sabado</Option>
// //    <Option value="domingo">domingo</Option>
// //  </Select>
// // </Form.Item>

// //             <Form.Item>
// //               <TextArea name="desayuno" placeholder="desayuno" autoSize />
// //             </Form.Item>
// //             <Form.Item>
// //               <TextArea  name="colacionM" placeholder="colacion matutina" autoSize />
// //             </Form.Item>
// //             <Form.Item>
// //               <TextArea  name="comida" placeholder="comida" autoSize />
// //             </Form.Item>
// //             <Form.Item >
// //               <TextArea name="colacionT" placeholder="colacion vespertina" autoSize />
// //             </Form.Item>
// //             <Form.Item>
// //               <TextArea name="cena" placeholder="cena"  autoSize />
// //             </Form.Item>
// //           </Col>

// //          </Row>

// //         <Button type="primary" htmlType="submit" className="login-form-button">
// //           guardar
// //         </Button>
// //       </Form>

// //   );
// // }

// import React, { useCallback, useState } from "react";
// import _ from "lodash";
// import { Form, Button, Steps, Row, Col,Input } from "antd";
// import { crearProducto } from "../../../api/producto";
// import FormBuilder from "antd-form-builder";
// const { Step } = Steps;
// const DateView = ({ value }) => (value ? value.format("MMM Do YYYY") : "N/A");

// FormBuilder.defineWidget("date-view", DateView);

// const layout = {
//   labelCol: { span: 24 },
//   wrapperCol: { span: 30},
// };

// const wizardMeta = {
//   steps: [
//     {
//       title: "Lunes",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "lunes.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "lunes.colacionM",
//             label: "Colacion matutina",
//             initialValue: "colacion",

//           },
//           {
//             key: "lunes.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "lunes.colacionT",
//             label: "Colacion vespertina",
//             initialValue: "colacion",

//           },
//           {
//             key: "lunes.cena",
//             label: "cena",
//             initialValue: "cena",

//           }

//         ],
//       },
//     },
//     {
//       title: "Martes",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "martes.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "martes.colacionM",
//             label: "Colacion matutina",
//             initialValue: "colacion",

//           },
//           {
//             key: "martes.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "martes.colacionT",
//             label: "Colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "martes.cena",
//             label: "cena",
//             initialValue: "cena",

//           },
//         ],
//       },
//     },
//     {
//       title: "Miercoles",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "miercoles.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "miercoles.colacionM",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "miercoles.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "miercoles.colacionT",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "miercoles.cena",
//             label: "cena",
//             initialValue: "cena",

//           },
//         ],
//       },
//     },
//     {
//       title: "Jueves",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "jueves.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "jueves.colacionM",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "jueves.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "jueves.colacionT",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "jueves.cena",
//             label: "cena",
//             initialValue: "cena",

//           },
//         ],
//       },
//     },
//     {
//       title: "Viernes",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "viernes.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "viernes.colacionM",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "viernes.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "viernes.colacionT",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "viernes.cena",
//             label: "cena",
//             initialValue: "cena",

//           }
//         ],
//       },
//     },
//     {
//       title: "Sabado",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "sabado.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "sabado.colacionM",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "sabado.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "sabado.colacionT",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "sabado.cena",
//             label: "cena",
//             initialValue: "cena",

//           }
//         ],
//       },
//     },
//     {
//       title: "Domingo",
//       formMeta: {
//         columns: 1,
//         fields: [
//           {
//             key: "domingo.desayuno",
//             label: "desayuno",
//             initialValue: "desayuno",

//           },
//           {
//             key: "domingo.colacionM",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "domingo.comida",
//             label: "comida",
//             initialValue: "comida",

//           },
//           {
//             key: "domingo.colacionT",
//             label: "colacion",
//             initialValue: "colacion",

//           },
//           {
//             key: "domingo.cena",
//             label: "cena",
//             initialValue: "cena",

//           }
//         ],
//       },
//     },
//   ],
// };

// export default function CrearDieta(props) {
//   const id = props.match.params.id;
//   const [form] = Form.useForm();
//   const [currentStep, setCurrentStep] = useState(0);
//   const forceUpdate = FormBuilder.useForceUpdate();

//   // const handleFinish = useCallback(() => {
//   //   const diet = form.getFieldsValue(true);
//   //   setData(diet);
//   //   crearProducto(data);
//   // }, [form]);

//   const handleFinish = useCallback(() => {
//     const diet = form.getFieldsValue(true);

//     crearProducto(diet,id);
//   }, [form]);

//   // Clone the meta for dynamic change
//   const newWizardMeta = JSON.parse(JSON.stringify(wizardMeta));
//   // In a wizard, every field should be preserved when swtich steps.
//   // newWizardMeta.steps.forEach(s => s.formMeta.fields.forEach(f => (f.preserve = true)))
//   if (form.getFieldValue("noAccountInfo")) {
//     _.pullAt(newWizardMeta.steps, 1);
//   }

//   // Generate a general review step
//   const reviewFields = [];
//   newWizardMeta.steps.forEach((s, i) => {
//     reviewFields.push(
//       {
//         key: "review" + i,
//         colSpan: 2,
//         render() {
//           return (
//             <fieldset>
//               <legend>{s.title}</legend>
//             </fieldset>

//           );
//         },
//       },
//       ...s.formMeta.fields
//     );
//   });

//   newWizardMeta.steps.push({
//     key: "review",
//     title: "Review",
//     formMeta: {
//       columns: 2,
//       fields: reviewFields,
//     },
//   });

//   const stepsLength = newWizardMeta.steps.length;

//   const handleNext = () => {
//     form.validateFields().then(() => {
//       setCurrentStep(currentStep + 1);
//     });
//   };
//   const handleBack = () => {
//     form.validateFields().then(() => {
//       setCurrentStep(currentStep - 1);
//     });
//   };
//   const isReview = currentStep === stepsLength - 1;
//   return (
//     <Row  >
//       <Col xs={24} sm={24} md={24} lg={24} xl={24}>

//       <Form
//         layout="vertical"
//         form={form}
//         onValuesChange={forceUpdate}
//         {...layout}
//         onFinish={handleFinish}
//       >

//         <Steps current={currentStep}>
//           {newWizardMeta.steps.map((s) => (
//             <Step key={s.title} title={s.title} />
//           ))}
//         </Steps>
//         <div
//           style={{ background: "#f7f7f7", padding: "20px ", margin: "3px 0" }}
//         >
//           <FormBuilder
//           style={{padding: "10px"}}
//             viewMode={currentStep === stepsLength - 1}
//             form={form}
//             meta={newWizardMeta.steps[currentStep].formMeta}
//           />
//         </div>
//         <Form.Item className="form-footer" style={{ textAlign: "right" }}>
//           {currentStep > 0 && (
//             <Button
//               onClick={handleBack}
//               style={{ float: "left", marginTop: "5px" }}
//             >
//               Back
//             </Button>
//           )}
//           <Button>Cancel</Button>&nbsp; &nbsp;
//           <Button
//             type="primary"
//             onClick={isReview ? () => form.submit() : handleNext}
//           >
//             {isReview ? "Submit" : "Next"}
//           </Button>
//         </Form.Item>

//       </Form>

//       </Col>
//     </Row>
//   );
// }
import React, { useCallback, useState } from "react";
import { Form, Input, Button, Space,Card,Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';




const { Option } = Select;

export default function CrearDieta() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const selectAfter = (
    <Select defaultValue="porcion" className="select-after">
      <Option value="tazas">taza</Option>
      <Option value="gramos">gramos</Option>
      <Option value="piezas">piezas</Option>
      <Option value="lt">litros</Option>
    </Select>
  );

  return (
    

    
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Card title="Desayunos">
      <Form.List name="desayuno">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...field}
                  name={[field.name, 'desayuno']}
                  fieldKey={[field.fieldKey, 'desayuno']}
                  rules={[{ required: true, message: 'agrega un desayuno' }]}
                >
                  <Input placeholder="desayuno" addonAfter={selectAfter} />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'porcion']}
                  fieldKey={[field.fieldKey, 'porcion']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Input placeholder="porcion"  addonAfter={selectAfter} />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add comida
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      </Card>

    </Form>

    
  );
}
