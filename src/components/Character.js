import { findByLabelText } from '@testing-library/react';
// Write your Character component here
import React from 'react'
import styled from 'styled-components';
const Characterinfo = styled.div;
    

export default function Character(props){
    const { character } = props;

return(
    <Characterinfo>
        <h2>Name:  {character.name}</h2>
        <h3>Height:  {character.height}</h3>
        <h3>Mass:  {character.mass}</h3>
        <h3>Eye Color:  {character.eye_color}</h3>
        <h3>Hair Color:  {character.hair_color}</h3>
        <h3>Birth Year:  {character.birth_year}</h3>
    </Characterinfo>    
)
}    
        