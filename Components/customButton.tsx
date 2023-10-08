import { CustomButtonType } from '@/Types/types';

export function CustomButton({
  height,
  width,
  color,
  title,
}: CustomButtonType) {
  return (
    <button style={{ height: height, width: width, background: color }}>
      {title}
    </button>
  );
}
