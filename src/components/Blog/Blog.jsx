import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog,handleAddToBookmark,handleReadingTime}) => {
    const {id,title,cover,author,author_img,reading_time,hashtags,posted_date}=blog;
    return (
        <div className='mb-10'>
            <img className='rounded-2xl ' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center my-4'>
                    <img className='w-10 h-10' src={author_img} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <div>
                    <p className='flex items-center gap-2'>{reading_time} min read <button onClick={handleAddToBookmark}><FaRegBookmark></FaRegBookmark></button></p>
                    
                </div>
            </div>
            <h3 className="text-3xl font-bold">Title:{title}</h3>
            <p>
                {
                    hashtags.map((hashtag,idx)=> <span key={idx}>#{hashtag}</span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(id,reading_time)} className='text-blue-800 underline font-bold'>Mark as read</button>
        </div>
    );
};

export default Blog;
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime:PropTypes.func
}