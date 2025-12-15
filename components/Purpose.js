import Purpose1 from "../assets/1.jpg";
import Purpose2 from "../assets/2.jpg";
import Purpose3 from "../assets/3.jpg";
import Purpose4 from "../assets/4.jpg";
import PurposeData from "./PurposeData"
import "../style/Purpose.css"

const Purpose = () => {
    return (
        <div className="destination">
            <h1>Our Purpose and Responsibility</h1>
            <p>Living Our Purpose</p>

            <PurposeData

                className="first-des"
                heading="Our Purpose"
                text="We’re in relentless pursuit of breakthroughs that change patients’ lives. We innovate every day to make the world a healthier place. It was our vision at the beginning and it holds true today.
                      Contoso’s purpose—Breakthroughs that change patients' lives—fuels everything we do and reflects our passion for building on our legacy as one of the greatest contributors of good to the world."
                img1={Purpose1}
                img2={Purpose2}
            />

            <div className="destination">
                <PurposeData
                    className="first-des-reverse"
                    heading="Our Responsibility"
                    text="Our unique resources allow us to do more for people. Using our global presence and scale, we’re able to make a difference in local communities and the world around us.
                    Because everyone has something to offer. Diversity is just as crucial to building a successful business as it is to building a vibrant culture. "
                    img1={Purpose3}
                    img2={Purpose4}
                />
            </div>
        </div>
    );
};

export default Purpose;