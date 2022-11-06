const { Cheese, Board, User } = require('../models')

const db = require('./db')

async function seed() {

    await db.sync({
        force: true
    })

    await Cheese.bulkCreate([
        {
            title: "Feta ",
            description: "Greek brined white cheese made from sheep's milk or from a mixture of sheep and goat's milk"

        },
        {
            title: " Halloumi",
            description: "traditional Cypriot cheese made from a mixture of goat's and sheep's milk, and sometimes also cow's milk"

        },
        {
            title: "mozzarella ",
            description: "southern Italian cheese traditionally made from Italian buffalo's milk by the pasta filata method"

        },
        {
            title: " Goat Cheese",
            description: " cheese made from goat's milk"

        },
    ])

    await Board.bulkCreate([
        {
            type: "Charcuterie",
            description: "Best cheese board for an event",
            rating: 9

        },
        {
            type: "Bamboo",
            description: "low income cheese board",
            rating: 8

        },

        {
            type: "leaf",
            description: "back to origins board",
            rating: 6

        },
        {
            type: "metal",
            description: "for love and engineering",
            rating: 10

        }


    ])

    await User.bulkCreate([

        {
            name: "Bobby Brown",
            email: "bobby@brown.com"

        },

        {
            name: "Jane lester",
            email: "jane@lester.com"

        },
        {
            name: "Mani Green",
            email: "mani@green.com"

        },
        {
            name: "Draco Valerian",
            email: "draco@valerian.com"

        }

    ])




}

seed()
