import React from 'react'
import Blogs from "../newsroom/BlogContents"
import './styles.css'
import "../../components/carousel.css";


export default function AllBlogs() {
    console.log(Blogs)

    return (
        <div className="news_container">
            <h1 style={{ textAlign: 'center', }}>Khansortium Blogs</h1>

            <div className='blogCards'>
                {
                    Blogs.map((item, index) => {
                        return (
                            <a className='blogCard' key={index} href={`/blogs/${item.title}`}
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${require(`../../../public/images/${item.carouselImage}`).default})`
                                }}
                            >
                                <p style={{ fontWeight: '600', paddingLeft: '10px', paddingRight: '10px', fontSize: '22px', }} >{item.title}</p>

                                <i style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#fff' }} className="fa fa-long-arrow-alt-right"></i>
                            </a>

                        )
                    })
                }

            </div>
        </div>
    )
}
