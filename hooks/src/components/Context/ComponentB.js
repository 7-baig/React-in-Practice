import React, { useContext } from 'react'
import{ Context } from './Store'

function ComponentB() {

    const [state, dispatch] = useContext(Context)
    const posts = state.posts
    console.log(state.posts)
    return (
        <div>
            {
                posts.map(post => <l1 key={post.id} >{post.title}</l1>)
            }
        </div>
    )
}

export default ComponentB
