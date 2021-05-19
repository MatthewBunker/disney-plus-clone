import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Recommended from './Recommended';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

    useEffect(() => {
        db.collection('Movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(doc);
                switch(doc.data().type) {
                    case 'recommend':
                        recommends.push({id: doc.id, ...doc.data() })
                        break;
                    case 'new':
                        newDisneys.push({id: doc.id, ...doc.data() })
                        break;
                    case 'original':
                        originals.push({id: doc.id, ...doc.data() })
                        break;
                    case 'trending':
                        trendings.push({id: doc.id, ...doc.data() })
                        break;
                    default:
                }
            });

            dispatch(
                setMovies ({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trendings,
                })
            );
        });  
    }, [userName]);


    return(
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommended />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/Images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;