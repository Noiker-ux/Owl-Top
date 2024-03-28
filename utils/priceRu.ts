export default function PriceRu(countVacancy: number) {
	return new Intl.NumberFormat('ru', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
	}).format(countVacancy);
}
