import styled from 'styled-components';
import { darken } from 'polished';
import * as checkboxStyles from './styles';

const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 9001;
  opacity: 0;

  &[disabled] {
    cursor: not-allowed;
  }

  :checked + ${({ InputDecoratorComponent }) => InputDecoratorComponent} {
    &::before,
    &::after {
      top: 0;
      left: 0;
    }

    &::before {
      background: ${checkboxStyles.checkboxColor};
      border-color: ${darken(0.05, checkboxStyles.checkboxColor)};
      transition: background-color 0.3s;
    }

    &::after {
      content: '';
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==');
      background-position: 50% 40%;
      background-repeat: no-repeat;
      background-size: 70%;
      transition: all 0.25s;
      transform: scale(1);
    }
  }
`;

export default InputComponent;
