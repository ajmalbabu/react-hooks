import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectSiingleDataFetchOnButtonClick() {
    const [post, setPost] = useState([])
    const [postId, setPostId] = useState(0)
    const [idFromCuttonClick, setIdFromCuttonClick] = useState(0)

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromCuttonClick}`)
            .then(payload => {
                setPost(payload.data)
            }).catch(err => {
                console.log(err)
            })
    }, [idFromCuttonClick])

    const handleClick = () => {
        setIdFromCuttonClick(postId)
    }

    return (
        <div>
            <input type="text" value-={postId} onClick={e => setPostId(e.target.value)}></input>
            <button onClick={handleClick}>Get Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default UseEffectSiingleDataFetchOnButtonClick
