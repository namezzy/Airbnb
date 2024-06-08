import styled from "styled-components";

export const TabWrapper = styled.div`
    display: flex;

    .item {
        box-sizing: border-box;
        padding: 14px 16px;
        margin-right: 3px;
        font-size: 17px;
        text-align: center;
        border: 0.5px solid #D8D8D8;
        white-space: nowrap;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow};

        &:last-child {
            margin-right: 0;
        }

        &.active {
            color: #fff;
            background-color:  ${props => props.theme.color.secondaryColor};
        }
    }
`