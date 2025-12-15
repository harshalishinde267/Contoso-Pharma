import "../style/Productdrugs.css";
import HealthPoliciesData from "./HealthPoliciesData";
import drug from "../assets/27.jpg";
import Distribution from "../assets/28.jpg";
import Detail from "../assets/29.jpg";

function Productdrugs() {
    return (
        <div className="product-drugs">
            <h1>Drugs and Clinical Trials</h1>
            <p>Different types of drugs produced by contoso and it's competitor companies with distribution of drugs produced by contoso.</p>
            <div className="drugscard">
                <HealthPoliciesData
                    image={drug}
                    heading="Drugs"
                    text="We support the global healthcare community's independent initiatives to improve patient outcomes in areas of unmet medical need that are aligned with our medical and/or scientific stratergies."
                />
                <HealthPoliciesData
                    image={Distribution}
                    heading="Drug Distribution"
                    text="We believe that public policy engagement is an important and appropriate role for companies in open socities, when conducted in a legal and transparent manner."
                />
                <HealthPoliciesData
                    image={Detail}
                    heading="Clinical Trial Information"
                    text="Working with doctor help us to help patients through research and development, professional advising and consulting, experteled forums, and in-offive information exchange."
                />
            </div>
        </div>
    );
}
export default Productdrugs;