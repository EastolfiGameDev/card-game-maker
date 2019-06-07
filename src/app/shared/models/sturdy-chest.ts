export interface SturdyChest {//2
	name: "Sturdy Chest",
	type: "CHEST",
	action: [{
		type: "OPEN",
		requirements: "NONE",
		action: "ROLL_A_DIE",
		result: [{
			dieNumber: 1,
			action: {
				type: "DECREASE",
				resource: "MANA",
				amount: 2
			}
		}, {
			dieNumber: 2,
			action: {
				type: "DECREASE",
				resource: "MANA",
				amount: 2
			}
		}, {
			dieNumber: 3,
			action: {
				type: "NONE"
			}
		}, {
			dieNumber: 4,
			action: {
				type: "INCREASE",
				resource: "MANA",
				amount: 1
			}
		}, {
			dieNumber: 5,
			action: {
				type: "INCREASE",
				resource: "MANA",
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
			amount: 3
		},
		action: "NONE",
		result: [{
			action: {
				type: "INCREASE",
				resource: "MANA",
				amount: 2
			}
		}]
	}]
}