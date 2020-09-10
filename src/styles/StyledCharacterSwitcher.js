import styled from 'styled-components';

export const StyledCharacterSwitcher = styled.div`

    height: 30vh;

    .container {
        
        margin: 0 auto;
        display: flex;
    }

    .row {
        max-width: 100%;
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .item {
        flex: 1 1 200px;
    }

    .item {
        flex: 1 1 200px;
    }

    .box-select {
        width: 96px;
        height: 96px;
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .box-select:hover {
        cursor: pointer;
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
    }

    .colored-false {
        -webkit-filter: grayscale(100%); 
        filter: grayscale(100%);
        margin: 0 2px 2px 0;
    }

    .colored-true {
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
        animation: flash 300ms linear; 
        outline: 2px solid yellow;
        margin: 0 2px 2px 0;
    }

    @keyframes flash {
        0% {
            filter:brightness(100%);
        }
        20% {
            filter:brightness(150%);
        }
        40% {
            filter:brightness(100%);
        }
        60% {
            filter:brightness(150%);
        }
        80% {
            filter:brightness(100%);
        }
        100% {
            filter:brightness(150%);
        }
    }

    @media (max-width: 768px) {
        .row {
            padding: 0 5px 0 5px;
        }
    }

    .bg-selected {
        border-radius: 30px;
        min-height: 100px;
        padding: 26px;
        background-color:rgba(30, 30, 30, 0.75)
    }
`
