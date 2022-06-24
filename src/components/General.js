const General = (props) => {

    return (
        <div className="category-container">
            <div className="flex flex-row">
                <div className="section-title-container">
                    <h2 className="section-title">General</h2>
                </div>
                <div className="spec">
                    <h3>Product name</h3>
                    <h3>{props.general.product_name}</h3>
                </div>
                <div className="spec">
                    <h3>Brand</h3>
                    <h3>{props.general.brand}</h3>
                </div>
                <div className="spec">
                    <h3>Number of Pieces Included</h3>
                    <h3>{props.general.num_pieces}</h3>
                </div>
                <div className="spec">
                    <h3>Material</h3>
                    <h3>{props.general.material}</h3>
                </div>
                <div className="spec">
                    <h3>Recommended Minimum Age</h3>
                    <h3>{props.general.min_age}</h3>
                </div>
                <div className="spec">
                    <h3>Brand Character</h3>
                    <h3>{props.general.brand_character}</h3>
                </div>
                <div className="spec">
                    <h3>Model Number</h3>
                    <h3>{props.general.model_num}</h3>
                </div>
            </div>

        </div>
    );
}

export default General; 