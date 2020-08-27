import styled from 'styled-components/native';
import { MAIN_COLOR_LIGHT, DEFAULT_BOX_SHADOW, BLACK, WHITE, GRAY } from '../../constants/defaultStyleProps'

export const Wrapper = styled.View`
    position:absolute;
    width:100%; 
    height:100%;
    background-color:${props => props.active ? 'rgba(0,0,0,0.5)' : WHITE};
    z-index:${props => props.active ? '1' : '-2'};
`
export const ModalBox = styled.View`
    z-index:2;
    display:flex;
    flex-direction:column;
    position:absolute;
    width:100%; 
    padding:5%;
    justify-content:flex-end;
    background-color:${WHITE};
    bottom:0;
    /*visibility:${props => props.active ? 'visible':'hidden'};
    opacity:${props => props.active ? '1':'0'};*/
    /*transform-origin: 100% 100%;*/
    /*transform:${props => props.active ? 'scaleY(1) translateY(0%)':'scaleY(0) translateY(100%)'};*/
    /*transition: transform 0.5s;*/
`

export const Title = styled.Text`
    width:90%;
    height:10%;
    margin:auto;
`


export const Content = styled.View`
    display:flex;
    flex-direction:column;
    padding:5%;
    width:100%;
    height:90%;
`