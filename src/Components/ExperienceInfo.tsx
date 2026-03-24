import React from "react";
import styled from "styled-components";
import type { Experience } from "../types";

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ExperienceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-left: 3px solid #00ced1;
  padding-left: 10px;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color: #00ced1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PositionTime = styled.span`
  font-size: 1.1rem;
  color: silver;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const DescriptionList = styled.ul`
  margin: 5px 0 0 15px;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ExperienceComponent: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <ExperienceContainer>
      {experiences.map((exp, index) => (
        <ExperienceRow key={index}>
          <CompanyName>{exp.company}</CompanyName>
          {exp.position}
          <PositionTime>{exp.time}</PositionTime>
          {exp.description && exp.description.length > 0 && (
            <DescriptionList>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </DescriptionList>
          )}
        </ExperienceRow>
      ))}
    </ExperienceContainer>
  );
};

export default ExperienceComponent;
