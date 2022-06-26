const Other = (props) => {
    return (
        <div className="category-wrapper">
            <div className="flex flex-row">
                <div className="section-title-container">
                    <h3 className="section-title">Other</h3>
                </div>
                <div className="specs-table col-xs-9">
                    <ul className="specifications-list">
                        <li className="list-item">
                            <div className="title-container v-fw-medium v-p-right-xs col-xs-6">
                                <div className="row-title">UPC</div>
                            </div>
                            <div className="row-value v-fw-regular col-xs-6">{props.other.upc}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="line-break lv"></div>
        </div>
    );
}

export default Other;