import { useState, useEffect } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import ProfileSidebar from '../src/components/ProfileSidebar';
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

export default function Home() {

  const githubUser = 'souluizfelipe';
  const [communities, setCommunities] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/souluizfelipe/following')
    .then(serverRes => serverRes.json())
    .then(convertedRes => setFollowing(convertedRes))

    fetch('https://api.github.com/users/souluizfelipe/followers')
    .then(serverRes => serverRes.json())
    .then(convertedRes => setFollower(convertedRes))

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '552025b1dbad880929693f9e12f0b8',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
            allCommunities {
              id
              title
              imageUrl
              creatorSlug
            }
          }` })
      })
      .then(serverRes => serverRes.json())
      .then(convertedRes => {
        const communitiesFromDb = convertedRes.data.allCommunities;
        console.log(communitiesFromDb)
        setCommunities(communitiesFromDb)
      })
  }, [])
 
  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
          <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>
              Bem Vindo(a), {githubUser}
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          
          <Box>
            <form onSubmit={function handleCreateCommunity(e) {
                e.preventDefault()
                
                const inputFormData = new FormData(e.target);

                const community = {
                  title: inputFormData.get('communityTitle'),
                  imageUrl: inputFormData.get('communityImage'),
                  creatorSlug: githubUser,
                };

                fetch('./api/communities', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                  body: JSON.stringify(community)
                })
                .then(async(res) => {
                  const data = await res.json();
                  const community = data.record;
                  const updatedCommunities = [...communities, community];
                  setCommunities(updatedCommunities);
                });
             
            }}>             
              
              <input 
                placeholder="Nome"
                name="communityTitle"
                aria-label="O que você deseja fazer?"
                type="text"
              />
              <input 
                type="url"
                placeholder="URL"
                name="communityImage"
              />
              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>  

        <div className="profileRelationsArea" 
          style={{ gridArea: 'profileRelationsArea' }}
        >       

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              comunidades ({communities.length})
            </h2>
            <ul >
              {communities.map((itemList) => {
                return (
                  <li key={itemList.id}>
                    <a href={`/communities/${itemList.id}`}>
                      <img src={itemList.imageUrl} />
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

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Seguidores ({follower.length})
            </h2>
            <ul >
              {follower.map((itemList) => {
                return (
                  <li key={itemList.id}>
                    <a href={`/users/${itemList.login}`}>
                      <img src={itemList.avatar_url} />
                      <span>{itemList.login}</span>
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

          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Seguindo ({following.length})
            </h2>
            <ul >
              {following.map((itemList) => {
                return (
                  <li key={itemList.id}>
                    <a href={`/users/${itemList.login}`}>
                      <img src={itemList.avatar_url} />
                      <span>{itemList.login}</span>
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

        </div>
      </MainGrid>
    </>
  )
}
