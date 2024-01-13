import Tags from "./Tags"

const MyCard = ({name, desc, img}) => {
  return(
    <>
      <img src={img}/>
      <h3>{name}</h3>
      <p>{desc}</p>
      <Tags />
    </>
  )
}

export default MyCard