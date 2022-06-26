const Warranty = (props) => {
    return (
        <div className="category-wrapper">
            <div className="flex flex-row">
                <div className="section-title-container">
                    <h3 className="section-title">Warranty</h3>
                </div>
                <div className="specs-table col-xs-9">
                    <ul className="specifications-list">
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Manafacturer's Warranty - Parts</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.warranty.warranty_parts}</div>
                        </li>
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">Manafacturer's Warranty - Labor</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.warranty.warranty_labor}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="line-break lv"></div>
        </div>
    );
}

export default Warranty;