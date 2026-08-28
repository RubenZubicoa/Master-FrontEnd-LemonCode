import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const characterCard = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
`;

export const characterName = css`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const viewDetailsButton = css`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #1976d2;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
`;