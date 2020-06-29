import React from 'react'
import './style.scss'


class Card extends React.Component {
    render() {
        const { img, title, description, url } = this.props.project

        return (
            <div className='individualCard'>
                <a href={url} target='_blank'>
                    <img src={img} />
                    <p className='title'>{title}</p>
                    <p className='description'>{description}</p>
                </a>
            </div>
        )
    }
}
export default Card