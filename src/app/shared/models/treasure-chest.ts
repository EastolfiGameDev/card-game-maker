export interface TreasureChest {//2
	name: "Treasure Chest",
	type: "CHEST",
	action: [{
		type: "OPEN",
		requirements: "NONE",
		action: "ROLL_A_DIE",
		result: [{
			dieNumber: 1,
			action: {
				type: "DECREASE",
				resource: "LEVEL",
				amount: 1
			}
		}, {
			dieNumber: 2,
			action: {
				type: "DECREASE",
				resource: "LEVEL",
				amount: 1
			}
		}, {
			dieNumber: 3,
			action: {
				type: "DECREASE",
				resource: "LEVEL",
				amount: 1
			}
		}, {
			dieNumber: 4,
			action: {
				type: "DISCARD",
				resource: "MASK",
				amount: 1
			}
		}, {
			dieNumber: 5,
			action: {
				type: "DISCARD",
				resource: "MASK",
				amount: 1
			}
		}, {
			dieNumber: 6,
			action: {
				type: "INCREASE",
				resource: "LEVEL",
				amount: 1
			}
		}]
	}, {
		type: "OPEN",
		requirements: {
			resource: "LEVEL",
			amount: 4
		},
		action: "NONE",
		result: [{
			action: [{
				type: "INCREASE",
				resource: "HEALTH",
				amount: 2
			}, {
				type: "INCREASE",
				resource: "MANA",
				amount: 2
			}]
		}]
	}]
}