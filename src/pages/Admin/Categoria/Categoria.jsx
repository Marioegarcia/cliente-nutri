import React, { useState, useEffect } from "react";
import {getCategoria} from "../../../api/menu";
import { Card } from 'antd';


export default function Categoria(props) {
    
    const data = props.match.params.id;
    const [categoria, setCategoria] = useState({
        descripcion: "",
        usuario: ""
    });


    useEffect(() => {
        getCategoria(data).then(response => {
        setCategoria(response.categoriaDB);
        //console.log(response.categoriaDB.usuario);
        });
    
    }, []);

    console.log(categoria);

    return(
        <div> 

            <Card title={categoria.descripcion} bordered={false} style={{ width: 300 }}>
                <p>{categoria.usuario}</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )

    // useEffect(() => {
    //   getCategoria(data).then(response => {
    //     setCategoria(response.categoriaDB);
       
    //   });
    
    // }, []);
    // return(
    //     <div>Categoria</div>
    // )

    // if (categoria == null) {
    //     return (
    //     <div>
    //         <h2>Categoria  </h2>
    //     </div>
    // )
    // }else{
    //     return (
    //         <div>
    //             <h2>Categoria  {categoria.descripcion}</h2>
    //         </div>
    //     ) 
    // }

    
}
