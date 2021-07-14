import { ProfileRelationsBoxWrapper } from "../ProfileRelations";

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle'>
        {props.boxTitle} ({props.contentArray.length})
      </h2>
      <ul >
        {props.contentArray.map((itemList) => {
          return (
            <li key={itemList.id}>
              <a href={`/users/${itemList.title}`}>
                <img src={itemList.image} />
                <span>{itemList.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <hr/>
      <p>
        <a className="boxLink" href="#" >
          Ver todos
        </a>  
      </p>

    </ProfileRelationsBoxWrapper>
  );
};

export default ProfileRelationsBox