const buttonType = {
  base: ['cursor-pointer', 'rounded', 'py-2', 'px-4'],
  primary: [],
  secondary: [],
  soft: ['bg-blue-500/20', 'hover:bg-blue-500/40'],
}

export type ButtonProps = {
  text: string
  variant: keyof typeof buttonType
}

const Button = ({ text, variant }: ButtonProps) => {
  return (
    <button type="button" className={[...buttonType.base, ...buttonType[variant]].join(' ')}>
      {text}
    </button>
  )
}

export default Button
