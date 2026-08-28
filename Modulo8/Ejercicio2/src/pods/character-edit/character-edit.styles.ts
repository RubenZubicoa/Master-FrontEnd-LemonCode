import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1976d2;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  max-width: 600px;
`;

export const input = css`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;    
  border: 1px solid #1976d2;
  width: 100%;
`;

export const button = css`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #1976d2;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
`;