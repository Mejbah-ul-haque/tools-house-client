import React from 'react';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className='  m-5'>
                        <img className='img-fluid' src={require('../../assets/Images/NotFound/notFound.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;