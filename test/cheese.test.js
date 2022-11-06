const Board = require  ('../models/board')
const sequelize = require ('../db/db')
const Cheese = require('../models/cheese')

describe ('Cheese', () => {
    beforeAll (async () => {
        await sequelize.sync()
    })
    test ('a cheese can be on many boards',async ()=> {
        const cheese1 = await Cheese.create ({title:"Feta"})
        const cheese2 = await Cheese.create ({title:"Goat Cheese"})
        const cheese3 = await Cheese.create ({title:"mozzarella"})
 const board =  board.addCheese ([cheese1,cheese2,cheese3])
        
         expect (board.id).toBe('Feta',"Goat Cheese","mozzarella")
        expect(cheese.id).toBeTruthy()

})

})