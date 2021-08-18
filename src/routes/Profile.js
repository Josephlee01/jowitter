import { authService, dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
    refreshUser();
  };

  const onChange = (e) => {
    setNewDisplayName(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  // const getMyTwts = async () => {
  //   const twts = await dbService
  //     .collection('tweets')
  //     .where('writerId', '==', userObj.uid)
  //     .orderBy('time', 'desc')
  //     .get();
  //   console.log(twts.docs.map((doc) => doc.data()));
  // };

  // useEffect(() => {
  //   getMyTwts();
  // }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          type="text"
          onChange={onChange}
          autoFocus
          placeholder="Input your new display name."
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};

export default Profile;
