import {useSelector} from "react-redux";
import {useActions} from "./use-actions.js";
import {increment, decrement, set} from "./actions.js";


export const useCounter = () => {
    const count = useSelector((state)=>state.count);
    const actions = useActions({increment, decrement, set});

    return {count, ...actions};
}