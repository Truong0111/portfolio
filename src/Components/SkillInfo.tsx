import React from "react";
import styled from "styled-components";
import type { Skill } from "../types";

interface SkillInfoProps {
  skill: Skill;
}

const SkillInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillCategory = styled.h2`
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color: #00ced1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SkillList = styled.ul`
  margin: 0;
  padding-left: 20px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillInfo: React.FC<SkillInfoProps> = ({ skill }) => {
  return (
    <SkillInfoContainer>
      <SkillCategory>Programming:</SkillCategory>
      <SkillList>
        {skill.programming.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </SkillList>

      <SkillCategory>Tools:</SkillCategory>
      <SkillList>
        {skill.tools.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </SkillList>

      {skill.other && skill.other.length > 0 && (
        <>
          <SkillCategory>Other Skills:</SkillCategory>
          <SkillList>
            {skill.other.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </SkillList>
        </>
      )}
    </SkillInfoContainer>
  );
};

export default SkillInfo;