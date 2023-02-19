import React from "react"
import {connect, useDispatch, useSelector} from "react-redux"
import {Post} from "./Post"
import {fetchPosts} from "../store/actions/actions"
import {Loader} from "./Loader"

const FetchedPosts = ({asyncPosts}) => {

    const dispatch = useDispatch()
    // Получить данные из store
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if (loading) return <Loader />


    const clickHandler = () => {
        dispatch(fetchPosts())
    }

    if (!asyncPosts.length) {
        return (
            <button
             className="btn btn-primary"
             onClick={clickHandler}
            >
                Загрузить
            </button>
        )
    }

    return asyncPosts.map(post => <Post key={post.id} post={post} />)
}

const mapStateToProps = (state) => {
    return {
        asyncPosts: state.posts.fetchedPosts
    }
}

export default connect(mapStateToProps, null)(FetchedPosts)