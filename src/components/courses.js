import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import CourseCard from '../components/card';

import { primaryColor } from '../styles'

const HorizontalCourses = () => {
    const [activeTab, setActiveTab] = useState('Phython');
    const tabCourses = ['Phython', 'Web Development', 'Aws', 'Machine Learning', 'Others'];
    const scrollElement = useRef(null)

    const scroll = (scrollOffset) => {
        scrollElement.current.scrollLeft += scrollOffset;
    };
    return (
        <CoursesSection>
            <StyledHeading>
                A broad selection of courses
            </StyledHeading>
            <StyledCaption>
                Choose from 185,000 online video courses with new additions published every month
            </StyledCaption>
            <TabsSection>
                {tabCourses.map(tab => (
                    <TabItem active={tab === activeTab} color={primaryColor} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </TabItem>
                ))}
            </TabsSection>
            <Divider />
            <CardsSection ref={scrollElement}>
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Java for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="3.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="4.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="4.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="3.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="4.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="4.3" studentsCount="12,430" price="199" /> <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="3.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="4.3" studentsCount="12,430" price="199" />
                <CourseCard imageUrl="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" title="Python for Beginners - Learn Programming from scratch" author="Coding Tech Solutions" rating="4.3" studentsCount="12,430" price="199" />
            </CardsSection>
            <ArrowIcon onClick={() => scroll(700)}>
                <Icon name='arrow right' color='' />
            </ArrowIcon>
            <LeftArrowIcon onClick={() => scroll(-700)}>
                <Icon name='arrow left' color='' />
            </LeftArrowIcon>
        </CoursesSection>
    )
};

export default HorizontalCourses;


const ArrowIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.07);
  right: -2%;
  top: 55%;
  cursor: pointer;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const LeftArrowIcon = styled(ArrowIcon)`
  left: -2%;
`;

const CardsSection = styled.div`
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`;

const Divider = styled.div`
border-top: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid hsla(0,0%,100%,.1);
`;

const TabItem = styled.span`
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.3px;
    font-weight: ${(props) => props.active ? '600' : '400'};
    color: rgb(0, 0, 0);
    opacity: 1;
    word-break: normal;
    text-decoration: none;
    white-space: nowrap;  
    cursor: pointer;
    margin-right: 26px;
    padding-bottom: 12px;
    border-bottom: ${(props) => props.active ? `3px solid ${props.color}` : 'none'};
`;

const TabsSection = styled.div`
 margin-top: 50px;
 display: flex;
`;

const StyledCaption = styled.div`
font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    font-weight: 500;
    color: rgb(92, 92, 92);
    opacity: 1;
    word-break: normal;
    text-decoration: none;
    white-space: normal;
`;

const StyledHeading = styled.div`
font-size: 28px;
line-height: 40px;
letter-spacing: 0.07px;
font-weight: 600;
color: rgb(0, 0, 0);
opacity: 1;
word-break: normal;
text-decoration: none;
white-space: normal;
`;

const CoursesSection = styled.div`
   margin: 0 100px;
   text-align: left;
   position: relative;
`;



