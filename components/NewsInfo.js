import React, { useState } from 'react';
import '../style/NewsInfo.css';

const AccordionItem = ({ title, content, date, isOpen, onClick }) => (
    <div>
        <div onClick={onClick} className="accordion-header">
            <span>{isOpen ? '-' : '+'}</span>
            <strong>{title}</strong>
        </div>
        {isOpen && <div className="accordion-content">{date}</div>}
        {isOpen && <div className="accordion-content">{content}</div>}
    </div>
);

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    date={item.date}
                    content={item.content}
                    isOpen={index === openIndex}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

// Example usage
const accordionItems = [
    {
        title: 'Breaking News: New Breakthrough Drug Shows Promising Results in Phase III Clinical Trials',
        date: 'Published on March 6, 2024',
        content: 'In a significant development, researchers have reported promising results in the latest phase III clinical trials for a groundbreaking drug designed to revolutionize the treatment of [specific medical condition]. Preliminary findings indicate improved efficacy and fewer side effects compared to existing treatments. Read more about this groundbreaking discovery and its potential impact on patients lives.',
    },
    {
        title: 'Upcoming Webinar: Understanding the Importance of Patient Participation in Clinical Trials',
        date: 'Scheduled for March 15, 2024',
        content: ' We are excited to announce an upcoming webinar that explores the vital role patients play in advancing medical research through participation in clinical trials. Join renowned experts as they discuss the significance of patient involvement, share success stories, and address common misconceptions. Register now to gain valuable insights and have your questions answered by industry professionals.',
    },
    {
        title: 'FDA Approval: New Drug Receives Expedited Approval for Rare Disease Treatment',
        date: 'Published on February 28, 2024 ',
        content: 'The U.S. Food and Drug Administration (FDA) has granted expedited approval for a novel drug aimed at addressing the unique needs of individuals suffering from [rare disease]. This milestone marks a significant step forward in providing targeted and effective treatment options for patients with limited therapeutic alternatives. Learn more about the newly approved drug and its potential impact on the rare disease community.',
    },
    {
        title: 'COVID-19 Update: Progress Report on Global Vaccination Campaign',
        date: 'Latest Update: March 3, 2024',
        content: ' As the world continues to grapple with the COVID-19 pandemic, we provide a comprehensive update on the global vaccination campaign. Explore the latest vaccination statistics, distribution efforts, and ongoing research initiatives aimed at enhancing vaccine efficacy against emerging variants. Stay informed about the collective efforts to mitigate the impact of the pandemic on a global scale.',
    }
];

const NewsInfo = () => (
    <div>
        <h1 className='news-title'>Latest News and Updates</h1>
        <p className='news-p'>Stay Informed with Our Comprehensive Healthcare Updates</p>
        <Accordion items={accordionItems} />
    </div>
);

export default NewsInfo;
