import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Table,Button } from 'antd';


import { getCategorias } from "../../../api/menu";


export default function Categorias(props) {
    const [categorias, setCategorias] = useState();

    const [data, setData] = useState({});
    console.log(data);
    useEffect(() => {
        getCategorias().then(response => {
        setCategorias(response);
        console.log(response);
        });
    
    }, []);

    // const {categoria}  = props;
    
    // const [caso,setCaso] = useState(false);

    // const seleccionarUsuario = (data,x) => {
    //     if (x === 'ver') {
    //         setData(data);
    //         setCaso(!caso); 
    //         console.log(data.usuario);     
    //     }
    //     setCaso(!caso); 
    
    // }
    function seleccionarUsuario(data,x) {
        if (x === 'ver') {
            setData(data._id);
            console.log(data);
           

        }
    }
    // useEffect(() => {
    //     seleccionarUsuario();
    // }, [])
    

   
    const columns = [
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      render: text => <a >{text}</a>,
    },
    {
        title: "Operaciones",
        key: "operaciones",
        render: (key)=>(
          <>
          <Link to={`categoria`}>
            <Button type="primary" >Ver</Button>{" "}
          </Link>
          <Link to={`/admin/categoria/${key._id}`}>
            <Button type="primary" >categoria</Button>{" "}
          </Link>
            
            
          </>
        ), 
    },
  ];





  return(
      <>
        <h2>Categoriasss</h2>
        
        <Table columns={columns} dataSource={categorias} />
      </>
  )

   
    
}





 // if (!caso) {
    //    return (
    //     <div>
    //     <h2>Categorias</h2>
    //     <Table columns={columns} dataSource={categoria} />
       
    //     </div>
    // ) 
    // }else{
        
    //     return (
    //         <div>
    //         <h2>Categoria</h2>
    //         <Button type="primary" onClick={()=> seleccionarUsuario()} >back</Button>{" "}
    //         <Categoria data={data} />
            
            
    //         </div>
    //     )
    // }