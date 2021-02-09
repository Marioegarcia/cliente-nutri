import React, { useState, useEffect } from "react";
import {  Avatar,Input,Table, Button } from "antd";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersApi, getUserApi } from "../../../api/user";
import { Link } from "react-router-dom";
import ListUsers from "../../../components/Admin/Users/ListUsers";

import "./Users.scss";


const { Search } = Input;




const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'name',
    
  },
  {
    title:'Apellidos',
    dataIndex: 'lastname',
    key:'lastname',
  },
  {
    title: 'Age ',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
    sorter: {
      compare: (a, b) => a.age - b.age,
      
    },
  },
  {
    title: 'Email ',
    dataIndex: 'email',
    key: 'email',
    responsive: ['lg'],
  },
  {
    title: "Operaciones",
    key: "operaciones",
    render: (key)=>(
      <>
      <Link to={`/admin/paciente/${key._id}`}>
        <Button type="primary" >Ver</Button>{" "}
      </Link>
      
      </>
    ), 
},
];



export default function Users() {

  const [users, setUsers] = useState([]);
  const [buscar, setBuscar] = useState([]);
  const token = getAccessTokenApi();
  const originData = users;



  useEffect(() => {
    getUsersApi(token).then(response => {
      setUsers(response.users);
    //  console.log(response);
     
    });
    
  },[token])

  
  function recuperar() {
    
      getUsersApi(token).then(response => {
        setUsers(response.users);
       // console.log(response);
      });
      
    
  }
  // function onBlur() {
  //   console.log('blur');
  // }
  
  // function onFocus(val) {
  //   console.log(val);
  // }
  
  function onSearch(val) {
    console.log('search:', val.toUpperCase());
    setBuscar(val.toUpperCase());
    getUserApi(val).then(response => {
      setUsers(response.users);
    })
    
  }

  
  
  

  

  return (
    <div className="users">
      <div className="users__content">
        <h2>Lista de Usuarios</h2>

              <Search 
              placeholder="input search text" 
              onSearch={onSearch} 
              style={{ width: 200 }}
              
              />
              <Button onClick={recuperar} >Alll</Button>
          
            <Table className="users__tabla" dataSource={originData} columns={columns} />
      </div>
     

    {/* <Table columns={columns} dataSource={originData} pagination={{ pageSize: 5 }}></Table> */}
     
    </div>
  );
}
