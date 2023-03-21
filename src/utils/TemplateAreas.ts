import { IGrid } from '~components/Grid/Grid';

export const generateTemplateAreas = (props: IGrid) => {
	const { rows: rowMax, columns: colMax, children } = props;

	const emptyAreas: string[][] = Array(rowMax).fill(Array(colMax).fill('.'));

	return children
		.reduce((templateAreas, { props: { area = '-', col = 1, row = 1 } }) => {
			let iRow = 0;
			let iCol = 0;
			const rowLen = row === 'full' || row > rowMax ? rowMax : row;
			const colLen = col === 'full' || col > colMax ? colMax : col;

			return templateAreas.map((rowArea, rowId) =>
				!(rowArea.every(colArea => colArea !== '.') && ++iRow) && rowId - iRow < rowLen
					? rowArea.map((colArea, colId) =>
							!(colArea !== '.' && ++iCol) && colId - iCol < colLen ? area : colArea
					  )
					: rowArea
			);
		}, emptyAreas)
		.reduce(
			(acc, item) =>
				`${acc.length ? `${acc} ` : acc}'${item.toString().replaceAll(',', ' ')}'`,
			``
		);
};
