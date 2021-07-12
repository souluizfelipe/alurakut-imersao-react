import  MainGrid  from '../src/components/MainGrid';
import  Box  from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

export default function Home() {

    const gitHubUser = 'souluizfelipe';
    const friendsList = [
        'omariosouto',
        'rafaballerini',
        'peas',
        'marcobrunodev',
        'juunegreiros',
        'souluizfelipe',
    ]

    function ProfileSideBar(props) {
        return (
            <Box>
                <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px' }} />
            </Box>
        )
    }    

  return (
      <>
        <AlurakutMenu />
        <MainGrid>
            <div classNme="profileArea" style={{ gridArea: 'profileArea' }}>
                <ProfileSideBar gitHubUser={gitHubUser} />
            </div>
            <div className="welcomeArea" style={{ gridArea: 'contentArea' }}>
                <Box>
                    <h1 className='title'>
                        Bem Vindo(a)!
                    </h1>

                    <OrkutNostalgicIconSet />
                </Box>
            </div>
            <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
                <ProfileRelationsBoxWrapper>
                    <h2 className='smallTitle'>
                        Amigos ({friendsList.length})
                    </h2>
                    <ul>
                        {friendsList.map((itemList) => {
                            return (
                                <li>
                                    <a href={`/users/${itemList}`} key={itemList}> 
                                        <img src={`https://github.com/${itemList}.png`} />
                                        <span>{itemList}</span>
                                    </a>
                                </li>
                            )
                        })}                    
                    </ul>
                </ProfileRelationsBoxWrapper>
            </div>
        </MainGrid>
    </>
  )
}
