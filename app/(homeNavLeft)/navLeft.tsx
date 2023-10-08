import Image from 'next/image';
import x_logo from '../../public/image/x_logo.png';

export default function NavLeft() {
  return (
    <div>
      <Image width={30} height={30} src={x_logo} alt="x picture" className="" />
    </div>
  );
}
