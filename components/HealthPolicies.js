import "../style/HealthStyle.css";
import HealthPoliciesData from "./HealthPoliciesData";
import Grant from "../assets/5.jpg";
import Partnership from "../assets/6.jpg";
import HealthCare from "../assets/7.jpg";

function HealthPolicies() {
    return (
        <div className="health">
            <h1>Health Policies</h1>
            <p>We advance medical innovation and distribute medicines that might not otherwise be available to underserved communities.</p>
            <div className="Healthcard">
                <HealthPoliciesData
                    image={Grant}
                    heading="Grants"
                    text="We support the global healthcare community's independent initiatives to improve patient outcomes in areas of unmet medical need that are aligned with our medical and/or scientific stratergies."
                />
                <HealthPoliciesData
                    image={Partnership}
                    heading="Political Partnerships"
                    text="We believe that public policy engagement is an important and appropriate role for companies in open socities, when conducted in a legal and transparent manner."
                />
                <HealthPoliciesData
                    image={HealthCare}
                    heading="Working with HealthCare Professionals"
                    text="Working with doctor help us to help patients through research and development, professional advising and consulting, experteled forums, and in-offive information exchange."
                />
            </div>
        </div>
    );
}
export default HealthPolicies;