import { ADD_TODO, TOGGLE_TODO , DELETE_TODO } from "../actionsTypes";

const initialState = {
  tasks: [{
    id:1,
    name:'task1',
    completed:false
  }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        ...state.tasks.push(content)
      };
    }
    case DELETE_TODO: {
        const { id } = action.payload;
        debugger;
        return {
            ...state,
            tasks:state.tasks.filter(task => task.id !== id)
        };
      }
    case TOGGLE_TODO: {
      const { id, content } = action.payload;
      
      return {
        ...state,
        ...state.tasks.slice(id,1,content)
      };
    }
    default:
      return state;
  }
}
