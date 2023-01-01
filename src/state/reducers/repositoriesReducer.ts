interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data : string[];
}
// this part RepositoriesState => {} is the initial state of the reducer
// tell what the type of the state is and what the initial state is

// we want to avoid tha any type in the reducer

// Define the action type!


interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;


enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

const reducer = (
     state: RepositoriesState ,
     action: Action
     ): RepositoriesState =>{
   
    switch(action.type) {
        // when the user press the button to search for repositories
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };

        // when the user wating for the response from the server
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };

        // when the user get an error from the server
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
            
        default:
            return state;

    }
}

export default reducer;