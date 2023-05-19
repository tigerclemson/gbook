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
    
    const { data, error } = useSWR('/data/test.json', fetcher);
    
    // const datas = require('/public/data/ KICS-INDEX.json')
//     const jsonDirectory = path.join(process.cwd(), 'json');
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + '/data/KICS-INDEX.json', 'utf8');

// const data = fetch('/data/test.json').then((res) => res.json());

//   const zzz  = data?.find( (aaa) => aaa.ID === prop.id);

// console.log('aaa :' + zzz); 

  
const title  = data?.filter( (aaa) => aaa.title === prop.title)
                     .map( (aaa) => (aaa.title + ' ('+ aaa.ID + ')')
                                // {
                                //     return aaa.title + ' ('+ aaa.ID + ')';

                                // }
                        )
                    ;
// var level =[]
const level  = data?.filter( (aaa) => aaa.title === prop.title)
                    .map( function(element, index, array)  {
                            console.log('bbb :' + element.title);
                             return  element.level;
                        }
                    )    
                   ;
console.log('ccc :' + level) ;                
// useEffect(() => {
// console.log(xxx);
// return () => {
//     console.log(xxx[0]);
// };
// }, []);


    return (
        <>
            <Button severity="warning"  link
                    label= {title} style ={{padding : '0px 10px'}}
                    onMouseEnter={(e) => op.current.toggle(e)} onMouseLeave ={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                {level}
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
