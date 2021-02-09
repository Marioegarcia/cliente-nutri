// import React, { useState } from "react";
// import { Descriptions, Button, Input } from "antd";
// import { CheckOutlined, EditOutlined, CloseOutlined } from "@ant-design/icons";

// const { TextArea } = Input;

// export default function Historia() {
//   const [edit, setEdit] = useState(false);

//   const editar = () => {
//     setEdit(!edit);
//   };

//   return (
//     <div>
//       <Descriptions
//         bordered
//         title="Historia Clinica"
        
//         extra={
//           <Button onClick={editar} type="primary">
//             Edit
//           </Button>
//         }
//       >
//         <Descriptions.Item label="Nombre">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Estado civil">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Direccion">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Ocupacion">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Sexo">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Edad">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Referencia">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Fecha">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Grupo Sanguineo">
//           Sedentario
//         </Descriptions.Item>

//       </Descriptions>


//       <Descriptions
//        bordered
//        layout="vertical"
//       >
//         <Descriptions.Item label="Motivo de consulta">
//         {!edit ? (
//             <p>Normal</p>
//           ) : (
//             <TextArea
//               placeholder="Controlled autosize"
//               autoSize={{ minRows: 1, maxRows: 2 }}
//             />
//           )}
//         </Descriptions.Item>
//         <Descriptions.Item label="Medicamento o suplementos actuales">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item  label="Malestares actuales">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item  label="Actividad fisica"> 
//         Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item  label="Habitos">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="Indicadores dieteticos">
//           Sedentario
//         </Descriptions.Item>
//         <Descriptions.Item label="¿Ha modificado su alimentación en los últimos 6 meses? (trabajo, estudio, o actividad)">
//           Sedentario
//         </Descriptions.Item>
//       </Descriptions>
//       <Descriptions
//        bordered
       
//       >
//         <Descriptions.Item label="Alergia o intolerancia a los alimentos">
//         {!edit ? (
//             <p>Normal</p>
//           ) : (
//             <TextArea
//               placeholder="Controlled autosize"
//               autoSize={{ minRows: 1, maxRows: 2 }}
//             />
//           )}
//         </Descriptions.Item>
        
//       </Descriptions>
//     </div>
//   );
// }

import React from 'react'

export default function Historia() {
  return (
    <div>
      hola historia
    </div>
  )
}
