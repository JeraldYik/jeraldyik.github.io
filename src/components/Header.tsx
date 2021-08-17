import { useMemo } from 'react';
import Typical from 'react-typical';
import BasicInfo from '../data/basicInfo';

const Header = (): JSX.Element => {
  const name = BasicInfo.name;
  const titles = BasicInfo.titles.map((x) => [x.toUpperCase(), 1500]).flat();
  const socials = BasicInfo.socials;

  const HeaderTitleTypeAnimation = useMemo(() => {
    return <Typical className='title-styles' steps={titles} loop={Infinity} wrapper='p' />;
  }, [titles]);

  return (
    <header id='home' style={{ display: 'block', height: '100vh', maxHeight: '800px' }}>
      <div id='work-in-progress-pill'>Work in progress</div>
      <div className='row aligner' style={{ display: 'block' }}>
        <div className='col-md-12'>
          <div className='intro-container'>
            <span className='iconify header-icon' data-icon='la:laptop-code' data-inline='false'></span>
            <h1 className='mb-0'>{name}</h1>
            <div className='title-container'>{HeaderTitleTypeAnimation}</div>
          </div>
          <div className='icon-container'>
            {socials.map((social) => (
              <a href={social.url} key={social.name} target='_blank' rel='noopener noreferrer'>
                <span className='iconify social-icon' data-icon={social.class} data-inline='false'></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
