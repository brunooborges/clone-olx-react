import styled from 'styled-components';

export const Fake = styled.div`
	background-color: #ddd;
	height: ${(props) => props.height || 20}px;
`;

export const PageArea = styled.div`
	.editArea--ad {
		display: flex;
		background-color: #fff;
		border-radius: 3px;
		padding: 10px;
		box-shadow: 0px 0px 3px #999;
		.leftSide {
			form {
				.area {
					display: flex;
					padding: 10px;
					width: 100%;

					.area--title {
						text-align: right;
						padding-right: 20px;
						font-weight: bold;
						font-size: 14px;
						width: 150px;
					}
					.area--input {
						flex: 1;

						input,
						select,
						textarea {
							width: 100%;
							font-size: 14px;
							padding: 5px;
							border: 1px solid #ddd;
							border-radius: 3px;
							outline: 0;
							transition: all ease 0.4s;

							&:focus {
								border: 1px solid #333;
								color: #333;
							}
						}

						textarea {
							height: 150px;
							resize: none;
						}

						input[type='checkbox'] {
							width: 13px;
						}
					}
				}
			}
		}
		.defaultButton {
			background-color: #0089ff;
			border: 0;
			outline: 0;
			padding: 5px 10px;
			border-radius: 4px;
			color: #fff;
			font-size: 15px;
			cursor: pointer;

			&:hover {
				background-color: #006fce;
			}
		}

		.rightSide {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			margin-left: 20px;

			.ad {
				display: flex;
				flex-direction: column;
				border: 1px solid #fff;
				margin: 10px;
				text-decoration: none;
				padding: 10px;
				border-radius: 5px;
				color: #000;
				background-color: #fff;
				transition: all ease 0.2s;

				.box {
					background-color: #fff;
					border-radius: 5px;
					box-shadow: 0px 0px 4px #999;
					margin: 10px 0;
				}

				.box--padding {
					padding: 10px;
				}

				.box {
					display: flex;
				}

				.adImage {
					align-self: center;
					width: 400px;
					height: 400px;

					.each-slide img {
						display: flex;
						align-items: center;
						justify-content: center;
						background-size: cover;
						height: 400px;
					}
				}

				margin-right: 20px;

				.adName {
					margin-bottom: 20px;

					h2 {
						margin: 0;
						margin-top: 10px;
					}
					small {
						color: #999;
					}
				}
				.adDescription {
					margin-bottom: 10px;
					small {
						color: #999;
					}
				}
				.adPrice span {
					font-size: 17px;
					font-weight: bold;
				}
			}
			.ad.inactive {
				background-color: #eee;
				border: 1px solid #ccc;
			}
		}
	}

	@media (max-width: 600px) {
		.editArea--ad {
			flex-direction: column;

			.leftSide {
				form {
					.area {
						flex-direction: column;

						.area--title {
							width: 100%;
							text-align: left;
							margin-bottom: 10px;
						}
						.area--input {
							width: 100%;

							button {
								width: 100%;
								padding: 10px;
							}
						}
					}
				}
			}

			.rightSide {
				margin: 20px 0;
				.ad {
					margin: 0;
				}
			}
		}
	}
`;
