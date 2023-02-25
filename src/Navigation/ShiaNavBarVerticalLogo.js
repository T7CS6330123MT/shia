import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShiaNavBarVerticalLogo.css';
import shia_app_icon from './shia_app_icon.png';

export function ShiaNavBarVerticalLogo() {
  return (
    <div className="NavBarLogo">
      <Figure>
        <Figure.Image
          width={200}
          height={100}
          alt="171x180"
          src={shia_app_icon}
        />
        <Figure.Caption>
          Helping you save time, <br/>
          with your home supplies!
        </Figure.Caption>
      </Figure>
    </div>
  );
}