export interface Structure {
    name: string
    type: string
    interactions: InteractionStructure[]
}

export interface InteractionStructure {
    type: string
    requirements: RequirementsStructure[]
    action: string
    outcomes: OutcomeStructure[]
}

export interface RequirementsStructure {
    resource: string
    amount: number
}

export interface OutcomeStructure {
    result?: number
    action: OutcomeActionStructure[]
}

export interface OutcomeActionStructure {
    type: string
    resource: string
    amount: number
}