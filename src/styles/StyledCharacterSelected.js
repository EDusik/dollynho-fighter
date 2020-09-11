import styled from 'styled-components';

export const StyledCharacterSelected= styled.div`

    height: 45vh;
    padding: 5vh 0 5vh 0;
    width: 100%;
    .centered {
        margin: 0 auto;
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0px;
    }

    .right {
        float: right;
    }

    .left {
        float: left;
    }

    .dolly-selected {
        height: 40vh;
    } 

    li > span {
        font-family: 'Luckiest Guy', serif;
        font-size: 18px;
        background: -webkit-linear-gradient(#e13224, #efff36);
        white-space: nowrap;
        color: white;
        border-radius: 16px;
        padding: 6px 16px;
    }

    ul {
        margin-left: 15px;
        margin-top: 100px;
    }

    li {
        height: 40px;
        text-align: left;
    }

`
