import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
        Explore the lost treasures and shining stars of the 1990s! Find your
        favorite cartoons, TV shows, music albums, & more with easy filtering
        functionality. With Immemorial, stay up-to-date with all your 90s
        favorites while turning back time.
      </p>
      <p>
        What's the only era that never seems to end? The 90s! Journey through
        appreciating items from 90s TV, music, and art. See if you remember old
        toys, cartoons, or prints of such. Indulge in some nostalgia before our
        world falls back into the dark ages.
      </p>
    </section>
  );
};

export default About;
