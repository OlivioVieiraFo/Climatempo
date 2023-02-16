import React from "react";

const Cidade = ({cidade}) => {
    return   <p> {cidade.min} {cidade.max}      {cidade.name}</p>;
}
 
export default Cidade;