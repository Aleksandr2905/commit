import { common } from "../../data";

export const Phone: React.FC = () => {
  const { phone } = common;

  return (
    <div>
      <h3 className="contact-title">{phone.title}</h3>
      <ul>
        {phone.numbers.map((number) => (
          <li key={number}>
            <a
              href={`tel:${number.replace(/\s|\(|\)/g, "")}`}
              aria-label="link to call"
              className="contact-text"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
