const About = () => {
  return (
    <section id="about">
      <div className="photo-box">
        <figure className="photo">
          <img src="/img/avatar.png" alt="myPhoto" />
        </figure>
        <p>
          It's nice to meet you! I am <span>Anna</span> :)
        </p>
      </div>
      <h1>Who am I</h1>
      <p>
        I’m a Frontend / Full-Stack Developer. I moved to Finland three years
        ago and recently completed my studies in Information Technology at
        Helsinki Business College, specializing in Fullstack Development with a
        focus on Java and React.
      </p>
      <p>
        Before that, I studied Information Technologies at Northern (Arctic) Federal
        University in Arkhangelsk. I have about a year of professional
        experience, including internships at Unfair Advantage and Kassavirtanen,
        where I contributed to real-world projects and gained hands-on
        experience in modern web development.
      </p>
      <p>
        I'm a mother of two teenagers, and a member of Helsinki Urban Sketchers.
        In my free time, I enjoy playing board games and traveling.
      </p>
    </section>
  );
};
export default About;
