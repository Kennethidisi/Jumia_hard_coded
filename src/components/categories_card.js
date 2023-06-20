export default function CategoriesCard(props){
    return(
        <div className="catCard">
            <img src={props.imgPath} className="catCard_img"/>
            <p>{props.text}</p>
        </div>
    )
}