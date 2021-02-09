import React from "react";
import { Helmet } from "react-helmet";
import { BackTop } from 'antd';

import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewsCourses from "../components/Web/ReviewsCourses";
import Metodo from "../components/Web/Metodo";
import Perzonalizada from "../components/Web/Perzonalizada";

import { UpOutlined } from '@ant-design/icons';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};



export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nutricion Clinica y Deportiva</title>
        <meta
          name="description"
          content="Home | Nutricion"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner  />
      <Metodo />
      <Perzonalizada/>
      <HowMyCoursesWork />
      <BackTop ><UpOutlined style={style}/></BackTop>
      
    </>
  );
}
