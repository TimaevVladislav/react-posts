import {takeEvery} from 'redux-saga/effects'
import {REQUEST_POSTS} from "../reducer/types"

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS)
}

async function fetchPosts() {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
   const json = await response.json()

   return json
}