import Nav from './nav';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1.3px solid #264653'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Nav />
    {props.children}
  </div>
);

export default Layout;