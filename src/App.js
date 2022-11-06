// import React, {Component} from "react";
// import axios from "axios";
// import "./App.css";
//
// const apiURL = "https://jsonplaceholder.typicode.com/posts";
//
// class App extends Component {
//     state = {
//         posts: [],
//         dataLoaded: false,
//         response : {
//             title: "",
//             body: ""
//         }
//     }
//
//     // componentDidMount() {
//     //     fetch("https://jsonplaceholder.typicode.com/posts")
//     //         .then((response => response.json()))
//     //         .then((data => console.log(data)))
//     // }
//
//
//     async componentDidMount() {
//         const {data: posts} = await axios.get(apiURL);
//         this.setState({posts, dataLoaded: true});
//         console.log(this.state)
//     }
//
//     handleAdd = async () => {
//         const {title , body} = this.state.response
//         const obj = {title: title, body: body};
//         const {data: post} = await axios.post(apiURL, obj);
//         const posts = [post, ...this.state.posts];
//         this.setState({posts})
//     }
//
//     // handleUpdate = async (post) => {
//     //     post.title = "updated";
//     //     await axios.put(apiURL + "/" + post.id, post)
//     //
//     //     const posts = [...this.state.posts];
//     //     const index = posts.indexOf(post)
//     //     posts[index] = {...post}
//     //     this.setState({posts})
//     // }
//
//
//     handleUpdate = async (post) => {
//         post.title = this.state.response.title;
//         post.body = this.state.response.body;
//         await axios.put(apiURL + "/" + post.id, post);
//
//         const posts = [...this.state.posts];
//         const index = posts.indexOf(post);
//         posts[index] = {...post};
//         this.setState({posts});
//     }
//
//
//     handleDelete = async (post) => {
//         await axios.delete(apiURL + "/" + post.id);
//         const posts = this.state.posts.filter(p => p.id !== post.id);
//         this.setState({posts});
//     }
//
//     updateResponse = (event) => {
//         const {name , value} = event.target
//         const response = {...this.state.response}
//         response[name] = value
//
//         this.setState({response})
//     }
//
//
//     render() {
//         if (!this.state.dataLoaded) return <h1>Please wait...</h1>
//         return (
//             <div className="container mt-2">
//                 <div className="input-group">
//                     <span className="input-group-text">Title and Body</span>
//                     <input name="title" value={this.state.response.title} onChange={(event) => this.updateResponse(event)}
//                            type="text" className="form-control"/>
//                     <input name="body" value={this.state.response.body} onChange={(event) => this.updateResponse(event)}
//                            type="text" className="form-control"/>
//                 </div>
//                 <button onClick={this.handleAdd} className="btn btn-warning mb-2 mt-3">Add</button>
//                 <table className="table">
//                     <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.posts.map((post) => (
//                         <tr key={post.id}>
//                             <td>{post.title}</td>
//                             <td>
//                                 <button onClick={() => this.handleUpdate(post)} className="btn btn-primary">Update
//                                 </button>
//                             </td>
//                             <td>
//                                 <button onClick={() => this.handleDelete(post)} className="btn btn-danger">Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
//
// export default App;



//retool generate api from csv


