
type iconsConfigs = {
    width?: number,
    height?: number,
    color?: string,
    strokeWidht?: string
}


const MenuIcon = ({ width = 24, height = 24, color = 'white', strokeWidht = '1.5' }: iconsConfigs) => {


    return (
        <>
            <svg width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.50012C3 3.87491 3.02811 3.00012 6.5 3.00012C9.97189 3.00012 10 3.87491 10 6.50012C10 9.12533 10.0111 10.0001 6.5 10.0001C2.98893 10.0001 3 9.12533 3 6.50012Z" stroke={`${color}`} strokeWidth={`${strokeWidht}`} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 6.50012C14 3.87491 14.0281 3.00012 17.5 3.00012C20.9719 3.00012 21 3.87491 21 6.50012C21 9.12533 21.0111 10.0001 17.5 10.0001C13.9889 10.0001 14 9.12533 14 6.50012Z" stroke={`${color}`} strokeWidth={`${strokeWidht}`} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 17.5001C3 14.8749 3.02811 14.0001 6.5 14.0001C9.97189 14.0001 10 14.8749 10 17.5001C10 20.1253 10.0111 21.0001 6.5 21.0001C2.98893 21.0001 3 20.1253 3 17.5001Z" stroke={`${color}`} strokeWidth={`${strokeWidht}`} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 17.5001C14 14.8749 14.0281 14.0001 17.5 14.0001C20.9719 14.0001 21 14.8749 21 17.5001C21 20.1253 21.0111 21.0001 17.5 21.0001C13.9889 21.0001 14 20.1253 14 17.5001Z" stroke={`${color}`} strokeWidth={`${strokeWidht}`} strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

export default MenuIcon;