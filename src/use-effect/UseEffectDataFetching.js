import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectDataFetching() {
    const [posts, setPosts] = useState([])
    // const [id, setId] = useState(initialState)

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(payload => {
                setPosts(payload.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {/* <input type="text" value={id} onChange={e => setId(e.target.value)}>{}</input> */}
            <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default UseEffectDataFetching
