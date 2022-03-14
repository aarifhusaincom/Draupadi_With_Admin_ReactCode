import React from 'react'
import {WidgetLgDiv,WidgetLgTitle,WidgetLgColumn,WidgetLgTable,WidgetLgRow,WidgetLgTd} from './WidgetLElem'

export default function WidgetLg() {
    return (
        <WidgetLgDiv>
        <WidgetLgTitle>Transactions</WidgetLgTitle>
        <WidgetLgTable>
        <WidgetLgRow>
        <WidgetLgColumn>customer</WidgetLgColumn>
        <WidgetLgColumn>Date</WidgetLgColumn>
        <WidgetLgColumn>Amount</WidgetLgColumn>
        <WidgetLgColumn>Status</WidgetLgColumn>
        </WidgetLgRow>
        <WidgetLgRow>
        <WidgetLgTd>Manjunath</WidgetLgTd>
        <WidgetLgTd>22-10-2021</WidgetLgTd>
        <WidgetLgTd>$2500</WidgetLgTd>
        <WidgetLgTd>Confirmed</WidgetLgTd>
        </WidgetLgRow>
        </WidgetLgTable>
        </WidgetLgDiv>
    )
}
