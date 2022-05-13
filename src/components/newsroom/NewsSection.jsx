import React from 'react'
import GridCards2 from '../GridCards2'
import { Link } from 'react-router-dom';
import './styles.css'


export default function NewsSection() {
    let cardContent = [
        {
            bage: 'All Blogs',
            heading: "All blogs",
            icon: "far fa-gem",
            newsTotal: "10+",
        },
        {
            bage: "All News",
            heading: "All News",
            icon: "fas fa-book-open",
            newsTotal: "20+",
        },
        {
            bage: "All verticles",
            heading: "All verticles",
            icon: "fas fa-bookmark",
            newsTotal: "30+",
        },
    ];
    return (
        <div className="news_container">
            <h1 style={{ textAlign: 'center', }}>Khansortium Updates</h1>

            <div className='newsBoxes'>
                {
                    cardContent.map((item, index) => {
                        return (
                            <div key={index} className='newsBox' style={{ position: 'relative', backgroundColor: '#307fe2' }} >
                                <p style={{ fontWeight: '100', fontSize: '16px', textTransform: 'uppercase', position: 'absolute', left: '15px', top: '10px', color: '#fff' }} >{item.bage}</p>
                                <i className={item.icon} style={{ fontSize: '70px', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: '#fff', color: '#a7a428', marginBottom: '10px', }} ></i>
                                <p style={{ marginBottom: '10px', fontSize: '30px', fontWeight: "bold", color: '#fff' }}>{item.newsTotal}</p>
                                <h3 style={{ fontSize: '20px', color: '#fff' }} >{item.heading}</h3>
                                <i style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#fff' }} className="fa fa-long-arrow-alt-right"></i>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}
