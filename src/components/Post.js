import React from "react"
import {Alert} from "./Alert";

export const Post = ({post}) => {
    return (
        <div className="card mt-2">
           <div className="card-body">
               <h5 className="card-title">
                   {post.title}
               </h5>
           </div>
        </div>
    )
}