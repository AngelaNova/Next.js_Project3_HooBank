import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT, ID_FOR_STUDENT } from '../actions/studentActions';

const initialState = {
  allStudents: [{"name": "studentName", "lastName": "StudentLastName", "username":"Student01","password":"unknown", "subject":"organic"},{"name": "studentName", "lastName": "StudentLastName", "username":"Student02","password":"unknown", "subject":"all"}]
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        allStudents: [...state.allStudents, action.payload],
      };
    case EDIT_STUDENT:
      console.log(action)
      return {
        ...state,
        allStudents: state.allStudents.map((student) => {
          return(student.id === action.payload.id ? action.payload.updatedStudent : student)
        }),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        allStudents: state.allStudents.filter((student) => student.id !== action.payload),
      };
    case ID_FOR_STUDENT:
      return {
        //to change TODO
        ...state,
        filteredStudents: state.allStudents.filter((student) => student.subject === action.payload),
      };
    default:
      return state;
  }
};

export default studentReducer;

