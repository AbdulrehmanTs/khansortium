import React from 'react'

const FbPost = ({width,height,src}) => {
    return (
        <iframe src={src} width={width} height={height} style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      
    )
}

export default FbPost
