import React from 'react'
import { Link } from 'gatsby'
import './Breadcrumbs.css'



const Breadcrumbs = ({data}) => {
    return (
        <div className="breadcrumbs col-12">
            <Link to="/">Главная</Link>
            {data.map((item)=>{
                if(item.link){
                    return (<Link to={item.path}>{item.title}</Link>)
                } else {
                    return (<span>{item.title}</span>)
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
            link: true,
        }
    ]
}

export default Breadcrumbs