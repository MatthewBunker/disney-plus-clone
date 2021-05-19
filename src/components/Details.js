import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import db from "../firebase";

const Details = (props) => {
    const { id } = useParams();
    const [ detailData, setDetailData ] = useState({});

    useEffect(() => {
        db.collection('Movies')
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists) {
                setDetailData(doc.data());
            }
            else {
                console.log("No such Movie in database");
            }
        })
        .catch((error) => {
            console.log("Eror getting document: ", error);
        });
    }, [id]);

    return (
        <Container>
            <MovieTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
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
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
            <BgImg>
                <img src={detailData.backgroundImg} alt={detailData.title}/>
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

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: scale(1.05);
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

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transform: scale(1.05);
    }
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