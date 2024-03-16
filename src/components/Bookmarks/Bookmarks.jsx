import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div >
                <h3 className='bg-slate-400 p-4 rounded-xl'>Reading Time {readingTime} min</h3>
                <h3 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark)=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};


export default Bookmarks;
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}