import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 67px;
  width: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};

  &:hover {
    background-color: white;
  }

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
