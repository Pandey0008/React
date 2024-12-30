import React from 'react';

function Card({ someobj, username }) {
  // Destructure the props or fallback to the direct username if not provided
  const { username: objUsername, email } = someobj || {};
  const displayUsername = username || objUsername; // Use either the passed 'username' prop or 'someobj.username'

  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] m-4">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="Card Image"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between">
          <h1 className="font-bold">User Info</h1>
          <h1>{displayUsername}</h1>
        </div>
        <div className="flex justify-between">
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
