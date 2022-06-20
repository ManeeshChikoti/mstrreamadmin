const GenreListReducer=(state,action)=>{
    switch(action.type){
        case "GET_GENRELIST_START":
            return {
                lists:[],
                isFetching:true,
                error:false
            };
            case "GET_GENRELIST_SUCCESS":
            return {
                lists:action.payload,
                isFetching:false,
                error:false
            };
            case "GET_GENRELIST_FAILURE":
            return {
                lists:[],
                isFetching:false,
                error:true
            };
            case"CREATE_GENRELIST_START":
              return {
                ...state,
                isFetching: true,
                error: false,
              };
            case "CREATE_GENRELIST_SUCCESS":
              return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
              };
            case  "CREATE_GENRELIST_FAILURE":
              return {
                ...state,
                isFetching: false,
                error: true,
              };
            //   case "UPDATE_MOVIE_START":
            //     return {
            //       ...state,
            //       isFetching: true,
            //       error: false,
            //     };
            //   case "UPDATE_MOVIE_SUCCESS":
            //     return {
            //       movies: state.movies.map(
            //         (movie) => movie._id === action.payload._id && action.payload
            //       ),
            //       isFetching: false,
            //       error: false,
            //     };
            //   case "UPDATE_MOVIE_FAILURE":
            //     return {
            //       ...state,
            //       isFetching: false,
            //       error: true,
            //     };
            case "DELETE_GENRELIST_START":
                return {
                  ...state,
                  isFetching: true,
                  error: false,
                };
              case "DELETE_GENRELIST_SUCCESS":
                return {
                  lists: state.lists.filter((list) => list._id !== action.payload),
                  isFetching: false,
                  error: false,
                };
              case"DELETE_GENRELIST_FAILURE":
                return {
                  ...state,
                  isFetching: false,
                  error: true,
                };
            default:
            return{...state}

    }
}
export  default GenreListReducer;