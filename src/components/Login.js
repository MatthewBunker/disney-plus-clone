import styled from 'styled-components/macro'

const Login = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoTop src="/Images/cta-logo-one.svg" alt="Disney Companies"/>
                <SignUp>Sign Up</SignUp>
                <Description>Matthew Bunker's Disney+ Clone App. <GithubLink href="https://github.com/MatthewBunker" target="_blank" rel="noreferrer">Github Link.</GithubLink></Description>
                <CTALogoBottom src="/Images/cta-logo-two.png" alt="Disney+ Companies"/>
            </CTA>
            <BgImage />
        </Content>
    </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center; //makes content horizontally centered
    align-items: center; //makes content vertically centered
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/Images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity .2s;
    width: 100%;
`;

const CTALogoTop = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    line-height: 1.5em;
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 15px;
    width: 100%;
    letter-spacing: 1px;
`;

const GithubLink = styled.a`
    color: #0063e5;
`;

const CTALogoBottom = styled.img`
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    margin-bottom: 20px;
    vertical-align: center;
`;


export default Login;