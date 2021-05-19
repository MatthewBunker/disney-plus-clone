import styled from 'styled-components';

const Details = (props) => {
    return (
        <Container>
            <MovieTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" />
            </MovieTitle>
            <CTA>
                <Play>
                    <img src="/Images/play-icon-black.png" />
                    <span>PLAY</span>
                </Play>
                <Trailer>
                    <img src="/Images/play-icon-white.png" />
                    <span>TRAILER</span>
                </Trailer>
                <WatchList>
                    <span />
                    <span />
                </WatchList>
                <Group>
                    <img src="/Images/group-icon.png" />
                </Group>
            </CTA>
            <SubTitle>2015 • 1h 35m • Coming of Age, Family, Animation</SubTitle>
            <Description>When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.</Description>
            <BgImg>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </BgImg>
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const BgImg = styled.div`
    left: 0px;
    opacity: .8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        height: 100vh;
        width: 100vw;
    }

    @media (max-width: 768px){
        width: initial;
    }
`;

const MovieTitle = styled.div`
    margin-top: 15vh;

    img{
        max-width: 600px;
        min-width: 200px;
    }
`;

const CTA = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    max-width: 874px;

    div{
        margin-right: 15px;
        border: 1px solid white;
        display: flex;
        align-items: center;
        letter-spacing: 3px;
    }
`;

const Play = styled.div`
   border-radius: 4px;
   color: black;
   background-color: white;
   padding: 10px;

   &:hover{
       opacity: .8;
   }
`;

const Trailer = styled.div`
    border-radius: 4px;
    border: white;
    opacity: .6;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);

    &:hover{
        background-color: grey;
    }
`;

const WatchList = styled.div`
    border-radius: 50%;
    background-color: black;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
          height: 2px;
          transform: translate(1px, 0px) rotate(0deg);
          width: 16px;
        }

        &:nth-child(2) {
          height: 16px;
          transform: translateX(-8px) rotate(0deg);
          width: 2px;
        }
      }
`;

const Group = styled.div`
    border-radius: 50%; 
    background-color: black;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubTitle = styled.div`
    margin: 20px 0 20px 0;
    font-size: 15px;
    min-height: 20px;
    max-width: 874px;
`;

const Description = styled.div`
    letter-spacing: 1.5px;
    line-height: 1.4;
    font-size: 20px;
    margin: 0 0 20px 0;
    max-width: 874px;
`;

export default Details;