import { common } from "../../data";

export const Contacts: React.FC = () => {
  const { contacts } = common;
  return (
    <div>
      <h3 className="contact-title">{contacts.title}</h3>
      <ul>
        {contacts.contact.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              aria-label={item.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-text"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
