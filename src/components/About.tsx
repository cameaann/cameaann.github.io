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
        I'm a frontend / full-stack developer. I studied Information Technologies at
        Northern Arkhangelsk Federal University, and here in Finland I completed
        the Java and React Coder course at Helsinki Business College. I have
        about a year of professional experience, including internships at Unfair
        Advantage and Kassavirtanen.
      </p>
      <p>
        I'm a mother of two teenagers, and a member
        of Helsinki Urban Sketchers. I like to play board games and travel.
      </p>
    </section>
  );
};
export default About;
