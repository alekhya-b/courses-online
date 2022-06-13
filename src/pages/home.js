import React from 'react';
import styled from 'styled-components';
import { Image, Popup } from 'semantic-ui-react';

import HorizontalCourses from '../components/courses';

import { primaryColor, lightPrimaryColor } from '../styles'

const Home = () => {

  const menuItems = ['Home', 'Free Courses', 'Trainings', 'Courses'];

  return (
    <div>
      {/* ----NavBar Section----- */}
      <Navbar color={primaryColor}>
        <Flex>
          <Image src='/images/git.png' width="10%" />
          <Flex>
            {menuItems.map(menuItem => <MenuItem>{menuItem}</MenuItem>)}
          </Flex>
        </Flex>
        <RightContainer>
          <StyledPopup
            header="Alekhyaa"
            content="Web Developer"
            trigger={<ProfileIcon />}
          >
          </StyledPopup>
        </RightContainer>
      </Navbar>
      {/* ----Banner Section----- */}
      <BannerSection>
        <TitleSection>
          <BannerTitle>Learn Without Limits</BannerTitle>
          <Description>
            Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
          </Description>
          <Flex>
            <PrimaryButton color={primaryColor} secondaryColor={lightPrimaryColor}>Buy Course</PrimaryButton>
            <SecondaryButton color={primaryColor}>
              Try Premium
            </SecondaryButton>
          </Flex>
        </TitleSection>
        <BannerImageSection>
          <StyledBanner src="https://cdni.iconscout.com/illustration/premium/thumb/study-at-home-2527770-2114673.png"></StyledBanner>
        </BannerImageSection>
      </BannerSection>
      {/* ----Courses Section----- */}

     <HorizontalCourses />
     <HorizontalCourses />

     <HorizontalCourses />


    </div>
  );
}

export default Home;

const StyledBanner = styled.img`
    margin-top: 50px;
    margin-right: auto;
    width: 110%;
`;

const PrimaryButton = styled.button`
border-radius: 4px;
text-align: center;
max-width: 320px;
border: none;
color: #fff;
background-color: ${(props) => props.color};
font-size: 1rem;
line-height: 1.5rem;
outline: none;
font-weight: 700;
letter-spacing: -0.1px;
padding: 12px 32px;
font-size: 20px;
height: 72px;
margin-right: 10px;
width: 238px;
cursor: pointer;
&:hover {
background-color: ${(props) => props.secondaryColor};
}
`;

const SecondaryButton = styled.div`
cursor: pointer;
border-radius: 4px;
text-align: center;
transition: none;
background-color: #fff;
color: ${(props) => props.color};
font-size: 18px;
line-height: 1.5rem;
font-weight: 700;
letter-spacing: -0.1px;
padding: 12px 32px;
align-items: center;
border: 2px solid ${(props) => props.color};
height: 72px;
margin-left: 0px;
text-decoration: none;
vertical-align: top;
width: 320px;
display: flex;
align-items: center;
justify-content: center;
}
`;

const Description = styled.p`
    color: rgb(92,92,92);
    font-size: 1.25rem;s
    line-height: 1.75rem;
    font-weight: 500;
    letter-spacing: -0.1px;
    margin-top: 24px;
    margin-bottom: 24px;
`;


const BannerTitle = styled.span`
  font-size: 5.25rem;
  font-weight: 600;
  letter-spacing: 0.2;
  line-height: 5.75rem; 
  padding: 40px 0 55px;
`;

const BannerImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const TitleSection = styled.div`
  flex: 1;

  margin-left: 100px;
    margin-right: 180px;
    padding: 70px 0 55px;
    text-align: left;
`;


const BannerSection = styled.div`
  display: flex;
  min-height: 500px;
  height: auto;
  align-items: center;
  justify-content: center;
`;


const StyledPopup = styled(Popup)`
  && {
    border: 1px solid lightgrey;
    border-radius: 3px;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.07);
    &::before {
      box-shadow: none !important;
      background-color: transparent !important;
    }
  }
`;

const Navbar = styled.div`
 display: flex;
 padding: 10px;
 background-color: ${(props) => props.color};
 align-items: center;
 height: 70px;
`;

const Flex = styled.div`
 display: flex;
 align-items: center;
`;

const RightContainer = styled.div`
display: flex;
padding-right: 20px;

`;

const MenuItem = styled.span`
  color: white ;
  font-size: 16px;
  padding-left: 60px;
  font-weight: 600;
  cursor: pointer;
`;

const ProfileIcon = styled.div`
width: 40px;
height: 40px;
cursor: pointer;
background-size: cover;
border: 2px solid #57cad4;
border-radius: 50%;
background-color: white;
background-image: url("https://media-exp2.licdn.com/dms/image/C4E03AQFI4YK7Ag2row/profile-displayphoto-shrink_800_800/0/1652252129231?e=1660176000&v=beta&t=f3_sMBfvo42vXe68keo9ANus5-H3AcmOuyzg-UTyths");
  `;

