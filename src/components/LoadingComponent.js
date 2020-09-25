import React from 'react';

/**
 * Loading component is displayed before fetched data from redux is available
 * Displays the text "Loading" with a loading spinner image
 */

export const Loading = () => {
  return (
    <div className="col">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
      <p>Loading...</p>
    </div>
  );
};
