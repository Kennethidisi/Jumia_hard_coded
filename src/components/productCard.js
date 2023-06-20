export default function ProductCard(props){
    return(
        <div className="p_card">
            <span>{props.discount}</span>
            <img src={props.productImg}/>

            <div className="p_card_bottom">
                <p>{props.productName}</p>
                <h3>{props.amount}</h3>
                <h4>{props.ex_amt}</h4>
            </div>

        </div>
    )
}