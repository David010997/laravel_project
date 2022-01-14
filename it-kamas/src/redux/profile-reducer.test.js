import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('the message with id 4 is Dada', () => {
  
    
    expect(state.posts[3].id===4)
});
