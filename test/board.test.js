const Board = require  ('../models/board')
const sequelize = require ('../db/db')

describe ('Board', () => {
    beforeAll (async () => {
        await sequelize.sync()
    })
    test ('board has many cheeses',async ()=> {
        const board= await Board.create({type: 'Charcuterie', description: 'Best cheese board for an event',rating:9})
        const board2 = await Board.create({type: 'Charcuterie', description: 'Best cheese board for an event',rating:9})
        expect (board.type).toBe('Che')
        expect(board.id).toBeTruthy()

})

})