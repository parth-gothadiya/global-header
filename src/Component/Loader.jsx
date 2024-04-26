import React from 'react'
import { ProgressBar,ThreeDots } from 'react-loader-spinner';

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
            <ProgressBar
                visible={true}
                height="100vh"
                width="90"
                color="#ffbc04"
                borderColor='#000000'
                barColor='#ffbc04'
                ariaLabel="Loading"
                wrapperStyle={{}}
                wrapperClass="d-flex justify-center items-center my-auto"
            />
        </div>
    )
}

export default Loader;
