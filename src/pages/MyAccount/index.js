import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer, PageTitle } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { Fake } from '../AdPage/styled';
import { AdArea, Item, UserArea } from './styled';

const MyAccount = () => {
	const api = useApi();

	const [userInfo, setUserInfo] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getUserInfo = async () => {
			const userInfo = await api.getUser();
			setUserInfo(userInfo);
			setLoading(false);
		};
		getUserInfo();
	}, [api]);

	return (
		<PageContainer>
			<>
				{console.log(userInfo)}
				<PageTitle>Informações do Usuário</PageTitle>
				<UserArea>
					<div className="userArea">
						<Link
							to="/my-account/edit-user"
							className="defaultButton">
							Editar Usuário
						</Link>
						<div className="area">
							<div className="area--title">Nome Completo: </div>
							<div className="area--userInfo">{userInfo.name}</div>
						</div>

						<div className="area">
							<div className="area--title">Estado atual: </div>
							<div className="area--userInfo">{userInfo.state}</div>
						</div>

						<div className="area">
							<div className="area--title">E-mail: </div>
							<div className="area--userInfo">{userInfo.email}</div>
						</div>
					</div>
				</UserArea>

				<AdArea>
					<PageTitle>Meus anúncios</PageTitle>
					<div className="editArea--list">
						{loading && <Fake height={300} />}

						{userInfo.ads &&
							userInfo.ads.map((i, k) => (
								<Item
									className="aditem"
									key={k}>
									<div className="ad">
										<Link
											to={`/my-account/edit-ad/${i.id}`}
											className="defaultButton">
											Editar
										</Link>
										<div className="itemName">{i.title}</div>
										<div className="itemPrice">
											{i.priceNegotiable && 'Preço Negociável'}
											{!i.priceNegotiable && `| R$ ${i.price} |`}
										</div>
										<div className="itemName">{i.status === true ? 'Ativo' : 'Inativo'}</div>
									</div>
								</Item>
							))}
					</div>
				</AdArea>
			</>
		</PageContainer>
	);
};

export default MyAccount;
