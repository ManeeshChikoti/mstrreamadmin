export const getGenreListStart=()=>({
    type:"GET_GENRELIST_START"
});

export const getGenreListSuccess=(lists)=>({
    type:"GET_GENRELIST_SUCCESS",
    payload:lists
});

export const getGenreListFailure=()=>({
    type:"GET_GENRELIST_FAILURE"
});


//for crating a movie
export const createGenreListStart = () => ({
  type: "CREATE_GENRELIST_START",
});

export const createGenreListSuccess = (list) => ({
  type: "CREATE_GENRELIST_SUCCESS",
  payload: list,
});

export const createGenreListFailure = () => ({
  type: "CREATE_GENRELIST_FAILURE",
});
//working on updating
// //for updating a movie
// export const updateMovieStart = () => ({
//   type: "UPDATE_MOVIE_START",
// });

// export const updateMovieSuccess = (movie) => ({
//   type: "UPDATE_MOVIE_SUCCESS",
//   payload: movie,
// });

// export const updateMovieFailure = () => ({
//   type: "UPDATE_MOVIE_FAILURE",
// });

//for deleting the list actions
export const deleteGenreListStart = () => ({
    type: "DELETE_GENRELIST_START",
  });
  
  export const deleteGenreListSuccess = (id) => ({
    type: "DELETE_GENRELIST_SUCCESS",
    payload: id,
  });
  
  export const deleteGenreListFailure = () => ({
    type: "DELETE_GENRELIST_FAILURE",
  });