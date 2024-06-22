import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .MuiPaginationItem-icon  {
        font-size: 24px ;
      }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .MuiPaginationItem-page {
      margin: 0 9px;

      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .desc {
      margin-top: 16px;
    }
  }
`;
