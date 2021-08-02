import BasicInfo from '../data/basicInfo'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="py-4 text-center">
          <small>
            Copyright &copy;{" "}
            {BasicInfo.name}
          </small>
        </div>
        <div className="py-4 text-right">
          <small>
            {BasicInfo.lastUpdated}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
