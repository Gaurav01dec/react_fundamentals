export default function Tabs({ children,buttons,buttonsCOntainer }) {
    //using the menu html element in the code by passing as a props
    // we are using uppercase here because it is an html element
    const ButtonsContainer = buttonsCOntainer;
    return (
        <>
            <ButtonsContainer>
              {buttons}
            </ButtonsContainer>
            {/* contennt */}
            {children}
        </>
    )
}