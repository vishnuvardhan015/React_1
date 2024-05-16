const Work = (props) => {
  const { name, email, body } = props;
  return (
    <article>
      <h3 className="Name">{name}</h3>
      <h2 className="Email">{email}</h2>
      <p className="Content">{body}</p>
    </article>
  );
};

export default Work;
