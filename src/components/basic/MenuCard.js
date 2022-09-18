import React from 'react'

const MenuCard = ({ menuData }) => {
    //console.log(menuData);
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((curEle) => {
                    const { id, name, category, image, description } = curEle;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle"> {category}</span>
                                        <h4 className="card-title"> {name} </h4>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />

                                    <span className="card-tag  subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    )
}

export default MenuCard;