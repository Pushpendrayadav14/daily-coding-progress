import {box} from './apprt1.js';
import { circle} from "./circlert1.js";

export let parent=()=>{
    return React.createElement('div',{id:'parent'},[box(),circle()]);
}
