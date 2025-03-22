// import { useReducer, useState } from 'react'
import { createStore, bindActionCreators } from 'redux'
// import { inc, decr, rnd } from '../actions'
import * as actions from '../actions'
import reducer from '../reducer'

// let state = reducer(initialState, { type: 'INC' })

// const [state, dispatch] = useReducer(reducer,{type:"INC"})

const store = createStore(reducer)
const { getState, subscribe, dispatch } = store

const updateUI = () => {
	document.querySelector('#counter').textContent = getState().count
}

//subscribe obuna bb olamiz storega bizi statetimi xar  update bolganda yani setState bolganda logda korishimiz mumkin
subscribe(updateUI)
// console.log(store)

//  dispatch da statetimizni qiymatini ozgartiramiz
// store.dispatch({ type: 'INC' })
// store.dispatch({ type: 'INC' })

// const bindActionCreator =
// 	(creator, dispatch) =>
// 	(...args) => {
// 		dispatch(creator(...args))
// 	}

const { inc, decr, rnd } = bindActionCreators(actions, dispatch)

// const { incDispatch, decrDispatch, rndDispatch } = bindActionCreators(
// 	{
// 		incDispatch: inc,
// 		decrDispatch: decr,
// 		rndDispatch: rnd,
// 	},
// 	dispatch
// )
// const decrDispatch = bindActionCreators(decr, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

// const incDispatch = bindActionCreators(inc, dispatch)
// const decrDispatch = bindActionCreators(decr, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

// const incDispatch = bindActionCreator(inc, dispatch)
// const decrDispatch = bindActionCreator(decr, dispatch)
// const rndDispatch = bindActionCreator(rnd, dispatch)

// const incDispatch = () => dispatch(inc())
// const decrDispatch = () => dispatch(decr())
// const rndDispatch = value => dispatch(rnd(value))

document.querySelector('#inc').addEventListener('click', inc)

document.querySelector('#decr').addEventListener('click', decr)

document.querySelector('#rnd').addEventListener('click', () => {
	const randomValue = Math.floor(Math.random() * 100)
	rnd(randomValue)
})

// document.querySelector('#inc').addEventListener('click', incDispatch)

// document.querySelector('#decr').addEventListener('click', decrDispatch)

// document.querySelector('#rnd').addEventListener('click', () => {
// 	const randomValue = Math.floor(Math.random() * 100)
// 	rndDispatch(randomValue)
// })
