// TODO: Esto cambiará cuando recibamos los usuarios de la base de datos
const users = [
    { email: 'eden@test.com', password: '123', name: 'Edén', role: 'admin'},
    { email: 'gonzalo@test.com', password: '456', name: 'Gonzalo', role: 'user' },
    { email: 'javi@test.com', password: '789', name: 'Javi', role: 'admin' },
];

function signIn({ email, password }) {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (user === undefined) throw new Error();

    return user;
}

export default signIn;