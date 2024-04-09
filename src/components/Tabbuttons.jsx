export default function Tabbuttons({children,onSelect}) {

    // function handleClick() {
    //     console.log("i am clicked");
    // }
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}

//props.children gets you the content 