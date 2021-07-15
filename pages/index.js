import { useState, useEffect } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import ProfileSidebar from '../src/components/ProfileSidebar';
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';



export default function Home() {

  const githubUser = 'souluizfelipe';

  const [comunidades, setComunidades] = useState([{
    id: 1273127381,
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  const friendsList = [
    {
    id: 'omariosouto',
    title: 'omariosouto',
    image: 'https://github.com/omariosouto.png'
    },
    {
      id: 'rafaballerini',
      title: 'rafaballerini',
      image: 'https://github.com/rafaballerini.png'
    },  
    {
      id: 'peas',
      title: 'peas',
      image: 'https://github.com/peas.png'
    },  
    {
      id: 'juunegreiros',
      title: 'juunegreiros',
      image: 'https://github.com/juunegreiros.png'
    },  
    {
      id: 'marcobrunodev',
      title: 'marcobrunodev',
      image: 'https://github.com/marcobrunodev.png'
    },  
    {
      id: 'joaopealves',
      title: 'joaopealves',
      image: 'https://github.com/joaopealves.png'
    },  
    {
      id: 'souluizfelipe',
      title: 'souluizfelipe',
      image: 'https://github.com/souluizfelipe.png'
    },  
  ]  

  const [following, setFollowing] = useState([]);
  // console.log(following)

  useEffect(() => {
    fetch('https://api.github.com/users/souluizfelipe/following')
    .then(serverResponse => {
      return serverResponse.json()
    })
    .then(convertedResponse => {
      setFollowing(convertedResponse)
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

                const comunidade = {
                  id: new Date().toISOString(),
                  title: inputFormData.get('communityTitle'),
                  image: inputFormData.get('communityImage'),
                };

                const comunidadesAtualizadas = [...comunidades, comunidade]
                setComunidades(comunidadesAtualizadas)
              }}
            >             
              
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
          <ProfileRelationsBox boxTitle="Seguindo" contentArray={following} />
          <ProfileRelationsBox boxTitle="Amigos" contentArray={friendsList} />
          <ProfileRelationsBox boxTitle="Comunidades" contentArray={comunidades} />

        </div>
      </MainGrid>
    </>
  )
}
