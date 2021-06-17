import { getTodos,} from './todoAction'
export function fetchTodos() {
    return async dispatch => {
        const response = await fetch('http://localhost:5000/api/coffee');
        const data = await response.json();
        dispatch(getTodos(data));
        console.log(data,'från todoAPi')

        return data;
    }
}
