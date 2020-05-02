// Write your Character component here
import React from 'react';
import styled from "styled-components";
import '../App.css';

const DivStyle = styled.div `
    border: 1px dashed red;
`;

const CharNameStyle = styled.h1`
  color: #eee7f5;
  background: #7203c4;
`;

const GeneralStyle = styled.p`
    color: #7203c4;
    font-size: 1.4rem;
`;


const Character = (props) => {

    console.log(props);
    return (
        <DivStyle>
        <div>
            <CharNameStyle><h1>Name: {props.data.name}</h1></CharNameStyle>
            <GeneralStyle><p>Gender: {props.data.gender}</p></GeneralStyle>
            <GeneralStyle><p>Birth Year: {props.data.birth_year}</p></GeneralStyle>
            <GeneralStyle><p>Height: {props.data.height}</p></GeneralStyle>
        </div>
        </DivStyle>
    );
}

export default Character;