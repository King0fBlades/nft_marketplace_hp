export const makeId = (length) => {
	let result = '';

	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLenght = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLenght));
	}

	return result;
};
