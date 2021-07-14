import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/MainGrid/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

const ProfileSideBar = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
};

export default function Home() {
  const actualUser = 'giordanomenezes';
  const myfriends = ['omariosouto', 'juunegreiros', 'marcobrunodev', 'rafaballerini', 'peas', 'rodrigobranas'];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={actualUser} />
        </div>
        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className='relationsArea' style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>{`Meus Amigos(${myfriends.length})`}</h2>
            <ul>
              {myfriends.map((fr) => {
                return (
                  <li>
                    <a href={`/users/${fr}`} key={fr}>
                      <img src={`https://github.com/${fr}.png`} />
                      <span>{fr}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
