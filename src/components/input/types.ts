export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  leftIcon?: React.ReactNode;
  control: any;
  name: string;
  errorMessage?: string;
}