// import React, {Component} from "react";
// import axios from "axios";
// import "./App.css";
//
// const apiURL = "https://retoolapi.dev/R6g75F/posts";
//
// class App extends Component {
//     state = {
//         posts: [],
//         dataLoaded: false,
//         response : {
//             title: "",
//             body: ""
//         }
//     }
//
//     // componentDidMount() {
//     //     fetch("https://jsonplaceholder.typicode.com/posts")
//     //         .then((response => response.json()))
//     //         .then((data => console.log(data)))
//     // }
//
//
//     async componentDidMount() {
//         const {data: posts} = await axios.get(apiURL);
//         this.setState({posts, dataLoaded: true});
//         console.log(this.state)
//     }
//
//     handleAdd = async () => {
//         const {title , body} = this.state.response
//         const obj = {title: title, body: body};
//         const {data: post} = await axios.post(apiURL, obj);
//         const posts = [post, ...this.state.posts];
//         this.setState({posts})
//     }
//
//     // handleUpdate = async (post) => {
//     //     post.title = "updated";
//     //     await axios.put(apiURL + "/" + post.id, post)
//     //
//     //     const posts = [...this.state.posts];
//     //     const index = posts.indexOf(post)
//     //     posts[index] = {...post}
//     //     this.setState({posts})
//     // }
//
//
//     handleUpdate = async (post) => {
//         post.title = this.state.response.title;
//         post.body = this.state.response.body;
//         await axios.put(apiURL + "/" + post.id, post);
//
//         const posts = [...this.state.posts];
//         const index = posts.indexOf(post);
//         posts[index] = {...post};
//         this.setState({posts});
//     }
//
//
//     handleDelete = async (post) => {
//         await axios.delete(apiURL + "/" + post.id);
//         const posts = this.state.posts.filter(p => p.id !== post.id);
//         this.setState({posts});
//     }
//
//     updateResponse = (event) => {
//         const {name , value} = event.target
//         const response = {...this.state.response}
//         response[name] = value
//
//         this.setState({response})
//     }
//
//
//     render() {
//         if (!this.state.dataLoaded) return <h1>Please wait...</h1>
//         return (
//             <div className="container mt-2">
//                 <div className="input-group">
//                     <span className="input-group-text">Title and Body</span>
//                     <input name="title" value={this.state.response.title} onChange={(event) => this.updateResponse(event)}
//                            type="text" className="form-control"/>
//                     <input name="body" value={this.state.response.body} onChange={(event) => this.updateResponse(event)}
//                            type="text" className="form-control"/>
//                 </div>
//                 <button onClick={this.handleAdd} className="btn btn-warning mb-2 mt-3">Add</button>
//                 <table className="table">
//                     <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.posts.map((post) => (
//                         <tr key={post.id}>
//                             <td>{post.title}</td>
//                             <td>
//                                 <button onClick={() => this.handleUpdate(post)} className="btn btn-primary">Update
//                                 </button>
//                             </td>
//                             <td>
//                                 <button onClick={() => this.handleDelete(post)} className="btn btn-danger">Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
//
// export default App;



//generate api with json server




import React, {Component} from "react";
import axios from "axios";
import "./App.css";

const apiURL = "http://localhost:3000/posts";

class App extends Component {
    state = {
        posts: [],
        dataLoaded: false,
        response : {
            title: "",
            body: ""
        }
    }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response => response.json()))
    //         .then((data => console.log(data)))
    // }


    async componentDidMount() {
        const {data: posts} = await axios.get(apiURL);
        this.setState({posts, dataLoaded: true});
        console.log(this.state)
    }

    handleAdd = async () => {
        const {title , body} = this.state.response
        const obj = {title: title, body: body};
        const {data: post} = await axios.post(apiURL, obj);
        const posts = [post, ...this.state.posts];
        this.setState({posts})
    }

    // handleUpdate = async (post) => {
    //     post.title = "updated";
    //     await axios.put(apiURL + "/" + post.id, post)
    //
    //     const posts = [...this.state.posts];
    //     const index = posts.indexOf(post)
    //     posts[index] = {...post}
    //     this.setState({posts})
    // }


    handleUpdate = async (post) => {
        post.title = this.state.response.title;
        post.body = this.state.response.body;
        await axios.put(apiURL + "/" + post.id, post);

        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...post};
        this.setState({posts});
    }


    handleDelete = async (post) => {
        await axios.delete(apiURL + "/" + post.id);
        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({posts});
    }

    updateResponse = (event) => {
        const {name , value} = event.target
        const response = {...this.state.response}
        response[name] = value

        this.setState({response})
    }


    render() {
        if (!this.state.dataLoaded) return <h1>Please wait...</h1>
        return (
            <div className="container mt-2">
                <div className="input-group">
                    <span className="input-group-text">Title and Body</span>
                    <input name="title" value={this.state.response.title} onChange={(event) => this.updateResponse(event)}
                           type="text" className="form-control"/>
                    <input name="body" value={this.state.response.body} onChange={(event) => this.updateResponse(event)}
                           type="text" className="form-control"/>
                </div>
                <button onClick={this.handleAdd} className="btn btn-warning mb-2 mt-3">Add</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button onClick={() => this.handleUpdate(post)} className="btn btn-primary">Update
                                </button>
                            </td>
                            <td>
                                <button onClick={() => this.handleDelete(post)} className="btn btn-danger">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;

