import styled from 'styled-components';
import { device } from '../../styles/device';

export const Container = styled.div`
  width: calc(100% - 120px);
  margin: auto;
  margin-top: 120px;

  h2 {
    font-family: 'Grifter', sans-serif;
  font-size: 36px;
  }

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media ${device.laptop} {
    flex-wrap: wrap;
  }

  @media ${device.tabletS} {
    flex-direction: column;
    flex-wrap: nowrap!important;
  }
`;

export const ProductCard = styled.div`
position: relative;
img {
position: relative;
    width: 100%;
    z-index: 1;
    pointer-events: none;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 120;
    width: 100%;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: 8px;
  }

&:hover {

    video {
      opacity: 100;
    }
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px; 
    padding: 2px; 
    background: linear-gradient(141.08deg, ${(props) => props.theme.colors.border} 13.56%, ${(props) => props.theme.colors.border2} 85.76%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude; 
  }

  position: relative;
  padding: 1rem;
  color: ${props => props.theme.colors.text};
  flex: 1;
  background-color: ${props => props.theme.colors.card};
  border-radius: 8px;
  max-width: 400px;

  &:nth-child(1) {
    margin-right: 1rem;
  }

  &:nth-child(2) {
    margin-right: 1rem;
  }

  .product-card {
    .product-title {
      height: 64px;
  
      h3 {
        font-size: 18px;
        font-weight: semiBold;
        font-family: 'Grifter', sans-serif;
  
      }
    }
  
    .product-img {
      width: 100%;
      margin: auto;
  
      img {
        width: 100%;
        margin: auto;
      }
    }
  
    .product-desc {
      margin-top: 12px;
  
      p {
        font-size: 16px;
      }
    }
  
  }

    @media ${device.laptop} {
      min-width: 300px;

      &:nth-child(2) {
        margin-right: 0rem!important;
      }
  
      &:nth-child(3) {
        margin: 1rem auto 1rem auto;
        max-width: 50%;
      }
    }
  
    @media ${device.tablet} {

      min-width: 220px;
      

    }

    @media ${device.tabletS} {

      min-width: 220px;

      &:nth-child(1) {
        margin-bottom: 1rem;
        margin-right: 0rem;
      }

      &:nth-child(2) {
      }

      &:nth-child(3) {
        max-width: 400px;
        margin: 1rem 0rem 0rem 0rem;
      }

    }
`;