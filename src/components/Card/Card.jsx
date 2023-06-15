const Card = ({ children }) => {
  return <div className={'shadow rounded-xl overflow-hidden'}>{children}</div>;
};

function Image({ children }) {
  return <div className={'text-center'}>{children}</div>;
}
function Title({ children }) {
  return <div className={'pt-4 text-center font-semibold'}>{children}</div>;
}
function Body({ children }) {
  return <div className={'p-4 text-justify'}>{children}</div>;
}

function Footer({ children }) {
  return <div className={'p-1 text-center'}>{children}</div>;
}
Card.Image = Image;
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
