import React, {useState} from 'react';
import { Wrapper , ModalBox, Title, CloseBtn, Content } from './style.js';

const BottomMenu = ({children, title, active}) => {

    //const [active, setActive] = useState(false)

    return (
        <Wrapper className="modal"  active={active}>
            <ModalBox active={active}>
                <Title>{title}</Title>
                <Content>
                    {children}
                </Content>
            </ModalBox>
        </Wrapper>
    );
};
export default BottomMenu;
