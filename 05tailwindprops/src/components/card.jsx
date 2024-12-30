import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes to validate props

function Card({ username, title, description }) {
  // Log props for debugging (optional)
  console.log('props', { username, title, description });

  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] m-4">
      {/* Image Section */}
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="Card Image"
          className="object-cover object-center rounded-t-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between">
          <h1 className="font-bold">{title}</h1>
          <h1>{username}</h1>
        </div>
        <div className="flex justify-between">
          <p>{description}</p>
          <p>Additional Info</p> {/* This could be another prop if needed */}
        </div>
      </div>
    </div>
  );
}

// Prop types validation (optional but recommended)
Card.propTypes = {
  username: PropTypes.string.isRequired, // Validate username as required
  title: PropTypes.string, // Validate title (optional)
  description: PropTypes.string, // Validate description (optional)
};

Card.defaultProps = {
  title: 'Untitled', // Default value if title is not passed
  description: 'No description available', // Default value if description is not passed
};

export default Card;
