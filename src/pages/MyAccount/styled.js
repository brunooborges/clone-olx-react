import styled from 'styled-components';

export const Fake = styled.div`
	background-color: #ddd;
	height: ${(props) => props.height || 20}px;
`;

export const UserArea = styled.div`
	.userArea {
		background-color: #fff;
		border-radius: 3px;
		padding: 10px;
		box-shadow: 0px 0px 3px #999;

		.area {
			display: flex;
			align-items: center;
			padding: 10px;
			max-width: 500px;
			font-size: 14px;

			.area--title {
				width: 200px;
				text-align: right;
				padding-right: 20px;
				font-weight: bold;
				font-size: 14px;
			}

			.area--userInfo {
				width: 100%;
				font-size: 14px;
				padding: 5px;
				background: #eee;
				border-radius: 3px;
				outline: 0;
			}
		}
		.defaultButton {
			display: inline-block;
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
		a {
			text-decoration: none;
		}
	}
`;

export const AdArea = styled.div`
	margin-top: 20px;

	.editArea--list {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		border-radius: 3px;
		padding: 10px;
		box-shadow: 0px 0px 3px #999;

		.area--title {
			width: 200px;
			text-align: right;
			padding-right: 20px;
			font-weight: bold;
			font-size: 14px;
		}

		.aditem {
			flex: 1;
			width: 100%;
			border: 1px solid #ccc;
			border-radius: 3px;
			margin: 5px;
		}
	}

	.defaultButton {
		display: inline-block;
		background-color: #0089ff;
		border: 0;
		outline: 0;
		padding: 5px 10px;
		margin-right: 5px;
		border-radius: 4px;
		color: #fff;
		font-size: 15px;
		cursor: pointer;

		&:hover {
			background-color: #006fce;
		}
	}
	a {
		text-decoration: none;
	}
`;

export const Item = styled.div`
	.ad {
		display: flex;
		justify-content: start;
		align-items: center;
		border: 1px solid #fff;
		margin: 5px;
		text-decoration: none;
		padding: 10px;
		border-radius: 5px;
		color: #000;
		background-color: #fff;
		transition: all ease 0.2s;

		&:hover {
			background-color: #eee;
			border: 1px solid #ccc;
		}

		.itemName {
			font-weight: bold;
			margin: 5px;
		}

		.itemPrice {
			font-weight: bold;
			margin: 5px;
		}
	}
`;
