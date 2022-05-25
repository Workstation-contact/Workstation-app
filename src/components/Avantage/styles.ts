import styled from 'styled-components';
import { device } from '../../styles/device';

export const Container = styled.div`
  width: calc(100% - 120px);
  margin: auto;
  margin-top: -140px;

  @media ${device.tabletS} {
    width: calc(100% - 60px);
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
    align-items: center;
  }
`;

export const ProductCard = styled.div`
      
      overflow: hidden; 

.text-hover {
    visibility: hidden;
    position: absolute;
    p {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 16px;
      height: 100%;
      /* transform: scaleX(0);
      transform: scaleY(0); */
      transform: translateY(-200px);
    }
  }

  &:hover .text-hover {
      visibility: visible;
      position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 8px;
    top: 2px;
    left: 2px;
    text-align: center;
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      background-color: ${props => props.theme.colors.card};
    transition: all 300ms ease-in-out;
      /* transform: scaleY(0);
      transform: scaleX(1); */
      transform: translateY(0px);


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

  text-align: center;
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

  &:nth-child(3) {
    margin-right: 1rem;
  }

  .product-card {
    .product-title {
      height: 64px;
  
      h3 {
        font-size: 18px;
        font-weight: semiBold;
        font-family: 'Grifter', sans-serif;
        position: relative;
        z-index: 130;
      }
    }
  
    .product-img {
      width: 140px;
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
        margin-right: 0rem;
      }
  
      &:nth-child(3) {
        margin-top: 1rem;
      }

      &:nth-child(4) {
        margin-top: 1rem;
      }
    }
  
    @media ${device.tablet} {

      min-width: 220px;

    }

    @media ${device.tabletS} {

      min-width: 220px;
      max-width: 280px;

      &:nth-child(1) {
        margin-bottom: 1rem;
        margin-right: 0rem;
      }

      &:nth-child(3) {
        margin-right: 0rem;
      }

      &:nth-child(3) {
        margin-right: 0rem;
      }

    }
`;