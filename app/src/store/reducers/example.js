
const defaultState = {
    projectName: "example"
};

const ExampleReducer = (state = defaultState, action) => {
        switch (action.type) {
            case 'CHANGE_NAME':
                return {
                    ...state,
                    projectName: action.name
                };
            default:
                return state
        }
};

export default ExampleReducer

export const getProjectName= state => state.projectName;
