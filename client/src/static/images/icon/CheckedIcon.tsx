export const CheckedIcon = ({
  size = 16,
  color = 'currentColor',
}: {
  size?: number
  color?: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M13.3334 4.45703L6.00008 11.7904L2.66675 8.45703"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
