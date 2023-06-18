import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarMenu, SideBarRoute, SideBarWrapper, SideBtnWrap } from './SideBarElements'
import { useNavigate } from 'react-router-dom';

const SideBar = ({isOpen,toggle}) => {
    const navigate = useNavigate();
        function logout(){
            localStorage.removeItem("token");
            navigate("/", { replace: false });
            window.location.reload(false)
        }
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>zz
                    <SideBarLink onClick={toggle} to="/Signin/SigninUser/Main/recherche">Rechercher</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute onClick={()=>{logout()}}> Deconnecter</SideBarRoute>
                </SideBtnWrap> 
            </SideBarWrapper> 
        </SideBarContainer>
    )
}

export default SideBar;