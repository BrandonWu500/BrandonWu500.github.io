const Testimonials = () => {
  return (
    <section className="px-10 dark:bg-slate-900 dark:text-gray-300">
      <div className="container mx-auto pt-40 pb-40 h-full flex flex-col gap-4 max-w-xl leading-8 font-arial">
        <h2 className="text-center uppercase font-bold text-xl font-nunito mb-5">
          Testimonials
        </h2>
        <strong>
          {`Here's what past clients I have worked with have to say:`}
        </strong>
        <p className="italic">
          {`"I recently had the pleasure of working with Brandon on a project to
          update the front end of our website, and I cannot recommend him highly
          enough. Brandon did an exceptional job, delivering quality work with a
          high level of professionalism and great communication throughout the
          project.`}
        </p>
        <p className="italic">
          {` From start to finish, Brandon was a joy to work with. He took the time
          to understand our needs and goals and provided valuable suggestions
          and insights on how to improve the website's design and functionality.
          He was always responsive and approachable, and his positive attitude
          and can-do approach made the entire process much smoother and more
          enjoyable.`}
        </p>
        <p className="italic">
          {`Brandon's technical skills were top-notch, and he did an excellent job
          updating the front end of the website. The new design is modern,
          user-friendly, and has received positive feedback from our customers.
          Brandon worked efficiently and effectively, and he kept us updated on
          his progress at every stage of the project.`}
        </p>
        <p className="italic">
          {`Beyond the technical work, Brandon was also very personable and easy
          to work with. He was always polite, patient, and willing to answer any
          questions we had. He went above and beyond to ensure that we were
          happy with the final product and that our website was ready to launch
          on time.`}
        </p>
        <p className="italic">
          {`In summary, I would give Brandon a five-star rating without
          hesitation. His technical skills, communication, and customer service
          were all outstanding, and he was a pleasure to work with from start to
          finish. I would highly recommend him to anyone looking for a talented
          and reliable software developer. Thank you, Brandon, for a job well
          done!"`}
        </p>
        <strong>{`- Upwork Client`}</strong>
      </div>
    </section>
  );
};
export default Testimonials;
