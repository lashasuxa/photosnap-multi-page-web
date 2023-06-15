import Highlights from "../Components/Highlights"
import Invite from "../Components/Invite"
import SubHead from "../Components/SubHead"

function Features (){
    return (
        <>
        
        <SubHead itemIndex={0} />
        <Highlights maxHighlights={6}/>
        <Invite/>
       
        </>
    )
}
export default Features