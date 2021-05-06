import {LineTabs, LineTab} from './styled';

interface PropsLine {
  activeTabs: number;
}

function Line({activeTabs}: PropsLine) {
  const line: number[] = [ 1, 2, 3, 4 ];

  return (
    <LineTabs>
      {line.map((_, index) => (
        <LineTab className={activeTabs === index ? "active" : ""} key={index}/>
      ))}
    </LineTabs>
  );
}

export default Line;
