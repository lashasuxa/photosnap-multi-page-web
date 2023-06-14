import PriceList from "../Components/PriceList"
import SubHead from "../Components/SubHead"
import Compare from "../Components/Compare"
import Invite from "../Components/Invite"
function Pricing (){
    return (
        <>
       <SubHead itemIndex={1} />
        <PriceList/>
        <Compare/>
        <Invite/>

        </>

    )
}
export default Pricing