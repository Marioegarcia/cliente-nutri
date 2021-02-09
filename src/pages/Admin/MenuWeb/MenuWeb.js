import React, { useState, useEffect } from "react";
import { getMenuApi } from "../../../api/menu";
import MenuWebList from "../../../components/Admin/MenuWeb/MenuWebList";
import { Route, Switch, Redirect } from "react-router-dom";
import Categorias from "../../../components/Admin/Categorias";
import { getCategorias } from "../../../api/menu";
import Categoria from "./../Categoria";

export default function MenuWeb() {
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    getCategorias().then(response => {
      setCategorias(response);
      //console.log(response);
    });
  
  }, []);
  //console.log(categorias);
  return (
    <div className="menu-web">

        <Switch>
            <Route exact path='/admin/categorias' component={Categorias}></Route>
            <Route exact path="/admin/categoria" component={Categoria} />
        </Switch>
     
    </div>
  );
}
