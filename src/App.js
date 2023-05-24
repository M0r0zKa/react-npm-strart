import Post from "./Components/Post/Post";
import Posts from "./Components/Posts/Posts";
import React, {useState} from "react";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {

    const [postDetails, setPostDetails] = useState(null)

    function postDetailsFx(post){
        setPostDetails({...post})
    }

    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>

            <div style={{margin:'20px', border:'3px solid black', width:'30%'}}>
                <Posts postDetailsFx={postDetailsFx}/>
            </div>
            {
                postDetails
                &&
                <div style={{width:'50%'}}>
                    <PostDetails postDetails={postDetails}/>
                </div>
            }

        </div>
    );
}

export default App;
