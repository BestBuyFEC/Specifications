import { useEffect, useState } from "react";
import General from "./General";
import Warranty from "./Warranty";
import Other from "./Other";

const Specifications = () => {
    const [loading, setLoading] = useState(true);
    const [general, setGeneral] = useState(null);
    const [warranty, setWarranty] = useState(null);
    const [other, setOther] = useState(null);

    useEffect(() => {
        fetchGeneral();
        fetchWarranty();
        fetchOther();
    }, [])


    const fetchGeneral = async () => {
        await fetch('http://localhost:3000/specs/general')
            .then((response) => response.json())
            .then((data) => setGeneral(data.map((elem) => (
                {
                    id: elem.id,
                    sku: elem.sku,
                    product_name: elem.product_name,
                    brand: elem.brand,
                    num_pieces: elem.num_pieces,
                    material: elem.material,
                    min_age: elem.min_age,
                    brand_character: elem.brand_character,
                    model_num: elem.model_num
                }
            ))))
            .catch((error) => console.log(error))
        setLoading(false);
    }




    const fetchWarranty = async () => {
        await fetch('http://localhost:3000/specs/warranty')
            .then((response) => response.json())
            .then((data) => setWarranty(data.map((elem) => (
                {
                    id: elem.id,
                    sku: elem.sku,
                    warranty_parts: elem.warranty_parts,
                    warranty_labor: elem.warranty_labor
                }
            )))).catch((error) => console.log(error))
        setLoading(false);
    }


    const fetchOther = async () => {
        await fetch('http://localhost:3000/specs/other')
            .then((response) => response.json())
            .then((data) =>
                setOther(data.map((elem) => (
                    {
                        id: elem.id,
                        sku: elem.sku,
                        upc: elem.upc
                    }
                )))).catch((error) => console.log(error))
        setLoading(false);
    }


    return (
        <div className="specification-container">
            {loading && <h1>Loading...</h1>}
            <h1>Specifications</h1>
            {general && <General general={general[0]} />}
            {warranty && <Warranty warranty={warranty[0]} />}
            {other && <Other other={other[0]} />}
        </div>
    );
}

export default Specifications;