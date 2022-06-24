const Warranty = (props) => {
    return (
        <div className="warranty-container">
            <h2>Warranty</h2>
            <h3>{props.warranty.warranty_parts}</h3>
            <h3>{props.warranty.warranty_labor}</h3>
        </div>
    );
}

export default Warranty;