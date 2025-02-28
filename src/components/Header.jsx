const Header = ({ answers }) => {
  const attempted = answers.filter((a) => a !== null).length;

  return (
    <>
      <h1>
        Attempted {attempted} / {answers.length}{" "}
      </h1>
    </>
  );
};

export default Header;
