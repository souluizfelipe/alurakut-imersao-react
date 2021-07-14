import { useState } from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';


function ProfileSidebar(props) {
  return (
    <Box as="aside" style={{padding: '12px'}}>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

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

 
  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
          <div classNme="profileArea" style={{ gridArea: 'profileArea' }}>
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
          <ProfileRelationsBox boxTitle="Amigos" contentArray={friendsList} />
          <ProfileRelationsBox boxTitle="Comunidades" contentArray={comunidades} />

        </div>
      </MainGrid>
    </>
  )
}
