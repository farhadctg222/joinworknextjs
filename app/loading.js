import React from 'react';

const loading = () => {
    return (
        <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
    )
};

export default loading;