import styled from "styled-components";

const Sidebar = styled.div`
    background: linear-gradient(${({ theme }) => theme.color.blue} 0%, #ff288f 100%);
    height: 100%;
    width: 100%;
    border-top-left-radius: 16px;
`;

export default Sidebar;
