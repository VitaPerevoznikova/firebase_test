import styled from "styled-components";

export const RegisterForm = styled.form`
width: 566px; 
height: auto;

border-radius: 30px;
background-color: var(--white);

padding: 64px;

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`;
export const RegisterTitle = styled.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
color: #11101c;
margin-bottom: 20px;
`;

export const RegisterDescription = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.25;
color: rgba(17, 16, 28, 0.5);
margin-bottom: 40px;
`;
export const RegisterInput = styled.input`
border: 1px solid rgba(17, 16, 28, 0.1);
border-radius: 12px;
outline: transparent;

width: 100%;
height: 52px;

padding-left: 18px;

::placeholder{
font-weight: 400;
font-size: 16px;
line-height: 1.25;
color: #11101c;  
}

&:not(:last-of-type) {
    margin-bottom: 18px;   
  }
`;
export const RegisterBtn = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 1.25;
letter-spacing: -0.01em;
color: var(--white);

border-radius: 30px;
border: transparent;
background-color: var(--orange);

padding: 16px 190px;
margin-top: 40px;

width: 100%;
height: 52px;

transition: color var(--time-cubic), background-color var(--time-cubic);

&:hover,
&:focus {
background-color: var(--white);
color: var(--orange);   
}
`;