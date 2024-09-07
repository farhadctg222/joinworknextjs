import React from 'react';

const Loading = () => {
    return (
            <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
       
    );
};

export default Loading;