export function SignIn(name, email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'ijdsajdi@',
                user: {
                    name: name || 'Mario',
                    email: email || 'playcar46@gmail.com'
                }
            })
        }, 1000)
    })
}