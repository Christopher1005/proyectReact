import React from 'react';
import NavbarIndex from "../Components/IndexComponents/NavbarIndex";
import Sectionprincipal from '../Components/IndexComponents/Sectionprincipal';
import Productos from '../Components/IndexComponents/Productos';
import Footer from '../Components/IndexComponents/Footer';
import "../normal.css";




const Index = () => {
    return (
    <>
      <NavbarIndex />
      <Sectionprincipal />
      <Productos />
      <Footer />
    </>
    );
}

export default Index;
