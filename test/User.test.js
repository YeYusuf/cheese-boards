const User = require ('../models/user')
const sequelize = require ('../db/db')

describe ('User', () => {
    beforeAll (async () => {
        await sequelize.sync()
    })
    test ('a user has a name and email',async ()=> {
        const user = await User.create({email: 'test@test.com', name: 'Bob'})
        expect (user.name).toBe('Bob')
        expect(user.id).toBeTruthy()

})

})
