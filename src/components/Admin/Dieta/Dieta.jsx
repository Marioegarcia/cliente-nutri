import React, { useEffect, useState } from "react";
import { Route, Switch,Link } from "react-router-dom";
import {
  Popconfirm,
  Table,
  Input,
  InputNumber,
  Modal,
  Form,
  Row,
  Col,
  Button,
  Typography
} from "antd";
import { updateDietaApi,getUserApi } from "../../../api/user";

const { Column } = Table;

// const originData = [];

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     nombre: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function Dieta(props) {
  //console.log(props.data.dieta);
  
  const id = props.data;

  const [form] = Form.useForm();
  const [user, setUser] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  let dieta = user.dieta;


 

  useEffect(() => {
  //console.log(id);
    getUserApi(id).then(function(response) {
      setUser(response.pacienteDB);
    });

  }, [])
  
  
  
  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    
    try {
      const row = await form.validateFields();
      
      updateDietaApi(row)
      
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    
    {
      key: "desayuno",
      title: "Lunes",
      editable: true,
      render: e => e.lunes
      
    },
    {
      title: "Martes",
      editable: true,
      key: "desayuno",
      render : e => e.martes
    },
    {
      title: "Miercoles",
      editable: true,
      key: "desayuno",
    },
    {
      title: "Jueves",
      key: "desayuno",
      dataIndex: "jueves",
      editable: true,
    },
    {
      title: "operation",
      render: (_,record) =>{
       
        //console.log(record);
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ): (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
        
        
      },
    }
  ];


  const originData = [
    {
      key: "desayuno",
      lunes:"desayuno",
      martes:"martes",
    },
    {
      
    }
    
  ];

  


const edit = (record) => {
  
  
  form.setFieldsValue({
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: '',
    sabado:'',
    domingo:'',
    ...record,
  });
  setEditingKey(record.key);
  
};

const mergedColumns = columns.map((col) => {
  if (!col.editable) {
    
    return col;
  }

  return {
    ...col,
    onCell: (record) => ({
      record,
      inputType: 'text',
      dataIndex: col.dataIndex,
      title: col.title,
      editing: isEditing(record),
    }),
  };
});




  return (
    <div>
      <h1>Dieta</h1>
      <Link to={`/admin/new-dieta/${id}`} >
        <Button type="primary" shape="round" >Crear nueva dieta</Button>
      </Link>

      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={user.dieta}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
      </Form>

     
    </div>
  );
}



