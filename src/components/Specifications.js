import { useEffect, useState } from "react";
import General from "./General";
import Warranty from "./Warranty";
import Other from "./Other";
import styled from 'styled-components';
import { ChevronDown } from '@styled-icons/bootstrap';
import Collapsible from 'react-collapsible';

const Specifications = () => {
    const [loading, setLoading] = useState(true);
    const [general, setGeneral] = useState(null);
    const [warranty, setWarranty] = useState(null);
    const [other, setOther] = useState(null);

    useEffect(() => {
        fetchData()
        // fetchGeneral();
        // fetchWarranty();
        // fetchOther();
    }, [])

    async function fetchData(){
        await fetch('http://localhost:3040/specs/general')
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

        await fetch('http://localhost:3040/specs/warranty')
            .then((response) => response.json())
            .then((data) => setWarranty(data.map((elem) => (
                {
                    id: elem.id,
                    sku: elem.sku,
                    warranty_parts: elem.warranty_parts,
                    warranty_labor: elem.warranty_labor
                }
            )))).catch((error) => console.log(error))

        await fetch('http://localhost:3040/specs/other')
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
    
    if(loading === true){
        console.log('loading')
        return(
          <h1 className="header">Loading</h1>
        )
      } else {

    return (
        <Collapsible trigger='Specifications' triggerSibling={<DownArrowIcon />} transitionTime={200} >
            <div id="shop-specifications">
                <div className="spec-categories">
                    {general && <General general={general[0]} />}
                    <div className="line-break lv"></div>
                    {warranty && <Warranty warranty={warranty[0]} />}
                    <div className="line-break lv"></div>
                    {other && <Other other={other[0]} />}
                </div>
            </div>
        </Collapsible>
    );
}
}

export default Specifications;

const DownArrowIcon = styled(ChevronDown)`
  height: 20px;
  justify-self: flex-end;
`