import React from 'react'
import GridCards2 from '../GridCards2'
import { Link } from 'react-router-dom';
import './styles.css'
import Blogs from './BlogContents'
import cards from '../../assets/data/vericalcards';


export default function KsUpdates() {
    let cardContent = [
        {
            bage: 'All Blogs',
            heading: "All blogs",
            icon: "far fa-gem",
            newsTotal: Blogs.length,
            link: '/all-blogs'
        },
        {
            bage: "All News",
            heading: "All News",
            icon: "fas fa-book-open",
            newsTotal: Blogs.length + 2,
            link: '#Grid2'
        },
        {
            bage: "All verticles",
            heading: "All verticles",
            icon: "fas fa-bookmark",
            newsTotal: cards.length + "+",
            link: '/business#Vertical_Cards'
        },
    ];
    return (
        <div className="news_container">
            <h1 style={{ textAlign: 'center', }}>Khansortium Updates</h1>

            <div className='newsBoxes'>
                {
                    cardContent.map((item, index) => {
                        return (
                            <a className='newsBox' key={index} href={item.link}>
                                <p className='bage' style={{ fontSize: '16px' }} >{item.bage}</p>
                                <i className={item.icon} style={{ fontSize: '70px', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: '#fff', color: '#a7a428', marginBottom: '10px', }} ></i>
                                <p style={{ marginBottom: '10px', fontSize: '30px', fontWeight: "bold", color: '#fff' }}>{item.newsTotal}</p>
                                <h3 style={{ fontSize: '20px', color: '#fff' }} >{item.heading}</h3>
                                <i style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#fff' }} className="fa fa-long-arrow-alt-right"></i>
                            </a>

                        )
                    })
                }

            </div>
        </div>
    )
}
