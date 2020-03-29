import React from 'react'
import { Link } from 'gatsby'
import './Breadcrumbs.css'



const Breadcrumbs = ({data}) => {
    return (
        <div className="breadcrumbs">
            <Link to="/">Главная</Link>
            {data.map((item, index)=>{
                if(index < (data.length - 1)){
                    return (<Link key={item.title} to={item.path}>{item.title}</Link>)
                } else {
                    return (<span key={item.title}>{item.title}</span>)
                }
            })}
        </div>
    )
};

Breadcrumbs.defaultProps = {
    data : [
        {
            title: "Главная",
            path: '/',
        }
    ]
}

export default Breadcrumbs