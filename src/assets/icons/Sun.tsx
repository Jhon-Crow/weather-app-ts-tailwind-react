import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={38}
        fill="none"
        {...props}
    >
        <path
            fill="#000"
            d="M16.625 7.125V0h4.75v7.125h-4.75ZM21.375 30.875V38h-4.75v-7.125h4.75ZM26.125 19a7.125 7.125 0 1 1-14.25 0 7.125 7.125 0 0 1 14.25 0ZM0 21.375h7.125v-4.75H0v4.75ZM38 16.625h-7.125v4.75H38v-4.75ZM8.924 12.283 3.886 7.244l3.358-3.358 5.039 5.038-3.36 3.359ZM29.076 25.718l5.038 5.038-3.358 3.358-5.038-5.038 3.358-3.358ZM7.244 34.114l5.039-5.038-3.36-3.358-5.037 5.038 3.358 3.358ZM30.756 3.886l-5.038 5.038 3.358 3.359 5.038-5.039-3.358-3.358Z"
        />
    </svg>
)
export default SvgComponent
