import './index.scss';
import { increment, decrement, reset, store } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = ()=> {
   store.dispatch(increment());
}
const onDecrement = () =>{
    store.dispatch(decrement())
};
const onReset = () =>{
    store.dispatch(reset());
}
incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(()=>{
   
    const state = store.getState();
    const currentValue = state.history.reduce((acc, value) => acc + value, 0);
    const historyStryng =  state.history.map(num => (num > 0 ? `+${num}` : `${num}`)).join('');
    resultElem.textContent = state.history.length === 0
    ? ''
    :`${historyStryng} = ${currentValue}`;
})