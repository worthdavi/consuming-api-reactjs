import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    color: #F00;

`
export const SubTitle = styled.h3`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center; 
    color: #00F;
`
export const Item = styled.li`
    margin: 0 auto;
    padding: 15px;
    margin-top: 15px;
    list-style: circle;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background: chartreuse;
    border: 1px solid blueviolet;
    border-radius: 4px;
    list-style: none;
    max-width: 500px;

    a{
        font-weight: bold;
        font-size: 20px;
        color: black;
        text-decoration: none;
    }
    a:hover{
        color: blueviolet;
    }
    span{
        float: right;
    }
    input[type=checkbox]{
        transform: scale(1.5);
    }
`