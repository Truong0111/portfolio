import React from "react";
import styled from "styled-components";
import ExperienceComponent from "../Components/ExperienceInfo";
import { experiences } from "../data";
import { Column } from "../Styles/StyledComponents";

const ExperienceContainer = styled(Column)`
  gap: 80px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const ExperiencePage: React.FC = () => (
  <ExperienceContainer>
    {experiences.map((exp, index) => (
      <React.Fragment key={index}>
        <ExperienceComponent experiences={[exp]} />
        {index !== experiences.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </ExperienceContainer>
);

export default ExperiencePage;