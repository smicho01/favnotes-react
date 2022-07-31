import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import linkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 30px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${linkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const Card = ({ cardType }) => {
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>Hello Maknaka</StyledHeading>
        <DateInfo>3 days</DateInfo>
        {cardType === 'twitter' && <StyledAvatar src="https://unavatar.io/twitter/severinum" />}
        {cardType === 'article' && <StyledLinkButton href="http://google.com" />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam nesciunt eveniet eum
          harum numquam minus ducimus veniam perferendis modi soluta ipsam, libero fugit quis saepe
          incidunt, aperiam ratione? Molestiae?
        </Paragraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
