import { useEffect, useState } from 'react';

const DEFAULT_MOBILE_SIZE_BREAKPOINT = 1160;

export default function useIsAtBreakpoint() {
	const [widthSize,setWidthSize]=useState(0)

    useEffect(() => {

        const handleWidth = () => {
            setWidthSize(window.innerWidth)
        }

        window.addEventListener('resize',handleWidth)
        handleWidth();

        return () => window.removeEventListener('resize',handleWidth) 

    }, [])
    // console.log("width ---",widthSize);
    return widthSize
}
