export type Props = {
  number: string;
};

const NumberIndicator = ({ number }: Props) => {
  return <h2 className="border text-red-500 px-2 py-2 leading-none text-5xl">{number}</h2>;
};

export default NumberIndicator;
