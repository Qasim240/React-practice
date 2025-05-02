import React from 'react'

const Tabs = ({ children, TabsButtons, ButtonsContainer }) => {


    return (
        <>
            <ButtonsContainer>
                {TabsButtons}
            </ButtonsContainer>
            {children}
        </>
    )
}

export default Tabs