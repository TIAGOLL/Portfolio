
type IconsConfigs = {
    width?: number,
    height?: number,
    color?: string,
    strokeWidht?: string,
    bgCircle?: string,
}


const LoadingIcon = ({ width = 50, height = width, color = 'white', bgCircle = '#d9d9d9' }: IconsConfigs) => {


    return (
        <>
            <svg className="animate-spin" width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke={bgCircle} stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
                <path className="opacity-75" fill={`${color}`} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </>
    )
}

export default LoadingIcon;