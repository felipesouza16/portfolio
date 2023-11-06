import "./styles.css";

export const Logo = () => {
  return (
    <a className="button" data-text="Awesome" href="/portfolio">
      <span className="actual-text">&nbsp;felipeSouza.dev&nbsp;</span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;felipeSouza.dev&nbsp;
      </span>
    </a>
  );
};
