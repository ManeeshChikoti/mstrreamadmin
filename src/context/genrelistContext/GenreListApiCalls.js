import { axiosInstance } from "../../axios";
import { createGenreListFailure, createGenreListStart, createGenreListSuccess, deleteGenreListFailure, deleteGenreListStart, deleteGenreListSuccess, getGenreListFailure, getGenreListStart, getGenreListSuccess } from "./GenreListActions";

export const getGenreList = async (dispatch) => {
  dispatch(getGenreListStart);
  try {
    const res = await axiosInstance.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).token
      }
    })
    dispatch(getGenreListSuccess(res.data));

  } catch (error) {
    dispatch(getGenreListFailure());
  }

};
//creating a list(list by Genre)

export const createGenreList = async (list, dispatch) => {
  dispatch(createGenreListStart());
  try {
    const res = await axiosInstance.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(createGenreListSuccess(res.data));
  } catch (err) {
    dispatch(createGenreListFailure);
  }
};

// deleting a list(list by Genre)

export const deleteGenreList = async (id, dispatch) => {
  dispatch(deleteGenreListStart);
  try {
    await axiosInstance.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(deleteGenreListSuccess(id));
  } catch (err) {
    dispatch(deleteGenreListFailure());
  }
};
