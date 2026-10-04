import { useEffect, useState, useRef } from "react";

function useRevealOnView(){
    const elementRef = useRef(null);
    const [isVisible, setisVisible] = useState(false);

    useEffect(()=>{
        const observe = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting){
                setisVisible(true);
                observe.disconnect();
            }
        },
        {threshold : 0.4}
        );

        if(elementRef.current){
            observe.observe(elementRef.current);
        }

        return() => observe.disconnect();
    }, []);
    
    return {
        elementRef,
        isVisible,
    };
}
export default useRevealOnView;