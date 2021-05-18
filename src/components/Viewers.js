import styled from 'styled-components';

const Viewers = (props) => {
    return(
        <ViewBox>
            <View>
                <img src="/Images/viewers-disney.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </View>
            <View>
                <img src="/Images/viewers-pixar.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </View>
            <View>
                <img src="/Images/viewers-marvel.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </View>
            <View>
                <img src="/Images/viewers-starwars.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </View>
            <View>
                <img src="/Images/viewers-national.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/Videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </View>
        </ViewBox>
    );
};

const ViewBox = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    // display: flex;
    // justify-content: space-evenly;
    // flex-direction: row;

    @media (max-width: 768px){
        // flex-direction: column;
        // jusitfy-content: center;
        
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const View = styled.div`
    // margin: 60px 15px;
    border: 3px solid rgba(249,249,249, .1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier( .35, .46, .45, .94);
    cursor: pointer;
    padding-top: 56.25%;
    
    img {
        inset: 0px;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0px;
        position: absolute;
        display: block;
        object-fit: cover;
        opacity: 1;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        border: 3px solid rgba( 249, 249, 249, .8);
        transform: scale(1.05);

        video {
            opacity: 1;
        }
    }
`;

export default Viewers