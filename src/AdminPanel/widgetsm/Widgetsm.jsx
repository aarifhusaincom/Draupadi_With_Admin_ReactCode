import React from 'react'
import {WidgetsmDiv,WidgetsmTitle,WidgetsmList,WidgetsmlistItem,WidgetsmUser,Widgetsmbutton,WidgetsmName,WidgetsmUserTitle} from './WidgetsElem';

export default function Widgetsm() {
    return (
        <WidgetsmDiv>
            <WidgetsmTitle>New Orders</WidgetsmTitle>
            <WidgetsmList>
            <WidgetsmlistItem>
            <WidgetsmUser>
            <WidgetsmName>Manjunath</WidgetsmName>
            <WidgetsmUserTitle>Developer</WidgetsmUserTitle>
            </WidgetsmUser>
            <Widgetsmbutton>VISIBLE</Widgetsmbutton>
            </WidgetsmlistItem>
            </WidgetsmList>
        </WidgetsmDiv>
    )
}
