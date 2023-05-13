
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

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
export default function OverlayDemo(prop) {
    const op = useRef(null);

    return (
      <>
            <Button severity="warning"  link
                    label= {prop.label} style ={{padding : '0px 10px'}}
                    onMouseEnter={(e) => op.current.toggle(e)} onMouseLeave ={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                {prop.contents}
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
//     <ButtonIconWrapper {...props} >
//     <Button severity="warning"  link
//                         label= "aaa"  style = {props.padding}
//                         onMouseEnter={(e) => op.current.toggle(e)} onMouseLeave ={(e) => op.current.toggle(e)} />
//                 <OverlayPanel ref={op}>
//                     "aLorem ipsum dolor sit amet,
//                     consectetur adipiscing elit, sed do eiusmod
//                      tempor incididunt ut labore et dolore magna aliqua.
//                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 </OverlayPanel>
//     </ButtonIconWrapper>
//   );
// };
//
// OverlayDemo.propTypes = {
//   contents: PropTypes.string,
// };
// export default OverlayDemo;
