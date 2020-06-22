import { combineReducers} from "redux"
import {FETCHING,
  SET_SEARCH_RESULTS,SEARCH,
  UPDATE_POST_FILTER,UPDATE_CLASS_ID} from '../ActionTypes/ActionTypes'

const SEARCH_URL = "/api/search";

const tags_hardcoded={
    "Instructor has answered": false,
    "Student has answered": false,
    "hw1": false,
    "hw2": false,
    "hw3": false,
    "hw4": false
  };

const initialState = {
  PiazzaSearchResults : [],
    filterState:{
        searchText: "",
        tags:tags_hardcoded
    },

    pageState:{
        loading:false
    }
}

const pageState =  (state=initialState.pageState,action)=>{
    switch(action.type){
        case FETCHING:
            let newState = Object.assign({},state,{loading:true})
            return newState

        default:
            return state;
    }
}

const filterState  = (state=initialState.filterState,action)=>{
    switch(action.type){
        case UPDATE_CLASS_ID:
          return {
            ...state,
            classid: action.id
          }
        case UPDATE_POST_FILTER:
        /* the entire filter is updated
        and calls this when something is modified
        in ResponsiveSearchBox*/
          return action.filter
        default:
          return state;
    }
}



const searchState = (state=initialState.PiazzaSearchResults,action)=>{
    switch(action.type){
        case SET_SEARCH_RESULTS:
            if(action.status===204){
                let newState = Object.assign({},state,{
                    pageState:{loading:false,error:true,message:"No Search Results"},
                })}
            else if(action.status ===200){
                let newState = Object.assign({},state,{
                    pageState:{loading:false},
                  PiazzafiltersSearchResults: action.results
                })
                return newState
            }
            else if(action.status===303){}
        default:
            return state
    }
}




export default combineReducers({
    searchState,
    pageState,
    filterState,
});

/* i moved searchstate.js to index, because you were referencing the same variables in
two different files, just one file, you could create another file
and put these selectors in them, but do not reference them here as well if you do {
*/
export const isSearchPageLoading = (state)=>state.pageState.loading
export const searchResults = (state) => state.pageState.searchResults
export const SearchPageFilters = (state) => state.filterState
