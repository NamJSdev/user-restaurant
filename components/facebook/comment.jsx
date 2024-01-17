import React from 'react'

const FacebookComment = () => {
    return (
        <div>
            <h2>Comments</h2>
            <div
                className="fb-comments"
                data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                data-width=""
                data-numposts={5}
            />

        </div>
    )
}

export default FacebookComment