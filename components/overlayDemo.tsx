import React, { useRef ,  useEffect } from 'react';

import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
// import path from 'path';
// import { promises as fs } from 'fs';
import useSWR from 'swr';
// export default function OverlayDemo( data) {
//     const op = useRef(null);
//
//     return (
//         <div className="card flex justify-content-center">
//             <Button link  label= {data.key} onMouseEnter={(e) => op.current.toggle(e)} />
//             <OverlayPanel ref={op}>
//                 {data.desc}
//             </OverlayPanel>
//         </div>
//     );
// }
//
const fetcher = (url) => fetch(url).then((res) => res.json());


export default function OverlayDemo(prop) {
    const op = useRef(null);

    console.log(prop.id);

    const { data, error } = useSWR('/data/KICS-INDEX.json', fetcher);

// filter -> find
const title  = data?.filter( (aaa) => aaa.id === prop.id)
                     .map( (aaa) => (aaa.name + ' ('+ aaa.desc + ')')
                        )
                    ;
// var desc =[]
const desc = data?.filter((aaa) => aaa.id === prop.id)
                     .map(function (element, index, array) {
                       console.log('bbb :' + element.ID);
                       if (element.LEVEL3) {
                         return element.LEVEL1 + ' > ' + element.LEVEL2 + ' > ' + element.LEVEL3;
                       }
                       return element.LEVEL1 + ' > ' + element.LEVEL2;
                     }
                   )
                   ;
// console.log('ccc :' + desc) ;

const url  = data?.filter( (aaa) => aaa.id === prop.id)
                     .map( (aaa) => (aaa.url))
                    ;

console.log('url :' + url) ;

    return (
        <>
            <Button severity="warning"  link
                    label= {title} style ={{padding : '0px 10px'}}
                    onMouseEnter={(e) => op.current.toggle(e)} onMouseLeave ={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                {desc}
            </OverlayPanel>
    </>
    );
}


// const ButtonIconWrapper = styled('Botton')`
//   padding: 0px 10px;
// `;
//
// const OverlayDemo = ({...props }) => {
//   return (
    // <ButtonIconWrapper {...props} >
    // <Button severity="warning"  link
    //                     label= "aaa"  style = {props.padding}
    //                     onMouseEnter={(e) => op.current.toggle(e)} onMouseLeave ={(e) => op.current.toggle(e)} />
    //             <OverlayPanel ref={op}>
    //                 "aLorem ipsum dolor sit amet,
    //                 consectetur adipiscing elit, sed do eiusmod
    //                  tempor incididunt ut labore et dolore magna aliqua.
    //                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //             </OverlayPanel>
    // </ButtonIconWrapper>
//   );
// };
//
// OverlayDemo.propTypes = {
//   contents: PropTypes.string,
// };
// export default OverlayDemo;
