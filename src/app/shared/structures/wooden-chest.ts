import { Structure } from "../models/base/structure";

const structure: Structure = {
    name: "Wooden Chest",
    type: "CHEST",
    interactions: [{
        type: "OPEN",
        requirements: [/*"NONE"*/],
        action: "ROLL_A_DIE",
        outcomes: [{
            /*dieNumber*/result: 1,
            action: [{
                type: "DECREASE",
                resource: "HEALTH",
                amount: 2
            }]
        }, {
            result: 2,
            action: [{
                type: "DECREASE",
                resource: "HEALTH",
                amount: 2
            }]
        }, {
            result: 3,
            action: [{
                type: "DECREASE",
                resource: "HEALTH",
                amount: 1
            }]
        }, {
            result: 4,
            action: [{
                type: "DECREASE",
                resource: "HEALTH",
                amount: 1
            }]
        }, {
            result: 5,
            action: [{
                type: "INCREASE",
                resource: "HEALTH",
                amount: 1
            }]
        }, {
            result: 6,
            action: [{
                type: "INCREASE",
                resource: "LEVEL",
                amount: 1
            }]
        }]
    }, {
        type: "OPEN",
        requirements: [{
            resource: "LEVEL",
            amount: 2
        }],
        action: "NONE",
        outcomes: [{
            action: [{
                type: "INCREASE",
                resource: "HEALTH",
                amount: 2
            }]
        }]
    }]
}

export default structure;