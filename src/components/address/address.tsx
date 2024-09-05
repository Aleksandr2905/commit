import { common } from "../../data";

export const Address: React.FC = () => {
  const { address } = common;

  return (
    <div>
      <h3 className="contact-title">{address.title}</h3>
      <a
        href={`https://www.google.com/maps/?q=${address.text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to map"
        className="contact-text"
      >
        {address.text}
      </a>
    </div>
  );
};
