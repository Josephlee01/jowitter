import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import Tweet from 'components/Tweet';
import TweetFactory from 'components/TweetFactory';

const Home = ({ userObj }) => {
  const [twts, setTwts] = useState([]);

  useEffect(() => {
    dbService
      .collection('tweets')
      .orderBy('time', 'desc')
      .onSnapshot((snapshot) => {
        const twtArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTwts(twtArray);
      });
  }, []);

  return (
    <div className="container">
      <TweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {twts.map((twt) => (
          <Tweet
            key={twt.id}
            twtObj={twt}
            isOwner={twt.writerId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
