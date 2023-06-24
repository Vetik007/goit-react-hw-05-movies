// import { FiArrowLeftCircle } from 'react-icons/fi';
import { AiFillBackward } from 'react-icons/ai';
import { Button, LinkBack } from './ButtonBack.styled';

const ButtonBack = ({ to }) => {
  return (
    <LinkBack to={to}>
      <Button>
        <AiFillBackward /> Go Back
      </Button>
    </LinkBack>
  );
};

export default ButtonBack;
