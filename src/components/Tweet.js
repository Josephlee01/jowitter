import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Tweet = ({ twtObj, isOwner }) => {
  const [edit, setEdit] = useState(false);
  const [newTwt, setNewTwt] = useState(twtObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm('정말로 삭제하시겠습니까?');
    if (ok) {
      await dbService.doc(`tweets/${twtObj.id}`).delete(); // 트윗 삭제
      await storageService.refFromURL(twtObj.attachmentUrl).delete(); // 사진 삭제
    }
  };

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const onChange = (e) => {
    setNewTwt(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`tweets/${twtObj.id}`).update({
      text: newTwt,
    });
    setEdit(false);
  };

  return (
    <div className="nweet">
      {edit ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              type="text"
              placeholder="Edit your Tweet"
              value={newTwt}
              required
              autoFocus
              onChange={onChange}
              className="formInput"
            />
            <input type="submit" value="Update Tweet" className="formBtn" />
          </form>
          <span onClick={toggleEdit} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{twtObj.text}</h4>
          {twtObj.attachmentUrl && <img alt="" src={twtObj.attachmentUrl} />}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEdit}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
