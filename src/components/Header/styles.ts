import styled from 'styled-components';
import { device } from '../../styles/device';
import img from '../../images/bg.svg';

export const ContainerNav = styled.div`
	width: 100%;
	height: 72px;

	.link-linkedin {
    position: fixed; 
    z-index: 600;
    top: 50%;
    right: 0; 
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		background-color: ${(props) => props.theme.colors.transparent};
		backdrop-filter: blur(60px);
    -webkit-backdrop-filter: blur(100px);
		border-radius: 8px 0px 0px 8px;

    a {
			display: block;
  text-align: center;
        width: 62px;
        line-height: 70px;
        height: 58px;
        color: ${(props) => (props.theme.colors.text)};
    }
}

	.participer {
		height: 50px;
		margin-left: 32px;
		width: 140px;
		line-height: 42px;
		text-align: center;
		border-radius: 8px;
		font-family: 'grifterbold';
		background-color: ${(props) => props.theme.colors.card};
		position: relative;

		a {
			font-family: 'grifterbold';
			width: 140px;
			line-height: 55px;
			letter-spacing: 1px;
			height: 48px;
			color: ${(props) => props.theme.colors.text};
			position: relative;
			z-index: 99;
		}

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
	}

	.logo {
		filter: ${(props) => props.theme.colors.svgcolor};
	}

	.nav-container {
		background-color: ${(props) => props.theme.colors.transparent};
		height: 72px;
		z-index: 999;
		width: 100%;
		left: 0;
		top: 0;
		transition: all 600ms ease;
		/* background-image: url(${img}); */
		background-size: 400%;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		position: fixed;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;

		nav {
			width: calc(100% - 120px);
			margin: auto;
		}
	}

	nav .desktop-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		height: 100%;

		.nav-right,
		.nav-left {
			display: flex;
			align-items: center;
		}

		li {
			&:not(:first-child) {
				margin-left: 32px;
			}

			a {
				color: ${(props) => props.theme.colors.text};
				text-decoration: none;
				font-size: 16px;
				display: block;
			}

			&:hover {
				transform: translateZ(0);
				backface-visibility: hidden;
				transform: scale(1);
				transition: all 600ms linear;
				-webkit-font-smoothing: subpixel-antialiased;
			}
		}
	}

	.link-close {
		display: none;
	}

	/* Hidden Items */

	.mobile-nav {
		display: none;
	}

	/* Media Queries */

	@media ${device.laptop} {
		.nav-container {
			nav {
				width: calc(100% - 80px);
        margin: auto;
			}
		}
	}

	@media ${device.tablet} {
		.nav-container {
			nav {
				width: calc(100% - 64px) !important;
			}
		}

		.nav-container {
			.desktop-nav {
				flex-direction: column;
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 0vh;
				background: ${(props) => props.theme.colors.background};
				justify-content: start;
				overflow: hidden;
				z-index: -1;
				transition: all 1000ms ease;
			}
		}

		.nav-container.active .desktop-nav {
			height: 100vh;
			transition: all 1000ms ease;
		}

		.nav-container .desktop-nav li {
			width: 100%;
			padding: 0 32px;
			&:not(:first-child) {
				margin-left: 20px;
				transition: all 1000ms ease;
			}
			transition: all 1000ms ease;
		}

		.nav-left {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			text-align: center;
			transition: all 1000ms ease;
		}

		.nav-right {
			flex-direction: column-reverse;
			align-items: center;
			width: 100%;
			text-align: center;
			transition: all 1000ms ease;
		}

		.nav-container .desktop-nav .nav-left li:first-child {
			margin-top: 100px;
			transition: all 1000ms ease;
		}

		.nav-container .desktop-nav .link-logo {
			display: none;
		}

		.nav-right {
			display: flex;
			align-items: center;

			li {
				height: 55px;
				line-height: 55px;
				border-bottom: none !important;
				margin: 0px;
				padding: 0px;

				a {
					text-transform: uppercase;
					transition: all 1000ms ease;
				}
			}
		}

		.nav-container .desktop-nav {
			.nav-right li {
				width: 40%;
				margin: auto;
				margin-top: 20px;
				a {
					padding: 0px 0px;
					width: 112px !important;
				}
			}

			li a {
				padding: 16px 0;
				display: inline-block;
				width: 100%;
				font-size: 17px;
				transform: translateY(-80px);
				opacity: 0;
				transition: all 700ms ease;
			}

			li {
				border-bottom: 1px solid #616161;
				border-radius: 0px;
				margin: auto;
				width: calc(100% - 40px);
			}
		}

		.nav-container.active .desktop-nav li a {
			transform: translateY(0);
			opacity: 1;
		}

		/* Mobile Nav */

		nav {
			.mobile-nav {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;
				list-style: none;
			}

			.menu-icon-container {
				width: 32px;
				height: 60px;
				display: flex;
				align-items: center;
				cursor: pointer;
			}

			.menu-icon {
				position: relative;
				width: 100%;
			}

			.menu-icon .line-1,
			.menu-icon .line-2 {
				position: absolute;
				height: 3px;
				border-radius: 3px;
				width: 100%;
				background: ${(props) => props.theme.colors.text};
				transition-property: transform, top;
				transition-delay: 0ms, 160ms;
				transition-duration: 200ms;
			}

			.menu-icon .line-1 {
				top: -10px;
			}

			.menu-icon .line-2 {
				top: 10px;
				right: 0;
				width: 70%;
			}
		}

		.nav-container.active nav .menu-icon-container .menu-icon {
			.line-1 {
				top: 0;
				background: ${(props) => props.theme.colors.text};
				transform: rotateZ(45deg);
				transition-property: top, transform;
				transition-delay: 0ms, 160ms;
				transition-duration: 200ms;
			}

			.line-2 {
				top: 0;
				background: ${(props) => props.theme.colors.text};
				width: 100%;
				transform: rotateZ(-45deg);
				transition-property: top, transform;
				transition-delay: 0ms, 160ms;
				transition-duration: 200ms;
			}
		}

		/* Nav Animation */
		.nav-container nav {
			transition: all 400ms ease;
		}
	}

	@media ${device.mobileL} {
		.nav-container {
			nav {
				width: calc(100% - 40px) !important;
			}
		}
	}
`;
