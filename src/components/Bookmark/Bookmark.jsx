import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const{title}=bookmark
    return (
        <div className='bg-slate-400 p-4 rounded-xl my-3'>
            <h2 className="text-xl">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
};

export default Bookmark;