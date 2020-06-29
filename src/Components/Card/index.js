import React from 'react'
import './style.scss'


class Card extends React.Component {
    render() {
        const { img, title, description } = this.props.project

        return (
            <div className='individualCard'>
                <img src={img} />
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </div>
        )
    }
}
export default Card