export async function getAllUsers(url) {
	const response = await fetch(url);
	return await response.json;
}

export async function createUser(data) {
	console.log(data);
	const response = await fetch('https://6538cc17a543859d1bb1ef16.mockapi.io/api/posts/Users', {
		method: 'Post',
		headers: { 'Content-Type': 'application.json' },
		body: JSON.stringify(data)
	})
	return await response.json();
}


export async function newUser(data) {
	let error= '';
	try {
		const user = await createUser({ id: 'uuujc5uu6',...data });
		console.log(user);
	}
	catch (err) {
		error = 'Ошибка'
	}
	return  error;
}