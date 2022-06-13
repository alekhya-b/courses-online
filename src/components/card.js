import React from 'react';
import styled from 'styled-components';
import { Rating } from 'semantic-ui-react'

const CourseCard = ({title, imageUrl, author, rating, price, studentsCount}) =>  (
    <Container>
    <CardContainer>
        <Banner url={imageUrl}>
        </Banner>
        <Content>
        <StyledTitle>{title}</StyledTitle>
        <Author>
           {author}
        </Author>
        <Ratings>
            <RatingNum>{rating}</RatingNum>
            <StarsContainer>
            <Rating icon='star' defaultRating={Math.floor(rating)} maxRating={5} />
            </StarsContainer>
            <Count>({studentsCount})</Count>
        </Ratings>
        <Price>
            ${price}
        </Price>
        </Content>
    </CardContainer>
    </Container>
);

export default CourseCard;

const Price = styled.span`
  font-weight: 600;
  color: black;
  font-size: 16px;
`;

const StarsContainer = styled.div`
 margin: 0px 8px;
`;

const Count = styled.span`
 color: #6a6f73
`;

const RatingNum = styled.span`
  color: #b4692b;
  font-weight: 500;
`;

const Ratings = styled.div`
 display: flex;
 padding: 6px 0;
`;

const Author = styled.span`
 font-size: 12px;
 color: rgb(92, 92, 92);
 line-height: 24px;
`;

const Content = styled.div`
 padding: 5px;
`;

const StyledTitle = styled.div`
font-weight: 600;
line-height: 20px;
font-size: 16px;
`;

const Banner = styled.div`
  height: 130px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
`;

const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 60px;
  padding-right: 26px;
  width: 33%;
`;

const CardContainer = styled.div`
  width: 278px;
  height: 268px;    
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.6s;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    // box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);  }
`;