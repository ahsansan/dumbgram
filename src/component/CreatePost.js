// Import CSS
import '../styles/components/createpost.css'

function CreatePost() {
    return(
        <div className='create-post-container'>
            <h1>Create Post</h1>
            <form>
                <div>
                    <label for="input-photo-video" className="post-upload-photo-button">
                        <p>Upload Photos or Video</p>
                    </label>
                    <input type="file"  id="input-photo-video" hidden />
                </div>
                <div>
                    <textarea name="caption" id="caption" className='caption-textarea' placeholder='Caption'></textarea>
                </div>
                <div className='upload-button-container'>
                    <button className='upload-button'>Upload</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;