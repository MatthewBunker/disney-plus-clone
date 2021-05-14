import styled from 'styled-components/macro'
import { auth, provider } from '../firebase';

const Header = (props) => {

    const handleauth = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
        }).catch((error) => {
            alert(error.message)
        });
    };

    return (
    <Nav>
        <DisneyLogo>
            <img src="/Images/logo.svg" alt="Disney+" />
        </DisneyLogo>
        <Menu>
            <a href="/home">
                <img src="/Images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
            </a>
            <a href="/search">
                <img src="/Images/search-icon.svg" alt="HOME" />
                <span>SEARCH</span>
            </a>
            <a href="/watchlist">
                <img src="/Images/watchlist-icon.svg" alt="HOME" />
                <span>WATCHLIST</span>
            </a>
            <a href="/originals">
                <img src="/Images/original-icon.svg" alt="HOME" />
                <span>ORIGINALS</span>
            </a>
            <a href="/movies">
                <img src="/Images/movie-icon.svg" alt="HOME" />
                <span>MOVIES</span>
            </a>
            <a href="/series">
                <img src="/Images/series-icon.svg" alt="HOME" />
                <span>SERIES</span>
            </a>
        </Menu>
        <Login onclick={handleauth}>Login</Login>
    </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 36px;
    padding-right: 36px;
    letter-spacing: 1.5px;
    z-index: 3;

    a {
        display: flex;
        align-items: center;
        padding-right: 12px;

        img{
            min-width: 20px;
            z-index: auto;
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: right left;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover{
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
`;

const DisneyLogo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
        height: 100%;
    }
`;

const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-row: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: 25px;
    margin-left: 25px;

    @media (max-width: 768px){
        display: none;
    }
`;

const Login = styled.a`
    height: 100%;
    width: 80px;
    justify-content: center;
    border-radius: 4px;
    padding-right: 0px !important;

    &:hover {
        background-color: #0483ee;
        border: 1px transparent;
        height: 40px;
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`;

export default Header;