import {FeaturedDiv,FeaturedItem,FeaturedTitle,FeaturedMoney,FeaturedMoneyRate,FeaturedMoneyContainer,FeaturedSub,IconOne,IconTwo} from './FeaturedElem';

export default function Featured() {
    return (
        <FeaturedDiv>
        <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
        <FeaturedMoney>$4500</FeaturedMoney>
        <FeaturedMoneyRate>-33<IconOne/></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>  
        <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
        <FeaturedMoney>$5000</FeaturedMoney>
        <FeaturedMoneyRate>-25<IconOne/></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>  
        <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
        <FeaturedMoney>$4800</FeaturedMoney>
        <FeaturedMoneyRate>+23<IconTwo/></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>  
        <FeaturedItem>
        <FeaturedTitle>Income</FeaturedTitle>
        <FeaturedMoneyContainer>
        <FeaturedMoney>$5500</FeaturedMoney>
        <FeaturedMoneyRate>-23<IconOne/></FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>        
        </FeaturedDiv>
    )
}
