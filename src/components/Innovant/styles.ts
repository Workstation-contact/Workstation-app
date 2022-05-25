import styled from 'styled-components';
import { device } from '../../styles/device';
import Fond from '../../images/fond.png';
import Detail from '../../images/detail2.png';
import { ContainerSize } from '../../styles/global';

export const ContainerInnovant = styled.div`
	background-color: ${(props) => props.theme.colors.bgInnovant};
	margin-top: 120px;
	padding: 100px 0px 160px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${(props) => props.theme.colors.composition});
	background-repeat: no-repeat;
	background-size: 30%;
	background-position: 95% 50%;

  h2 {
    margin: 0px;
    font-size: 46px;
    position: relative;
    z-index: 1;

    &::after {
      display: block;
        content: '';
        background-image: url(${(props) => props.theme.colors.hEffect});
        background-repeat: no-repeat;
       width: 120px;
			 border-radius: 8px;
       margin-left: 32px;
       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
       height: 42px;
       position: absolute;
       z-index: -1;
       bottom: 0;
       left: 0;
     }
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
    font-size: 26px;
    text-align: left;
  }

	@media ${device.laptop} {
		background-size: 40%;
		background-position: 100% 68%;
	}

	@media ${device.tablet} {
		h3 {
			font-size: 22px;
		}

		h2 {
			font-size: 40px;
		}
	}

	@media ${device.tabletS} {
		background-size: 40%;
		background-position: 100% 70%;
	}

	@media ${device.mobileL} {
		background-size: 40%;
		background-position: 100% 75%;
		h3 {
			font-size: 18px;
		}

		h2 {
			font-size: 32px;
		}
	}
`;

export const ContainerInner = styled(ContainerSize)`

`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;

	.wbox-img {
		flex: 1;
		min-width: 300px;
		align-self: flex-end;

		img {
			width: 100%;
		}
	}

	.wbox-text {
		flex: 1;
		vertical-align: middle;

		p {
			margin-bottom: 12px;
			text-align: justify;
			font-size: 18px;
      color: ${(props) => props.theme.colors.text};
		}
	}

	@media ${device.laptop} {
		flex-direction: column;

		.wbox-img {
			margin-top: -110px;
		}

		.wbox-text {

		p {
			margin-top: 20px;
			margin-bottom: 0px;
			text-align: justify;
			font-size: 18px;
      color: ${(props) => props.theme.colors.text};
		}
	}
	}

	@media ${device.tablet} {
		flex-direction: column;

		.wbox-img {
			margin-top: -60px;
		}
	}

	@media ${device.tabletS} {

		.wbox-img {
			margin-top: -32px;
		}
	}

	@media ${device.mobileL} {

	.wbox-img {
		margin-top: -20px;
	}

	.wbox-text {

p {

	font-size: 16px;
}
}
}

`;
