type Props = {
  message?: string;
};

export default function FormError({ message }: Props) {
  return (
    <p className="absolute -bottom-4 left-5 text-[11px]/[13px] tracking-[-0.085px] text-[#f00]">
      {message}
    </p>
  );
}
