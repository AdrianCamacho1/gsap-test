import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why do I need a landing page if I already have a website?",
      answer:
        "A landing page is a focused, standalone page designed to drive specific actions from your visitors, like signing up for a newsletter, downloading a resource, or making a purchase. Unlike your main website, which has broader goals, a landing page streamlines the user experience and guides them toward a single conversion goal, ultimately boosting your marketing efforts.",
    },
    {
      id: 2,
      question:
        "I'm not a tech expert. Can you handle all the technical aspects of building my landing page?",
      answer:
        "Absolutely! At Site Launch Studios, we take care of everything from design and development to deployment and optimization. We'll work closely with you to understand your goals, create a design that aligns with your brand, and build a landing page that's both visually appealing and technically sound. You can focus on your business while we handle the technical side.",
    },
    {
      id: 3,
      question:
        "How much does it cost to create a landing page with Site Launch Studios?",
      answer:
        "The cost of a landing page can vary depending on factors like complexity, design customization, additional features (like forms or integrations), and the level of ongoing support you require. We offer a range of customizable packages to fit different budgets and needs. Get in touch with us for a personalized quote!",
    },
    {
      id: 4,
      question: "How do I know if my landing page is effective?",
      answer:
        "We believe in data-driven results. We'll set up tracking and analytics to monitor your landing page's performance. This allows us to measure key metrics like traffic, conversions, and engagement. We'll then analyze the data to identify areas for improvement and optimize your landing page for maximum impact.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
