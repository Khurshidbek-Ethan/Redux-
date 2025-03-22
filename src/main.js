// import { useReducer, useState } from 'react'
import { createStore } from 'redux'
const initialState = { count: 0, firstName: 'Ethan', lastName: 'Arapov' }

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				count: state.count + 1,
			}
		case 'DECR':
			return {
				...state,
				count: state.count - 1,
			}
		case 'RND':
			return {
				...state,
				count: action.payload,
			}
	}
}

// let state = reducer(initialState, { type: 'INC' })

// const [state, dispatch] = useReducer(reducer,{type:"INC"})

const store = createStore(reducer)

const updateUI = () => {
	document.querySelector('#counter').textContent = store.getState().count
}

//subscribe obuna bb olamiz storega bizi statetimi xar  update bolganda yani setState bolganda logda korishimiz mumkin
store.subscribe(updateUI)
// console.log(store)

//  dispatch da statetimizni qiymatini ozgartiramiz
// store.dispatch({ type: 'INC' })
// store.dispatch({ type: 'INC' })

const inc = () => ({ type: 'INC' }),
	decr = () => ({ type: 'DECR' }),
	rnd = value => ({ type: 'RND', payload: value })

document.querySelector('#inc').addEventListener('click', () => {
	store.dispatch(inc())
})

document.querySelector('#decr').addEventListener('click', () => {
	store.dispatch(decr())
})

document.querySelector('#rnd').addEventListener('click', () => {
	const randomValue = Math.floor(Math.random() * 100)
	store.dispatch(rnd(randomValue))
})
