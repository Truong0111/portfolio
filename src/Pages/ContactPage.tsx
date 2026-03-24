import React from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const mail = "truongquangtruong123@gmail.com";
const facebook = "https://www.facebook.com/boy0111.2002";
const phone = "+84944439518";

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 40px;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const ContactList = styled(Column)`
  gap: 16px;
`;

const ContactRow = styled.div`
  display: flex;
  gap: 8px;
  font-size: 1.5rem;
  color: white;
`;

const Label = styled.span`
  font-weight: bold;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactMe: React.FC = () => {
  return (
    <CenterContainer>
      <ContactList>
        <ContactRow>
          <Label>Email:</Label>
          <ContactLink href={`mailto:${mail}`}>{mail}</ContactLink>
        </ContactRow>
        <ContactRow>
          <Label>Facebook:</Label>
          <ContactLink href={facebook} target="_blank" rel="noopener noreferrer">{facebook}</ContactLink>
        </ContactRow>
        <ContactRow>
          <Label>Phone:</Label>
          <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
        </ContactRow>
      </ContactList>
    </CenterContainer>
  );
};

export default ContactMe;