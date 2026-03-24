import React from "react";
import styled from "styled-components";
import SkillInfo from "../Components/SkillInfo";
import { skills } from "../data";
import { Column } from "../Styles/StyledComponents";

const SkillsContainer = styled(Column)`
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

const SkillPage: React.FC = () => (
  <SkillsContainer>
    {skills.map((skill, index) => (
      <React.Fragment key={index}>
        <SkillInfo skill={skill} />
        {index !== skills.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </SkillsContainer>
);

export default SkillPage;