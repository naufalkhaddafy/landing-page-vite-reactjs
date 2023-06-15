const CardTestimonials = ({ children }) => {
  return <div className={'shadow rounded-xl overflow-hidden bg-rose-50 text-black p-6 max-w-sm'}>{children}</div>;
};

function Title({ children }) {
  return <div className={'font-medium flex items-center gap-x-4'}>{children}</div>;
}
function Body({ children }) {
  return <div className={'text-justify'}>{children}</div>;
}

function Footer({ children }) {
  return <div className={'text-center'}>{children}</div>;
}

CardTestimonials.Title = Title;
CardTestimonials.Body = Body;
CardTestimonials.Footer = Footer;

export default CardTestimonials;
