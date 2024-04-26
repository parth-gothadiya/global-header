import React from 'react'
import { RotatingLines, ThreeDots } from 'react-loader-spinner';

function Loader() {
    return (
        <div>
            <ThreeDots
                visible={true}
                height="100vh"
                width="90"
                color="#ffbc04"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="d-flex justify-center items-center my-auto"    
            />
        </div>
    )
}

export default Loader;
