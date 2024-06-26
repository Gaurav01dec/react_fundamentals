export default function Tabbuttons({ children, selectedHighlight ,...props}) {

    return (
        <li>
            <button className={selectedHighlight ? "active" : undefined} {...props}>{children}</button>
        </li>
    )
}
// export default function Tabbuttons({ children, onSelect, selectedHighlight }) {

//     return (
//         <li>
//             <button className={selectedHighlight ? "active" : undefined} onClick={onSelect}>{children}</button>
//         </li>
//     )
// }

//props.children gets you the content 