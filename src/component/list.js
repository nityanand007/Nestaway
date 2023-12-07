import "../styles/list.css"
import React from 'react';
const List = (props) => {
    const list = props.datalist
    return (
        <>
            {list?.houses?.map((value, i) => (
                <div className="main" key={i}>
                    <div className="image_container">
                        <img src={value?.image_url} alt="house-274944" className="img" />
                        <div style={{ position: 'relative' }}>
                            <h4 className="Icon">{value?.gender}</h4>
                        </div>
                    </div>
                    <div className="property_list">
                        <div className="details">
                            <span className="price">{value?.title}</span>
                        </div>
                        <div className="details">
                            <span className="price">₹{value?.rent}/-</span>
                            <span className="deposit">Deposit :&nbsp;
                                <span>{value?.advance}/-</span></span>
                        </div>
                        <div className="information">
                            <h1 className="bedroom">{value?.bhk_details}&nbsp;
                                for rent in {value?.locality}</h1>
                            <div className="bedroom_info">
                                <div className="area_detail">
                                    <span className="area">Area</span>
                                    <span className="area_detail_input">{value?.area} sq.ft</span>
                                </div>
                                <div className="border_line"></div>
                                <div className="area_detail">
                                    <span className="area">Furnishing</span>
                                    <span className="area_detail_input">{value?.furnishing_type}</span></div>
                                <div className="border_line"></div>
                                <div className="area_detail">
                                    <span className="area">House_type</span>
                                    <span className="area_detail_input">{value?.house_type}</span></div></div>
                        </div>
                    </div>
                    <div className="property_list_Mob">
                        <div className="information">
                            <h1 className="bedroom">{value?.bhk_details}&nbsp;
                                for rent in {value?.locality}</h1>
                            <div className="details">
                                <span className="price">{value?.title}</span>
                            </div>
                            <div className="bedroom_info">

                                <div className="details">
                                    <span className="price">₹{value?.rent}/-</span>
                                    <span className="deposit">Deposit :&nbsp;
                                        <span>{value?.advance}/-</span></span>
                                </div>
                            </div>
                            <div className="area_detail">
                                <span className="area">Location :</span>
                                <span className="area_detail_input">{value?.city}</span>
                                <span className="border_line"></span>
                                <span className="area">Area :</span>
                                <span className="area_detail_input">{value?.area} sq.ft</span>
                            </div>
                            <div className="furnish_detail">
                                <div className="detail_about">
                                    <span className="area">Furnishing :</span>
                                    <span className="area_detail_input">{value?.furnishing_type}</span>
                                    <span className="area">House_type :</span>
                                    <span className="area_detail_input">{value?.house_type}</span></div>
                                <div className="more_info_mob">
                                    <div className="more_info">
                                        <a href='/details' className="view_details">View details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <div className="more_info">
                            <a href='/details' className="view_details">View details</a>
                        </div>
                    </div>
                </div>))}
        </>
    )
}
export default List;
