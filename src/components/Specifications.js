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
        <div id="shop-specifications">
            <div className="specs-container specs-wrapper all-specs-wrapper">
                <div className="specifications-accordion-wrapper">
                    <div className="c-accordion border-bottom size-1">
                        <div aria-level="2" role="heading">
                            <button class="c-show-hide-trigger c-accordion-trigger p-200 py-lg-300 px-lg-none flex align-items-center" type="button" aria-expanded="true" aria-controls="specifications-accordion-content" data-track="Specifications: Accordion Close">
                                <span class="c-accordion-trigger-label">Specifications</span>
                                <svg aria-hidden="true" role="img" viewBox="0 0 100 100" class="c-accordion-trigger-icon w-200 fill w-lg-300 mr-lg-200 c-accordion-rotate-caret-up">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.05 21.65a.97.97 0 0 1-.6-.2l-12.33-9.3A.98.98 0 0 1 4.3 10.6l11.75 8.85 11.74-8.85a.98.98 0 0 1 1.18 1.56l-12.34 9.3a.97.97 0 0 1-.58.2"></path>
                                    </svg>
                                </svg>
                            </button>
                        </div>
                        <div className="c-show-hide" id="specifications-accordion-content">
                            <div className="c-accordion-content">
                                <div className="spec-categories">
                                    {general && <General general={general[0]} />}
                                    {warranty && <Warranty warranty={warranty[0]} />}
                                    {other && <Other other={other[0]} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specifications;