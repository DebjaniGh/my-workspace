export interface btnType {
  label: string;
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}
