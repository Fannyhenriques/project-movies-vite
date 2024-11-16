/* eslint-disable react/prop-types */
import styled from "styled-components"

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "repeat(auto-fill, minmax(0, 250px))"};
  gap: ${(props) => props.gap || "1px"};
  max-width: 100%;
`;

export const Grid = ({ columns, gap, children }) => {
  return (
    <GridStyle columns={columns} gap={gap}>
      {children}
    </GridStyle>
  );
};