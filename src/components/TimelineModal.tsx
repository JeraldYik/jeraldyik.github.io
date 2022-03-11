import { Data } from './Timeline';
import { Modal } from 'react-bootstrap';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

interface IProps {
  data: Data;
  onHide: () => void;
  show: boolean;
}

const TimelineModal = (props: IProps): JSX.Element => {
  const header = ('organisation' in props.data && props.data.organisation) || ('name' in props.data && props.data.name);
  const subHeader = ('role' in props.data && props.data.role) || ('location' in props.data && props.data.location);
  const description = props.data.description.map((desc, i) => {
    return <li key={i}>{desc}</li>;
  });

  const tech =
    'technologies' in props.data &&
    props.data.technologies!.map((tech, i) => {
      return (
        tech.icon && (
          <li className='list-inline-item mx-3' key={i}>
            <span>
              <div className='text-center'>
                <i className={`${tech.icon} tech-icon`}>
                  <p className='text-center tech-icon-label'>{tech.label}</p>
                </i>
              </div>
            </span>
          </li>
        )
      );
    });

  const anchors =
    'anchors' in props.data &&
    props.data.anchors!.map((anchor, i) => {
      return (
        <li key={i}>
          <a href={anchor.link} target='_blank' rel='noopener noreferrer'>
            {anchor.label}
          </a>
        </li>
      );
    });

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered className='modal-inside'>
      <span onClick={props.onHide} className='modal-close'>
        <i className='fas fa-times fa-3x close-icon'></i>
      </span>
      <div className='col-md-12'>
        <div className='col-md-10 mx-auto modal-section'>
          <h3 style={{ padding: '5px 5px 0 5px' }}>{header}</h3>
          <h5 style={{ padding: '5px 5px 0 5px' }}>{subHeader}</h5>
        </div>
        <div className='col-md-10 mx-auto modal-section'>
          <ul className='modal-description'>{description}</ul>
        </div>
        {Array.isArray(anchors) && anchors.length > 0 && (
          <div className='col-md-10 mx-auto modal-section modal-section-last-item'>
            <h5>Navigate to these links below to find out more!</h5>
            <ul className='modal-description'>{anchors}</ul>
          </div>
        )}
        <div className='col-md-10 mx-auto'>
          <div className='col-md-12 text-center'>
            <ul className='list-inline mx-auto'>{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TimelineModal;
