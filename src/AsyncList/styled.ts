import styled from 'styled-components';
import { HiddenScrollbar, Scrollbar } from '../../styled';

export const AsyncListContainer = styled.div<{
  isReverse?: boolean;
  isHiddenScroll?: boolean;
}>`
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  flex-grow: 1;
  @supports (scrollbar-gutter: stable) {
    overflow: auto;
    scrollbar-gutter: stable;
  }
  width: 100%;
  display: flex;
  flex-direction: ${({ isReverse }) =>
    isReverse ? 'column-reverse' : 'column'};
  ${({ isHiddenScroll }) => (isHiddenScroll ? HiddenScrollbar : Scrollbar)}
`;

export const AsyncListBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  & .async-list {
    &__loader {
      &_show {
        opacity: 1;
      }
      &_hidden {
        opacity: 0;
      }
    }
  }
`;
