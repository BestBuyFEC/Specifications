const General = (props) => {

    return (
        <div className="category-wrapper">
            <div className="flex flex-row">
                <div className="section-title-container">
                    <h3 className="section-title">General</h3>
                </div>
                <div className="specs-table col-xs-9">
                    <ul className="specifications-list">
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Product Name</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.product_name}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Brand</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.brand}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Number Of Pieces Included</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.num_pieces}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Material</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.material}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Recommended Minimum Age</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.min_age}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Brand/Character</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.brand_character}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Model Number</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.general.model_num}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="line-break lv"></div>
        </div>
    );
}

export default General;
