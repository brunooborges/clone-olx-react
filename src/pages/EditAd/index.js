import React, { useEffect, useRef, useState } from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';
import useApi from '../../helpers/OlxAPI';
import { PageArea } from './styled';

import { useNavigate, useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';
import { Fake } from '../AdPage/styled';

const EditAd = () => {
	const api = useApi();
	const navigate = useNavigate();
	const { id } = useParams();

	const ImgField = useRef();
	const ImagesField = useRef();

	const [adInfo, setAdInfo] = useState({});
	const [categories, setCategories] = useState([]);

	const [status, setStatus] = useState('');
	const [title, setTitle] = useState('');
	const [cat, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [priceneg, setPriceNegotiable] = useState(false);
	const [desc, setDesc] = useState('');
	const [loading, setLoading] = useState(true);

	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const getCategories = async () => {
			const cats = await api.getCategories();
			setCategories(cats);
		};
		getCategories();
	}, [api]);

	useEffect(() => {
		const getAdInfo = async (id) => {
			const json = await api.getAd(id, true);
			setAdInfo(json);
			setLoading(false);
		};
		getAdInfo(id);
	}, [id, navigate, api]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisabled(false);
		setError('');

		if (status === '') {
			setError('É obrigatório selecionar o status do anúncio');
			setDisabled(false);
			return;
		}

		let errors = [];

		if (errors.length === 0) {
			const fData = new FormData();
			fData.append('status', status);
			fData.append('title', title);
			fData.append('price', price);
			fData.append('priceneg', priceneg);
			fData.append('desc', desc);
			fData.append('cat', cat);
			fData.append('img', ImgField.current.files[0]);

			if (ImagesField.current.files.length > 0) {
				for (let i = 0; i < ImagesField.current.files.length; i++) {
					fData.append('images', ImagesField.current.files[i]);
				}
			}

			const json = await api.updateAd(id, fData);

			if (!json.error) {
				window.location.reload(true);
				return;
			} else {
				setError(json.error);
			}
		} else {
			setError(errors.join('\n'));
		}
		setDisabled(false);
	};

	const priceMask = createNumberMask({
		prefix: 'R$ ',
		includeThousandsSeparator: true,
		thousandsSeparatorSymbol: '.',
		allowDecimal: true,
		decimalSymbol: ',',
	});

	const handleBackButton = () => {
		navigate('/my-account');
	};

	return (
		<PageContainer>
			<PageArea>
				{console.log(adInfo)}
				<PageTitle>Editar anúncio</PageTitle>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<div className="editArea--ad">
					<div className="leftSide">
						<button
							className="defaultButton"
							onClick={handleBackButton}
							disabled={disabled}>
							Voltar
						</button>
						<form onSubmit={handleSubmit}>
							<label className="area">
								<div className="area--title">Status</div>
								<div className="area--input">
									<select
										disabled={disabled}
										onChange={(e) => setStatus(e.target.value)}
										defaultValue={status}>
										<option></option>
										<option value={true}>Ativo</option>
										<option value={false}>Inativo</option>
									</select>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Título</div>
								<div className="area--input">
									<input
										type="text"
										disabled={disabled}
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Categoria</div>
								<div className="area--input">
									<select
										disabled={disabled}
										onChange={(e) => setCategory(e.target.value)}>
										<option></option>
										{categories &&
											categories.map((i) => (
												<option
													key={i.slug}
													value={i.slug}>
													{i.name}
												</option>
											))}
									</select>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Preço</div>
								<div className="area--input">
									<MaskedInput
										mask={priceMask}
										placeholder="R$"
										disabled={disabled || priceneg}
										value={price}
										onChange={(e) => setPrice(e.target.value.trim().replace(/[.,+()$~%'":*?<>{}|R$]/g, ''))}
									/>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Preço Negociável</div>
								<div className="area--input">
									<input
										type="checkbox"
										disabled={disabled}
										checked={priceneg}
										onChange={() => setPriceNegotiable(!priceneg)}
									/>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Descrição</div>
								<div className="area--input">
									<textarea
										disabled={disabled}
										value={desc}
										onChange={(e) => setDesc(e.target.value)}></textarea>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Alterar Imagens</div>
								<div className="area--input">
									<input
										type="file"
										disabled={disabled}
										ref={ImagesField}
										multiple
									/>
								</div>
							</label>
							<label className="area">
								<div className="area--title">Adicionar Imagem</div>
								<div className="area--input">
									<input
										type="file"
										disabled={disabled}
										ref={ImgField}
										multiple
									/>
								</div>
							</label>
							<label className="area">
								<div className="area--title"></div>
								<div className="area--input">
									<button
										disabled={disabled}
										className="defaultButton">
										Salvar Anúncio
									</button>
								</div>
							</label>
						</form>
					</div>
					<div className="rightSide">
						{!loading && (
							<div className={adInfo.status === true ? 'ad' : 'ad inactive'}>
								<div className="adImage">
									{loading && <Fake height={150} />}
									{adInfo.images && (
										<Slide>
											{adInfo.images.map((i, k) => (
												<div
													key={k}
													className="each-slide">
													<img
														src={i}
														alt=""
													/>
												</div>
											))}
										</Slide>
									)}
								</div>
								<div className="adName">
									{loading && <Fake height={20} />}
									{adInfo.title && <h2>{adInfo.title}</h2>}
								</div>
								<div className="adDescription">
									{loading && <Fake height={100} />}
									{adInfo.description}
								</div>
								<div className="box box--padding">
									{loading && <Fake height={20} />}
									{adInfo.priceNegotiable && 'Preço Negociável'}
									{!adInfo.priceNegotiable && adInfo.price && (
										<div className="adPrice">
											Preço: <span>R$ {adInfo.price}</span>
										</div>
									)}
								</div>
								<div className="box box--padding">
									<small>Categoria: {adInfo.category && adInfo.category.name}</small>
								</div>
							</div>
						)}
					</div>
				</div>
			</PageArea>
		</PageContainer>
	);
};

export default EditAd;
