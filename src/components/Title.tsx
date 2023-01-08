import { FC } from 'react';

type Props = {
  title: string;
};

export const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className='text-red-500 text-center my-3 text-4xl font-semibold'>
      {title}
    </h1>
  );
}