import styled, { keyframes } from 'styled-components';

export const FadeDelay = keyframes`
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
`;

export const LoaderContainer = styled.div`
    margin: 0 auto;
    width: 20px;
    height: 20px;
    position: relative;
    //margin: 5px;
`;

export const LoaderCircle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 10%;
        height: 25%;
        background-color: #333;
        border-radius: 35%;
        -webkit-animation: ${FadeDelay} 1.2s infinite ease-in-out both;
        animation: ${FadeDelay} 1.2s infinite ease-in-out both;  
    }
`;

export const LoaderItem2 = styled(LoaderCircle)`
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
    &:before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }
`;

export const LoaderItem3 = styled(LoaderCircle)`
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
    &:before {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }
`;

export const LoaderItem4 = styled(LoaderCircle)`
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    &:before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }
`;

export const LoaderItem5 = styled(LoaderCircle)`
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
    &:before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }
`;

export const LoaderItem6 = styled(LoaderCircle)`
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
    &:before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
    }
`;

export const LoaderItem7 = styled(LoaderCircle)`
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    &:before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
    }
`;

export const LoaderItem8 = styled(LoaderCircle)`
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);
    &:before {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
    }
`;

export const LoaderItem9 = styled(LoaderCircle)`
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
    &:before {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
    }
`;

export const LoaderItem10 = styled(LoaderCircle)`
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    &:before {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
    }
`;

export const LoaderItem11 = styled(LoaderCircle)`
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);
    &:before {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
    }
`;

export const LoaderItem12 = styled(LoaderCircle)`
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);
    &:before {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
    }
`;
