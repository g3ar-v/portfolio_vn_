import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHeadsObserver } from './hooks';

const getClassName = (level) => {
  switch (level) {
    case 2:
      return 'head2';
    case 3:
      return 'head3';
    case 4:
      return 'head4';
    default:
      return null;
  }
};
function TableOfContent() {
  const [heading, setHeading] = useState([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h3')).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1))
      })
    );
    setHeading(elements);
  }, []);

  return (
    <Box>
      <ul>
        {heading.map((heading) => (
          <li
            key={heading.text}
            className={getClassName(heading.level)}
            style={{
              marginBottom: '15px',
              marginLeft: '20px',
              listStyleType: 'none'
            }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`#${heading.id}`)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                color: activeId === heading.id ? '#ED6C35' : 'black'
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
}
export default TableOfContent;
