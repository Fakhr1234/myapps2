import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// يجب أن يستقبل props
const PhotoCard = ({ post , commentsCount , incr }) => {
  const nodeRef = useRef(null);
  if (!post) return null; // تحقق من وجود post

  return (
    <figure className="grid-figures">
      <div className="grid-photo-wrap">
              <Link to={`/view/${post.code}`}>
        {/* من الأفضل عرض صورة مع العنوان وليس العنوان فقط */}
        {/* مثال توضيحي لعرض الصورة والتعليق */}
        <img src={post.display_src} alt={post.caption} className="gsrid-photos"/>
      </Link>

<TransitionGroup>
  <CSSTransition
    key={post.likes}
    timeout={500}
    classNames="like"
    nodeRef={nodeRef} // مهم جدًا
  >
    <span ref={nodeRef} className="likes-heart">{post.likes}</span>
  </CSSTransition>
</TransitionGroup>
      </div>
      <figcaption>
        <p>{post.caption}</p>
        <p>{post.code}</p>
        <div className="control-buttons">
          <button className="likes" onClick={incr}>&hearts; {post.likes}</button>
          <Link to={`/view/${post.code}`} className="button">
            <span className="comment-count">
              <span className="speech-bubble"></span>
           {commentsCount}
              </span>
          </Link>
        </div>
      </figcaption>

    </figure>
    <h2>the new file add</h2>
    <h1>helooo </h1>
  );
};

export default PhotoCard;