import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Accordian = () => {
   
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [open, setOpen] = useState(1);


    return (
<div className='bg-white '>
<div className=" py-10 container">
<h1 className="text-center lg:text-5xl text-3xl ">Question? Look Here</h1>
       <h1 className='text-5xl text-center  my-10'>FAQ</h1>
<Fragment>
      <Accordion className="" open={open === 1}>
        <AccordionHeader  onClick={() => handleOpen(1)}>
        Can I access the educational resources on the website for free?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Are the educational resources on the website suitable for all age groups?
        </AccordionHeader>
        <AccordionBody>
        We aim to provide educational resources that cater to a wide range of age groups and learning levels. Our content is designed to be accessible and useful for learners of all ages, from primary school students to adults. However, please note that certain resources or courses might be specifically tailored for certain age groups or academic levels. We usually provide age recommendations or prerequisites where applicable, allowing users to select content that suits their needs and abilities.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Are the educational courses on the website self-paced or instructor-led?
        </AccordionHeader>
        <AccordionBody>
        Our educational courses offer flexibility to accommodate different learning preferences. Some courses are self-paced, allowing you to learn at your own speed and complete modules or lessons at your convenience. Other courses may be instructor-led, where you follow a structured schedule and interact with an instructor or participate in live sessions. The course format will be mentioned in the course description, and you can choose the type of course that best fits your learning style and availability.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        Can I track my progress and performance on the educational website?
        </AccordionHeader>
        <AccordionBody>
        Yes, our educational website provides features to track your progress and performance. You can typically find a personalized dashboard or profile section where you can view your completed courses, achievements, quiz scores, and other relevant metrics. This allows you to monitor your learning journey, identify areas of improvement, and set goals for your educational development.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        Are the educational courses on the website self-paced or instructor-led?
        </AccordionHeader>
        <AccordionBody>
        Yes, some of the educational resources on our website may be available for offline access. This feature allows you to download specific materials such as PDFs, e-books, or video lectures to your device, so you can access them even without an internet connection. Not all resources may have this option, but where available, you will usually find a download button or an option to save the content for offline use.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Can I contribute my own educational content to the website?
        </AccordionHeader>
        <AccordionBody>
        We appreciate contributions from users who are willing to share their educational content. If you would like to contribute, please reach out to our support team or the website administrators. They will guide you through the process and provide instructions on how to submit your content. However, please note that all contributions are subject to review and approval to ensure the quality and relevance of the content being shared.
        </AccordionBody>
      </Accordion>
    </Fragment>
</div>
</div>

    );
};

export default Accordian;

      

