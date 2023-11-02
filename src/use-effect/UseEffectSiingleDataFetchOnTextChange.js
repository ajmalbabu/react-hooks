import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectSiingleDataFetchOnTextChange() {
    const [post, setPost] = useState([])
    const [postId, setPostId] = useState(0)

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(payload => {
                setPost(payload.data)
            }).catch(err => {
                console.log(err)
            })
    }, [postId])

    return (
        <div>
            <input type="text" value={postId} onChange={e => setPostId(e.target.value)}>{}</input>
            <div>{post.title}</div>
        </div>
    )
}

export default UseEffectSiingleDataFetchOnTextChange
