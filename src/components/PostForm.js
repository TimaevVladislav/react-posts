import React from "react"
import {connect} from "react-redux"
import {createPost, showAlert, hideAlert} from "../store/actions/actions"

import Alert from "./Alert"

// Наследование
class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { title: "" }
    }

    submitHandler = (event) => {
      event.preventDefault()

      const { title } = this.state

      if (!title.trim()) {
          return this.props.showAlert("Название поста не может быть пустым...", "danger")
      }

      this.props.hideAlert()

      const newPost = {
          title, id: Date.now()
      }

      if (this.props.createPost(newPost)) {
          return this.props.showAlert("Пост успешно создан!", "success")
      }

      this.setState({ title: "" })
    }


    changeInputHandler = (event) => {
        event.persist()
        this.setState(prev => ({ ...prev }, {[event.target.name] : event.target.value}))
    }

    render() {
       return (
           <form onSubmit={this.submitHandler}>
               <div className="form-group">
                   <label htmlFor="title">Заголовок поста</label>

                   { this.props.alert && <Alert /> }

                   <input
                       type="text"
                       className="form-control"
                       id="title"
                       name="title"
                       value={this.state.title}
                       onChange={e => this.changeInputHandler(e)}
                   />
               </div>

               <button className="btn btn-success mt-2" type="submit">
                   Создать
               </button>
           </form>
       )
    }
}

const mapDispatchToProps = {
   createPost,
   showAlert,
   hideAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert,
    color: state.app.color
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)