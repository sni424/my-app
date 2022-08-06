import { useRecoilValue, useSetRecoilState } from "recoil";
import { IoMoon, IoSunny, IoHome } from "react-icons/io5";
import styled from "styled-components";
import { isDarkAtom } from "../../atoms";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const IconDiv = styled.div`
    font-size: 2rem;
    cursor: pointer;
    margin-left: 1rem;
`;

const Header = () => {
    const isDark = useRecoilValue(isDarkAtom);
    const setIsDark = useSetRecoilState(isDarkAtom);
    const toggleDarkMode = () => {
        setIsDark((current) => !current);
    };
    const navi = useNavigate();

    return (
        <HeaderDiv>
            {isDark ? (
                <IconDiv onClick={toggleDarkMode}>
                    <IoMoon />
                </IconDiv>
            ) : (
                <IconDiv onClick={toggleDarkMode}>
                    <IoSunny />
                </IconDiv>
            )}
            <IconDiv
                onClick={() => {
                    navi("/");
                }}
            >
                <IoHome />
            </IconDiv>
        </HeaderDiv>
    );
};

export default Header;
