import styled from 'styled-components';
import { device } from '../../styles/device';
import { ContainerSize } from '../../styles/global';

export const ContainerFooter = styled(ContainerSize)`
	background-color: ${(props) => props.theme.colors.card};
	display: flex;
	align-items: center;
	justify-content: center;
  border-radius: 12px 12px 0px 0px;
  margin-top: 120px;
  position: relative;

  .logo {
		filter: ${(props) => props.theme.colors.svgcolor};
	}

  .linkedin {
		filter: ${(props) => props.theme.colors.svgcolor};
	}

	.footer {
    width: 100%;

    &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px 12px 0px 0px; 
    padding: 2px; 
    background: linear-gradient(141.08deg, ${(props) => props.theme.colors.border} 13.56%, ${(props) =>
	props.theme.colors.border2} 85.76%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude; 
  }

	.footer-inner {
		margin: 32px;


      .btn {
        padding: 12px 20px;
        margin: 0px 10px;
        background-color: ${(props) => props.theme.colors.transparent};
        border-radius: 8px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .btn1 {
        padding: 13px;
        margin: 0px 10px;
        background-color: ${(props) => props.theme.colors.transparent};
        border-radius: 8px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .btn2 {
        padding: 14px 20px;
        margin: 0px 10px;
        background-color: ${(props) => props.theme.colors.transparent};
        border-radius: 8px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    }

		a {
			color: ${(props) => props.theme.colors.text};
			text-decoration: none;
			font-size: 16px;
		}

		ul li {
			list-style: none;
		}

		.footer-nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			list-style: none;
		}

		.footer-text {
			text-align: center;
			width: 50%;
			margin: 60px auto;
			font-size: 46px;
		}

		.footer-cta {
			display: flex;
			justify-content: center;

			a:not(:first-child) {
				margin-left: 20px;
			}
		}

		.footer-info ul {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin: 60px 0px;
			font-size: 12px;

			li {
				padding: 0px 6px;
			}
		}

		.by {
			position: absolute;
			right: -42px;
			bottom: 150px;
			font-size: 12px;
			transform: rotate(-90deg);
		}
	
	}

	@media ${device.tabletS} {
  .footer {
    .footer-inner {

			.btn {
        width: 80%;
				text-align: center;
				margin: 10px auto;
    }

      .footer-info ul {
        display: flex;
        flex-direction: column;
      
        li {
          padding: 8px 0px;
        }
      }

			.footer-cta {
        display: flex;
        flex-direction: column;
				 li {
					 width: 100%;
				 }
      
      }

      .footer-text {
        width: 80%;
        font-size: 38px;
      }
      
      .by {
        position: relative;
        transform: rotate(0deg);
        bottom: 12px;
        right: 0px;
        text-align: center;
        margin-top: 12px;    
      }
    }
  }
}

  
`;
