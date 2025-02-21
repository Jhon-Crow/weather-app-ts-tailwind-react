import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={37}
        height={37}
        fill="none"
        {...props}
    >
        <path
            fill="#F2F0E7"
            d="M0 18C0 10.294 4.587 3.66 11.18.68l2.25 2.249a15.375 15.375 0 0 0-1.555 6.758c0 8.526 6.912 15.438 15.438 15.438 2.423 0 4.717-.559 6.758-1.554l2.25 2.25C33.34 32.413 26.706 37 19 37 8.507 37 0 28.493 0 18ZM27.313 15.625l-5.938-5.938 5.938-5.937 5.937 5.937-5.938 5.938Z"
        />
    </svg>
)
export default SvgComponent
