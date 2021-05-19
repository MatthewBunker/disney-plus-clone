import { useEffect } from "react"; 
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';
import {auth, provider } from '../firebase';

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user)
                history.push('/home')
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if(!userName) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message)
            });
        }
        else if (userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/')
            }).catch((err) => alert(err.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails ({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <DisneyLogo>
                <img src="/Images/logo.svg" alt="Disney+" />
            </DisneyLogo>

            {!userName ? (<Login onClick={handleAuth}>Login</Login>) : 
                (<>
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
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>)
            }
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

const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,.34);
    border-radius: 4px;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    font-size: 14px;
    letter-spacing: 3px;
    opacity: 0;
    width: 101px;
    text-align: center;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
            background: rgb(40,40,40);
        }
    }
`;

export default Header;