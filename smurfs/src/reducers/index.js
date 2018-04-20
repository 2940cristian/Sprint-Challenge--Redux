import {FETCHING, POSTING, ERROR} from "../actions"

//  Your initial/default state for this project could look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurfs: false,
   error: null
 }

 const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
     case FETCHING: {
       return {...state, fetchingSmurfs: true}
     }
   }
 }

 export default smurfReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
