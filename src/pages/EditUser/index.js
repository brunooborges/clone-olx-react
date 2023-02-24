import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageTitle } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { PageArea } from './styled';

const EditUser = () => {
	const api = useApi();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [stateLoc, setStateLoc] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userInfo, setUserInfo] = useState({});

	const [disabled, setDisabled] = useState(false);
	const [setError] = useState('');

	const [stateList, setStateList] = useState([]);

	useEffect(() => {
		const getStates = async () => {
			const slist = await api.getStates();
			setStateList(slist);
		};
		getStates();
	}, [api]);

	useEffect(() => {
		const getUserInfo = async () => {
			const userInfo = await api.getUser();
			setUserInfo(userInfo);
		};
		getUserInfo();
	}, [api]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisabled(true);
		setError('');

		if (password !== confirmPassword) {
			setError('Senhas não batem');
			setDisabled(false);
			return;
		}

		const json = await api.updateUser(name, email, stateLoc, password);
		if (json.error) {
			setError(json.error);
		} else {
			window.location.href = '/my-account';
		}

		setDisabled(false);
	};

	const handleBackButton = () => {
		navigate('/my-account');
	};

	return (
		<>
			<PageTitle>Minha Conta</PageTitle>
			<PageArea>
				<form onSubmit={handleSubmit}>
					<button
						className="defaultButton"
						onClick={handleBackButton}
						disabled={disabled}>
						Voltar
					</button>
					<label className="area">
						<div className="area--title">Nome Completo</div>
						<div className="area--input">
							<input
								type="text"
								disabled={disabled}
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder={userInfo.name}
							/>
						</div>
					</label>
					<label className="area">
						<div className="area--title">Estado atual: {userInfo.state}</div>
						<div className="area--input">
							<select
								value={stateLoc}
								onChange={(e) => setStateLoc(e.target.value)}>
								<option></option>
								{stateList.map((i, k) => (
									<option
										key={k}
										value={i.name}>
										{i.name}
									</option>
								))}
							</select>
						</div>
					</label>
					<label className="area">
						<div className="area--title">E-mail</div>
						<div className="area--input">
							<input
								type="email"
								disabled={disabled}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={userInfo.email}
							/>
						</div>
					</label>
					<label className="area">
						<div className="area--title">Senha</div>
						<div className="area--input">
							<input
								type="password"
								disabled={disabled}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</label>
					<label className="area">
						<div className="area--title">Confirmar Senha</div>
						<div className="area--input">
							{password && (
								<input
									type="password"
									disabled={disabled}
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								/>
							)}
							{!password && (
								<input
									type="password"
									disabled={disabled}
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							)}
						</div>
					</label>
					<label className="area">
						<div className="area--title"></div>
						<div className="area--input">
							<button
								className="defaultButton"
								disabled={disabled}>
								Atualizar Usuário
							</button>
						</div>
					</label>
				</form>
			</PageArea>
		</>
	);
};

export default EditUser;
