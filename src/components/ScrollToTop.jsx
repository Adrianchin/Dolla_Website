//This is an incomplete component. How to use: This is from the react router dom site. You just need to pass <ScrollToTop/> in your new page and it will scroll to the top when you swap pages.

import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollToTop () {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },
    [pathname]
    );

    return null;
}