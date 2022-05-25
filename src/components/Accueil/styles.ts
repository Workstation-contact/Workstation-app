import styled from 'styled-components';
import { device } from '../../styles/device';
import { ContainerSize } from '../../styles/global';

export const Container = styled(ContainerSize)`
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	h1 {
		font-family: 'Grifter', serif;
		font-size: 34px;
		text-transform: uppercase;

		.w {
			height: 38px;
			margin-right: -8px;
      filter: ${(props) => props.theme.colors.svgcolor};
		}
	}

	.header-text-container {
		margin-top: 80px;
		width: 40%;

		p {
			margin-top: 12px;
			font-size: 20px;
			color: ${(props) => props.theme.colors.text};
		}
	}

	.header-cta {
		margin-top: 20px;
		margin-left: -4px;
		width: 140px;
		line-height: 48px;
		text-align: center;
		border-radius: 8px;
		background-color: ${(props) => props.theme.colors.card};
		position: relative;

		&:before {
			content: "";
			position: absolute;
			inset: 0;
			border-radius: 8px;
			padding: 2px;
			background: linear-gradient(141.08deg, ${(props) => props.theme.colors.border} 13.56%, ${(props) => props.theme.colors.border2} 85.76%);
			-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
		}

		a {
			color: ${(props) => props.theme.colors.text};
			text-decoration: none;
			font-size: 16px;
			position: relative;
			display: block;
			z-index: 98;
		}
	}

	.header-container-img {
		width: 60%;
		margin-top: 32px;

		img {
			width: 100%;
			position: relative;
			z-index: -1;
			float: right;
		}
	}

  @media ${device.laptop} {
    flex-direction: column;

    .header-text-container {
    width: 100%;
    margin-top: 32px;
    }

    .header-container-img {
    width: 100%;
    }
    
  }

   @media ${device.tabletS} {
    .header-text-container {
		margin-top: 32px;
		width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	}
   }

  @media ${device.mobileL} {

    .header-container-img {
		width: 100%;
		margin-top: 20px;
	}

    h1 {
      font-size: 26px;
      .w {

      }
    }

    .header-cta {
    width: 132px;
    a {
      font-size: 14px;
    }
  }

  .header-text-container {
    margin-top: 20px;
    width: 100%;

    p {
      font-size: 18px;
    }
  }
  }
`;
