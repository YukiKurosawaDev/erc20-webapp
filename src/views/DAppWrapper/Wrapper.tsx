import { Message, MessageProps } from '@yuki_kurosawa/uikit';
import React from 'react';

const MessageWrapper: React.FC<MessageProps> = ({ variant ,children }) => {

    const msgstyle : React.CSSProperties = {
        width:"95%",
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'10px',
        marginBottom:'10px',
        wordBreak:"break-all",
        fontSize:"14px"
    };

    return (
        <div style={msgstyle}>
            <Message variant={variant} icon={<div></div>}>{children}</Message>
        </div>
    );
};

const DAppWrapper: React.FC<object> = ({children}) => {

    const width=window.screen.availWidth;
    const div=width>=1200?"50%":(width*0.95)+"px";

    const divstyle : React.CSSProperties = {
        width:div,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'2.5%',
    };

    return (
        <div style={divstyle}>
            <MessageWrapper variant='warning'>
                Make sure the site you visit is ksyuki.app
            </MessageWrapper>
            {children}
        </div>
    )
}

export { DAppWrapper, MessageWrapper };