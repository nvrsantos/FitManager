export function SignIn(name, email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'ijdsajdi@',
                user: {
                    name: name || 'Mario',
                    email: email || 'playcar46@gmail.com',
                    avatar: 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-1/s200x200/93422719_1873660032770772_5733942040656347136_o.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=fn_A9peGiyMAX8yTdyg&_nc_ht=scontent-gru1-1.xx&tp=7&oh=bdd7e7261b3f2da6cd2512959b0d5f64&oe=5F69B210',
                }
            })
        }, 1000)
    })
}