import { TEST_SAMPLE } from '../actions/sampleActions'

export const sampleReducer = (state = {data: 'This is from redux store'}, action) => {
    switch (action.type) {
        case TEST_SAMPLE:
            return state
        default:
            return state
    }
}
